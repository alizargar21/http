import NewComment from "../components/NewComments";

const CreateComment = ({ setComments, history }) => {
  return (
    <>
      <h2 style={{ color: "#ccc" }}>Create A New Comment</h2>
      <NewComment history={history} setComments={setComments} />
    </>
  );
};

export default CreateComment;
