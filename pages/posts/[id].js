import { useRouter } from "next/router";
import Layout from "../../components/layout";
import OnlyPost from "../../components/posts/onlyPost";
import Title from '../../components/title';
import Head from "next/dist/shared/lib/head";

function Post({post}) {
    const router = useRouter();

    return ( 
        <Layout>

            <Head>
                <title>Post #{post.id}</title>
            </Head>
            <Title>Post Details</Title>

            <OnlyPost post={post}></OnlyPost>
        </Layout>
     );
}

export async function getServerSideProps(context){
    // context.params.id

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const post = await response.json();

    return {
        props: {
            post: post
        }
    }
}

export default Post;