import React, {useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import CreateButton from "./components/UI/button/CreateButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import PostSortingSelector from "./components/UI/postSortingSelector/postSortingSelector";


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript ', description: 'Describe'},
        {id: 2, title: 'Java', description: 'Describe'},
    ]);

    const [selectedSort, setSelectedSort] = useState('');

    const setSort = sort => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
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

    return (
        <div className='App'>
            <PostForm add={addPost} />
            <hr style={{margin: '15px 0px'}} />
            <PostSortingSelector
                value={selectedSort}
                onChange={setSort}
                defaultValue='Sort by'
                options={[
                    {
                        value: 'title',
                        name: 'By name'
                    },
                    {
                        value: 'description',
                        name: 'By description'
                    }
                ]}/>
            {posts.length
                ?
                <PostList posts={posts} modify={modifyPost} remove={deletePost} title={'Posts list:'}/>
                :
                <h1 style={{textAlign: 'center'}}>
                    No posts.
                </h1>
            }
        </div>
    );
}

export default App;
