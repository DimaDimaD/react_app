import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts,modifyPost, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem modifyPost={modifyPost} number={index + 1} post={post} key={post.id} id={post.id}/>)}
        </div>
    );
};

export default PostList;