import "./App.css";
import Counter from "./Counter";

const Message = (props) => {
  return (
    <div className="box">
      <h1 className="text">I am: {props.name}</h1>
      <Counter />
    </div>
  );
};

export default Message;
