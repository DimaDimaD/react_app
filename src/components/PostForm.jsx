import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import CreateButton from "./UI/button/CreateButton";

const PostForm = ({add, setModal}) => {

    const [post, createPost] = useState({title: '', body: ''});

    const addNewPost = (event) => {
        event.preventDefault()

        const newPost = {...post, id: Date.now()}
        add(newPost);

        createPost({title: '', body: ''})
    };

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    onChange={e => createPost({...post, title: e.target.value})}
                    type='text'
                    placeholder='Header of post'
                />

                <MyInput
                    value={post.body}
                    onChange={e => createPost({...post, body: e.target.value})}
                    type='text'
                    placeholder='Description of post'
                />
                <CreateButton onClick={addNewPost}>Create post</CreateButton>
            </form>
        </div>
    );
};

export default PostForm;