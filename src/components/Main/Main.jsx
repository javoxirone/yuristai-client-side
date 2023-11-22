import React from "react";
import { IoSend } from "react-icons/io5";
import Message from "../Message/Message.jsx";

const Main = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log("Submitted");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 w-100">
      <h1 className="">Yurist AI - beta</h1>
      <form className="input-group w-50" onSubmit={handleSubmit}>
        <input className="form-control" placeholder="Your question" />
        <button type="submit" className="btn btn-primary">
          <IoSend />
        </button>
      </form>
      <Message />
    </div>
  );
};

export default Main;
