import Layout from "../../components/layout";
import Title from '../../components/title';
import UsersContainer from "../../components/users/UsersContainer";
import Link from 'next/link';

function Users({users}) {
    console.log(users)
    return ( 
        <Layout>
            <Title>User Page</Title>

            <div className="users-container">
                
                {users.map(el => {
                    return(
                        <UsersContainer user={el} key={el.id}></UsersContainer>
                    )
                })}

            </div>
        </Layout>
     );
}

export async function getStaticProps(context){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return {
        props: {
            users
        }
    }
}

export default Users;