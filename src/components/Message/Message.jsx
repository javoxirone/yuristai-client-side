import React from "react";
import {LuBot} from "react-icons/lu";
import {FaCircleUser} from "react-icons/fa6";

const Message = () => {
    const iconWrapper = {
        marginRight: "5px",
    };

    const assistantMsg = {
        backgroundColor: "#5d51f2",
        color: "#ffffff",
        borderRadius: "10px",
        padding: "12px 24px",
        marginTop: "20px",
        display: "flex",
        maxWidth: "80%",
    };

    const userMsg = {
        backgroundColor: "#1a1a1a",
        borderRadius: "10px",
        padding: "12px 24px",
        marginTop: "20px",
        color: "#ffffff",
        display: "flex",
        maxWidth: "80%",
    };

    return (
        <>
            <div className="d-flex justify-content-end w-100">
                <div style={userMsg}>
                    <div style={iconWrapper}>
                        <FaCircleUser/>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </p>
                </div>
            </div>
            <div className="d-flex justify-content-start w-100">
                <div style={assistantMsg}>
                    <div style={iconWrapper}>
                        <LuBot/>
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
            </div>
        </>
    );
};

export default Message;
