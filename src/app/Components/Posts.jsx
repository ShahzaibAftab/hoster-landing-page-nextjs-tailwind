'use client'
import { useState, useEffect } from 'react';

export default function PostsPage() {

    const [posts, setPosts] = useState(null);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setPage(page + 1);
            setPosts(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    const loadMore = async () => {
        fetchData();
    };

    return (
        <div>
            <h1>Posts</h1>
            {posts && posts.map(p => <div key={p.id}>{p.id}_ {p.title}</div>)}
            <button onClick={loadMore}>Load More</button>
        </div>
    );
}
