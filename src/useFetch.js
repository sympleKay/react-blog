import {useState, useEffect} from 'react';

const useFetch = (url) =>  {

    const [data, setdata] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortConst = new AbortController();

        const fetchdata = async () => {
            try {
                const res = await fetch(url, { signal: abortConst.signal });
                if (res.ok) {
                    return await res.json();
                } else {
                    throw Error('Could not fetch blog posts');
                }
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch Aborted');
                } else {
                    setError(error.message);
                }
            }
        }
        setTimeout( async () => {
            const data = await fetchdata();
            setdata(data);
            setIsLoading(false);
            setError(null);
        }, 1000);
        return () => abortConst.abort();
    }, [url]);

    return { data, isLoading, error}
}

export default useFetch