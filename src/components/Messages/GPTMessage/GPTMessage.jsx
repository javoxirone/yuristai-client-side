import {LuBot} from "react-icons/lu";
import ReactMarkdown from 'react-markdown';
import './style.css'

export default function GPTMessage({message, createdAt}) {
    const iconWrapper = {
        display: "flex",
        alignSelf: "flex-start",
        fontSize: 18,
    };

    const assistantMsg = {
        backgroundColor: "#0d6efd",
        color: "#ffffff",
        borderRadius: "10px",
        padding: 15,
        display: "flex",
        marginTop: "20px",
        flexDirection: "column",
        rowGap: 10,
    };


    return (
        <div style={assistantMsg} className="assistant-message">
            <div className="d-flex gap-3 align-items-center">
                <div style={iconWrapper}>
                    <LuBot/>
                </div>
                <div className="opacity-75">
                    <small>{createdAt}</small>
                </div>
            </div>
            <ReactMarkdown children={message}/>
        </div>
    );
}
