import { useEffect, useMemo, useState } from "react";

export default function FetchPostsFixed() {
    const [posts, setPosts] = useState([]);

    const fetchOptions = useMemo(
        () => ({
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }),
        [],
    );

    useEffect(() => {
        console.log("Fetching posts...");
        fetch("https://jsonplaceholder.typicode.com/posts", fetchOptions)
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, [fetchOptions]);

    return <div>Fetched {posts.length} posts.</div>;
}
