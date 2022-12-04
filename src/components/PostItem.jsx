import React from "react";
import CreateButton from "./UI/button/CreateButton";

const PostItem = function (props) {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.description}</div>
            </div>
            <div className='post__btns'>
                <CreateButton>Delete</CreateButton>
                <CreateButton onClick={() => props.modifyPost(props.id)}>Modify</CreateButton>
            </div>
        </div>
    )
}

export default PostItem;