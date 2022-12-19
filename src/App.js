import React, {useEffect, useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import CreateButton from "./components/UI/button/CreateButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import PostSortingSelector from "./components/UI/postSortingSelector/postSortingSelector";
import PostFilter from "./components/PostFilter";
import CreateModal from "./components/UI/CreateModal/CreateModal";
import {TransitionGroup} from "react-transition-group";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetch} from "./hooks/useFetch";
import {getPagesArr, getPagesCount} from "./utils/pages";
import Pagination from "./components/UI/Pagination/Pagination";


function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, isPostError] = useFetch(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalPosts = response.headers['x-total-count'];
        setTotalPages(getPagesCount(limit,totalPosts));
    });

    let pagesArray = getPagesArr(totalPages);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


    useEffect(() => { fetchPosts() }, [page]);

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    // const modifyPost = (id, str) => {
    //     const newPosts = posts.map(p => {
    //         if (p.id === id) {
    //             return {...p, body: str};
    //         }
    //         return p;
    //     })
    //     setPosts(newPosts);
    // }

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
                isPostError && <h1>Error: ${isPostError}</h1>
            }
            {
                isPostsLoading
                    ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '70px'}}>
                        <Loader />
                    </div>
                    : <PostList posts={sortedAndSearchedPosts}
                        // modify={modifyPost}
                               remove={deletePost} title={'Posts list:'}/>
            }
            <Pagination
                pagesArray={pagesArray}
                page={page}
                setPage={setPage} />

        </div>
    );
}


export default App;
