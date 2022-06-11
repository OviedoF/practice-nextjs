import Layout from "../../components/layout";
import Title from '../../components/title';
import React, { useState, useEffect } from 'react';
import PostCard from '../../components/posts/card';

function Posts(props) {
    // CLIENT SIDE RENDERING 
    //
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const newPosts = await res.json();
    //         setPosts(newPosts);
    //     }

    //     fetchPosts();
    // }, []);

    // SERVER SIDE RENDERING 
    //


    return ( 
        <Layout>
            <Title>Posts Page</Title>

            <PostCard posts={props.posts}></PostCard>


        </Layout>
     );
}

export async function getServerSideProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    
    return {
        props: {
            posts
        }
    };
}

export default Posts;