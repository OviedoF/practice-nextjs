import styles from './card.module.scss';
import Link from 'next/link'

function PostCard(props) {
    console.log(props)
    return ( 
        <div className={styles.postContainer}>
            {props.posts.map(post => {
                return (
                    <Link href={'posts/[id]'} as={`posts/${post.id}`} key={post.id} >
                        <a className={styles.card}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </a>
                    </Link>
                )
            })}
        </div>
     );
}

export default PostCard;