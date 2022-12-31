import React from "react";
import CreateButton from "./UI/button/CreateButton";
import {useNavigate} from 'react-router-dom'

const PostItem = function ({remove, ...props}) {

    const router = useNavigate();

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className='post__btns'>
                <CreateButton
                    onClick={() => remove(props.post)}
                >
                    Delete
                </CreateButton>
                <CreateButton
                    onClick={() => router(`/posts/${props.post.id}`)}
                >
                    Open
                </CreateButton>
            </div>
        </div>
    )
}

export default PostItem;