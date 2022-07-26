import FullComment from "../FullComments";
import NewComment from "../NewComments";
import {
  getAllComments,
  postOneComment,
} from "../../services/servicesFunctions.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import { Link } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState(null);
 
  const [error, setError] = useState(false);
  const [isShow, setIsShow] = useState(false);
  
  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const { data } = await getAllComments();
      setComments(data);
    } catch (err) {
      toast.error("error fetching Handler");
      setError(true);
    }
  };


 
  
  const renderComments = () => {
    let renderValue = <p>Loading .....</p>;
    if (error) {
      renderValue = <p> fetching data failed !!!</p>;
    }
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Link to={`/commentsDetails/${c.id}`} key={c.id}>
          <Comment
           
            name={c.name}
            email={c.email}
            
          />
        </Link>
      ));
    }
    return renderValue;
  };

  return (
    
      <section>{renderComments()}</section>

  );
};

export default Comments;
