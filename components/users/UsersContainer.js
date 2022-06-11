import Link from 'next/link';

function UsersContainer({user}) {
    return ( 
        <Link href={'/users/[id]'} as={`/users/${user.id}`}>
            <div className="card">
                <h3>{user.name} /// <a>{user.username}</a></h3>
                <p>{user.email}</p>
            </div>
        </Link>
     );
}

export default UsersContainer;