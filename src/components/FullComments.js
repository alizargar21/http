import "./fullComment.css";
import {
  getAllComments,
  getOneComment,
  deleteOneComment,
  editOneComment,
} from "../services/servicesFunctions";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const FullComment = ({
  match,
history
  
}) => {
  console.log(history)
  const commentId = match.params.id
  const [comment, setComment] = useState(null);
  const [editComment, setEditComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((res) => setComment(res.data))
        .catch((err) => console.log(err));
    }
  }, [commentId]);
  const goToEditHandler = async () => {
    // const {data} = await editOneComment(commentId , )
    if (commentId) {
      let editData = await getOneComment(commentId);
      setEditComment(editData.data);
      setComment(null);
      console.log(editData.data);
    }
  };
  const editHandler = async (e) => {
    setEditComment({ ...editComment, [e.target.name]: e.target.value });
  };
  const editSubmit = async () => {
    await editOneComment(editComment.id, editComment);
    setComment(editComment);
    
    setEditComment(null);
    toast.success("Edit Comment Success");
    console.log(editComment);
  };
  const deleteHandler = async () => {
    try {
      await deleteOneComment(commentId);
      history.push('/')
      setComment(null);
      toast.success("Delete Complete ");
    } catch (error) {
      toast.error("error delete Handler");
    }
  };

  let commentDetails = <p>Loading</p>;
  if (!commentId) commentDetails = <p className="p">please select a comment</p>;
  if (editComment)
    commentDetails = (
      <div className="containerEdit">
        <div className="headerEdit"></div>
        <div className="editComment">
          <div className="marginTop">
            <h4>Edit comment</h4>
            <label htmlFor="name">name </label>
            <input
              className="input"
              value={editComment.name}
              name="name"
              onChange={editHandler}
            />
          </div>

          <div className="margin">
            <label htmlFor="email">email </label>

            <input
              className="input"
              value={editComment.email}
              name="email"
              onChange={editHandler}
            />
          </div>
          <div className="margin">
            <label htmlFor="content">body </label>
            <textarea
              className="input"
              value={editComment.content}
              name="content"
              onChange={editHandler}
            />
          </div>

          <div className="flex">
            <button className="btn" onClick={deleteHandler}>
              Delete
            </button>
            <button className="btn" onClick={editSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  if (comment)
    commentDetails = (
      <div className="fullComment">
        <p>name : {comment.name}</p>
        <p>email : {comment.email}</p>
        <p>Body : {comment.content}</p>
        <div className="flex">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
          <button className="btn" onClick={() => goToEditHandler(editComment)}>
            Edit
          </button>
        </div>
      </div>
    );
  return commentDetails;
};

export default FullComment;
