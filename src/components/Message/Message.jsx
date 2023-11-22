import React from "react";
import { LuBot } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";

const Message = () => {
  const iconWrapper = {
    marginRight: "5px",
  };

  const assistantMsg = {
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    padding: "10px",
    width: "70%",
    marginTop: "20px",
    display: "flex",
  };

  const userMsg = {
    backgroundColor: "#3498db",
    borderRadius: "10px",
    padding: "10px",
    width: "70%",
    marginTop: "20px",
    color: "#ffffff",
    display: "flex",
  };

  return (
    <>
      <div style={userMsg}>
        <div style={iconWrapper}>
          <FaCircleUser />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </p>
      </div>
      <div style={assistantMsg}>
        <div style={iconWrapper}>
          <LuBot />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt placerat ornare. Maecenas ut quam sodales sapien elementum
          ultricies ut vitae nisi. Sed bibendum nunc et urna elementum
          elementum. Etiam nisi augue, tincidunt et mauris interdum, iaculis
          feugiat massa. Nulla pellentesque sapien ligula, nec dignissim nisl
          vehicula nec. Sed aliquet sagittis est nec condimentum. Donec
          vestibulum ipsum id erat viverra, eu cursus nunc auctor.
        </p>
      </div>
    </>
  );
};

export default Message;
