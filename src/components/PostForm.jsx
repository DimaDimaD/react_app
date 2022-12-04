import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import CreateButton from "./UI/button/CreateButton";

const PostForm = ({add}) => {

    const [post, createPost] = useState({title: '', description: ''});

    const addNewPost = (event) => {
        event.preventDefault()

        const newPost = {...post, id: Date.now()}
        add(newPost);

        createPost({title: '', description: ''})
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
                    value={post.description}
                    onChange={e => createPost({...post, description: e.target.value})}
                    type='text'
                    placeholder='Description of post'
                />
                <CreateButton onClick={addNewPost}>Create post</CreateButton>
            </form>
        </div>
    );
};

export default PostForm;