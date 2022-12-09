import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, modify, remove, title}) => {

    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>
            No posts.
        </h1>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                <PostItem modify={modify} remove={remove} number={index + 1} post={post} key={post.id} id={post.id}/>)}
        </div>
    );
};

export default PostList;