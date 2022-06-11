import {useRouter} from 'next/router';
import Layout from '../../components/layout';

import Title from '../../components/title';
import UserCard from '../../components/users/UserCard';

function User({user}) {
    const router = useRouter();

    if (router.isFallback){
        return <div>NO SE ENCONTRÓ LA PÁGINA UNU</div>
    }

    return ( 
        <Layout>
            <Title>User Details</Title>

            <UserCard user={user} />
        </Layout>
     );
}

export async function getStaticPaths(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();


    const paths = users.map(user => {
        return {
            params: {id: `${user.id}`}
        }
    });

    return {
        paths: paths,
        fallback: false 
        // Si es true, le decimos que primero renderice las paths, y si intentan acceder a una página que no declaramos
        // con getStaticPaths, nextJS muestra una versión fallback en la primera solicitud
        // mientras genera la información, y el fallback va a cambiar por la pàgina con props vacías la cual se guarda en "caché".
    }
}

export async function getStaticProps(context){
    const userId = context.params.id;

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();

    return {
        props: {
            user
        }
    }
}

export default User;