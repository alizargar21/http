import FullComment from "../components/FullComments";

const CommentDetails = ({ match, history }) => {
  return (
    <>
      <h2 style={{ color: "#ccc" }}>CommentDetails</h2>
      <FullComment match={match} history={history} />
    </>
  );
};

export default CommentDetails;
