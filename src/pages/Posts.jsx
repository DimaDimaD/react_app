import React, {useEffect, useRef, useState} from 'react';

import '../styles/App.css'
import PostList from "../components/PostList";
import CreateButton from "../components/UI/button/CreateButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import CreateModal from "../components/UI/CreateModal/CreateModal";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetch} from "../hooks/useFetch";
import {getPagesCount} from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";
import {usePagination} from "../hooks/usePagination";
import {useObserver} from "../hooks/useObserver";


function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const lastElement = useRef();
    console.log(lastElement)

    const [fetchPosts, isPostsLoading, isPostError] = useFetch(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalPosts = response.headers['x-total-count'];
        setTotalPages(getPagesCount(limit, totalPosts));
    });

    let pagesArray = usePagination(totalPages, limit);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts()
    }, [page]);

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }


    const deletePost = (post) => {
        setPosts(posts.filter(p =>
            p.id !== post.id
        ))
    }


    return (
        <div className='App'>
            <CreateButton
                style={{marginTop: 30}}
                onClick={() => setModal(true)}
            >
                New post
            </CreateButton>
            <CreateModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm add={addPost} />
            </CreateModal>
            <hr style={{margin: '15px 0px'}} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {
                isPostError && <h1>
                    Error: ${isPostError}
                </h1>
            }
            <PostList
                posts={sortedAndSearchedPosts}
                remove={deletePost}
                title={'Posts list:'}/>
            <div ref={lastElement} style={{height: '20px', background: 'red'}}></div>
            {
                isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '70px'}}>
                        <Loader />
                </div>
            }
            <Pagination
                pagesArray={pagesArray}
                page={page}
                setPage={setPage} />

        </div>
    );
}


export default Posts;