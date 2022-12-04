import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import CreateButton from "./components/UI/button/CreateButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript ', description: 'Describe'},
        {id: 2, title: 'Java', description: 'Describe'},
    ]);

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    }



    const modifyPost = (id, str) => {
        const newPosts = posts.map((p) => {
            if (p.id === id) {
                return {...p, description: str};
            }
            return p;
        })
        setPosts(newPosts);
    }

    // const deletePost = (postId) => {
    //   const newPosts = posts.filter(({id}) => {
    //       if (postId !== id) {
    //
    //       }
    //   })
    // }

    return (
        <div className='App'>
            <PostForm add={addPost} />
            <PostList posts={posts} modifyPost={modifyPost} title={'Posts list JS'}/>
        </div>
    );
}

export default App;
