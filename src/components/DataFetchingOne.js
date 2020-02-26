import React,{useState,useEffect} from 'react'
import axios from 'axios'
function DataFetchingOne() {
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const [post,setPost]= useState({});

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res=>{
            setLoading(false);
            setError('');
            setPost(res.data);
        })
        .catch(err=>{
            setError('something went wrong');
            setPost({});
            setLoading(false);
        })
    })
    return (
        <div>
            {loading ? 'loading' : post.title}
            {error? error : null }
        </div>
    )
}

export default DataFetchingOne
