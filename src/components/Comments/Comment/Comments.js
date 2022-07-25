import './comment.css'
const Comments = ({name , email , onClick}) => {
    return ( <div className="commentSection" onClick={onClick}>
        <p>name : {name}</p>
        <p>Email: {email}</p>
    </div> );
}
 
export default Comments;