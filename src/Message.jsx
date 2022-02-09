import "./Message.css";

const Message = (props) => {
  return (
    <div className="box">
      <h1 className="text">I am: {props.name}</h1>
    </div>
  );
};

export default Message;
