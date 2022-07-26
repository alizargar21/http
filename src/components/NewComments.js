import "./newComment.css";
import { useState } from "react";
import { getAllComments, postOneComment } from "../services/servicesFunctions";
import { toast } from "react-toastify";
const NewComment = ({ history }) => {
  const [comment, setComment] = useState({ name: "", content: "", email: "" });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e, comment) => {
    e.preventDefault();

    try {
      await postOneComment(comment);
      history.push("/");
      toast.success("Post Success ");
    } catch (error) {
      toast.error("error post Handler");
    }
  };
  return (
    <div>
      <h2 className="title">Add a new comment</h2>

      <form className="newComments">
        <div className="center">
          <label htmlFor="name">name </label>
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            onChange={changeHandler}
          />
        </div>
        <div className="center">
          <label htmlFor="email">email </label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            onChange={changeHandler}
          />
        </div>
        <div className="center">
          <label htmlFor="content">body </label>
          <textarea className="input" name="content" onChange={changeHandler} />
        </div>
        <button
          className="btn"
          type="submit"
          onClick={(e) => submitHandler(e, comment)}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default NewComment;
