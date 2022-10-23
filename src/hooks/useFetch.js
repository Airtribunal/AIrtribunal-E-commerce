import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()
                setData([json.data])
                // console.log([json.data[0].attributes.itemImage.data.attributes.url]);
                setLoading(false)
            } catch (e) {
                setError(e)
                setLoading(false)
                console.log(e);
            }
        }
        fetchData()
        
    }, [url])
    return {data, loading, error}
}

export default useFetch