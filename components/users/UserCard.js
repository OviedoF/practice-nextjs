import Image from "next/image";

function UserCard({user}) {
    return ( 
        <div>
            <h3>{user.name} /// {user.username}</h3>
            <p>{user.email}</p>

            <Image src={`/images/${user.id}.jpg`} width={400} height={500} alt={`${user.id} image`} />
        </div>
     );
}

export default UserCard;