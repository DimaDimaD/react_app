import React from "react";
import CreateButton from "./UI/button/CreateButton";

const PostItem = function ({modify, remove, ...props}) {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className='post__btns'>
                <CreateButton onClick={() => remove(props.post)}>Delete</CreateButton>
                {/*<CreateButton disabled onClick={() => modify(props.id)}>Modify</CreateButton>*/}
            </div>
        </div>
    )
}

export default PostItem;