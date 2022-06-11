function UserCard({user}) {
    return ( 
        <div>
            <h3>{user.name} /// {user.username}</h3>
            <p>{user.email}</p>
        </div>
     );
}

export default UserCard;