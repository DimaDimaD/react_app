import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import CreateButton from "./components/UI/button/CreateButton";
import MyInput from "./components/UI/input/MyInput";


function App() {

    const [posts, setPost] = useState([
        {id: 1, title: 'Javascript ', description: 'Describe'},
        {id: 2, title: 'Javascript 2', description: 'Describe'},
    ]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addNewPost = (event) => {
        event.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            description
        }
        setPost([...posts, newPost])
    };

    return (
        <div className='App'>
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type='text'
                    placeholder='Header of post'
                />

                <MyInput
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    type='text'
                    placeholder='Description of post'
                />
                <CreateButton onClick={addNewPost}>Create post</CreateButton>
            </form>
            <PostList posts={posts} title={'Posts list JS'}/>
        </div>
    );
}

export default App;
