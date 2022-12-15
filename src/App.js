import React, {useMemo, useRef, useState} from 'react';
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


function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const modifyPost = (id, str) => {
        const newPosts = posts.map(p => {
            if (p.id === id) {
                return {...p, description: str};
            }
            return p;
        })
        setPosts(newPosts);
    }

    const deletePost = (post) => {
      setPosts(posts.filter(p =>
          p.id !== post.id
      ))
    }

    const fetchPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        const posts = [];

        for (let obj of response.data) {
            let post = {};
            post.title = obj.title
            post.description = obj.body
            posts.push(post)
        }

        setPosts(posts);
    }


    return (
        <div className='App'>
            <CreateButton onClick={fetchPosts}>Fetch</CreateButton>
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
                <PostList posts={sortedAndSearchedPosts} modify={modifyPost} remove={deletePost} title={'Posts list:'}/>
        </div>
    );
}


export default App;
