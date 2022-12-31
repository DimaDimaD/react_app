import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {

    const params = useParams();

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchById, isLoading, error] = useFetch(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data)
    });
    const [fetchComById, isComLoading, comError] = useFetch(async (id) => {
        const response = await PostService.getComById(id);
        setComments(response.data)
    });

    useEffect(() => {
        fetchById(params.id)
        fetchComById(params.id)
    }, [])

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Post {params.id}</h1>
            {isLoading
                ? <Loader />
                : <h2 style={{textAlign: 'center'}}>{post.title}</h2> }
            <h1 style={{textAlign: 'center'}}>Comments</h1>
            <div>
                {isComLoading
                    ? <Loader />
                    : <div>
                        {comments.map(com => <div style={{marginTop: '20'}}>
                            <h3>{com.email}</h3>
                            <div>{com.body}</div>
                        </div>)}
                    </div> }
            </div>
        </div>
    );
};

export default PostIdPage;