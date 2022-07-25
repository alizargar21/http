
import FullComment from "./FullComments";
import NewComment from "./NewCommentes";
import {getAllComments , postOneComment , setIsShow} from '../services/servicesFunctions.js';
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Comments from "./Comments/Comment/Comments";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);
  const [isShow , setIsShow] = useState(false)
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
  const getIdHandler = (id) => {
    setSelectedId(id);
  };
  

  const submitHandler = async (e, comment) => {
    e.preventDefault();

    try {
      await postOneComment(comment)
        .then((res) => getAllComments())
        .then((res) => setComments(res.data))
        toast.success('Post Success ')
    } catch (error) {
      toast.error("error post Handler");
    }
    toggle()
  };
  const toggle = () => isShow ? setIsShow(false) : setIsShow(true)
  const renderComments = () => {
    let renderValue = <p>Loading .....</p>;
    if (error) {
      renderValue = <p> fetching data failed !!!</p>;
    }
    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Comments
          key={c.id}
          name={c.name}
          email={c.email}
          onClick={() => getIdHandler(c.id)}
        />
      ));
    }
    return renderValue;
  };

  return (
    <main>
      <section>{renderComments()}</section>
      <section>
        <FullComment
          commentId={selectedId}
          url={'/comments'}
          setComments={setComments}
          setSelectedId={setSelectedId}
          getComments={getComments}
          
        />
      </section>
      <section>
        <NewComment  onPostHandler={submitHandler} toggle={toggle} isShow={isShow} />
      </section>
    </main>
  );
};

export default Discussion;
