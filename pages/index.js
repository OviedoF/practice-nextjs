import Title from "../components/title";
import Layout from '../components/layout';
import Head from "next/head";

function Home() {
    return ( <>
        <Layout>
            <Head>
                <title>Aprendiendo NextJS :D</title>
                <meta name="description" content="En este fantástico curso aprendemos NextJS"/>
            </Head>

            <Title>Home Page</Title>
            
            <p>Aprendamos NextJS :D</p>
        </Layout>
    </> );
}

export default Home;