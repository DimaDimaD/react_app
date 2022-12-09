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


function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript ', description: 'Describe'},
        {id: 2, title: 'Java', description: 'Description'},
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);


    const sortedPosts = useMemo(() => {
        console.log('getSortedPosts func started')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])


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
