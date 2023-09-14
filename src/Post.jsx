import { useEffect } from "react"
import { useState } from "react"


export default function Post(){
   
    const [posts, setPost] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return(
        <div>
        <h3>Post: {posts.length}</h3>
        </div>
    )
}

/** 
 * 1 create state to store data
 * 2 . create ude effect with no dependendeny
 * 3. use fetch to load data
 * */ 