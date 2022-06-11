import styles from './onlyPost.module.scss';

function OnlyPost({post}) {
    return ( 
        <div className={styles.card}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
     );
}

export default OnlyPost;