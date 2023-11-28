import Message from "../Message/Message.jsx";
import InputForm from "../InputForm/InputForm.jsx";
import PageTitle from "../PageTitle/PageTitle.jsx";
import styles from "./styles.module.css"
import { useState } from "react";

export default function Main() 
{
    const [messages, setMessages] = useState([]);

    return (
        <div className="d-flex flex-column align-items-center justify-content-start vh-100 w-100">
            <div className={styles.messageList}>
                {messages.map((item) => {
                    return (
                        <Message user={item.user.question} chatgpt={item.chatgpt.answer} />
                    )
                })}
            </div>
            <div className={styles.inputForm}>
                <InputForm messages={messages} setMessages={setMessages} />
            </div>
        </div>
    )
}

