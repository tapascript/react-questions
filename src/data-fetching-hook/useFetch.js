import { useEffect, useState } from "react";

const localCache = {};

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            if (localCache[url]) {
                setData(localCache[url]);
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const res = await fetch(url, { signal: controller.signal });
                const result = await res.json();
                localCache[url] = result;
                setData(result);
            } catch (err) {
                if (err.name !== "AbortError") setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
}
