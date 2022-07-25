import "./newComment.css";
import { useState } from "react";

const NewComment = ({ onPostHandler , toggle , isShow}) => {
  const [comment, setComment] = useState({ name: "", content: "", email: "" });
  
  

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  

  return (
    <div>
      <h2 onClick={toggle} className="title">
        Add a new comment
      </h2>
      {isShow ? 
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
        onClick={(e) => onPostHandler(e, comment) }
      >
        Add
      </button>
    </form> : null }
      
    </div>
  );
};

export default NewComment;
