import Message from "../Messages/Message/Message.jsx";
import InputForm from "../InputForm/InputForm.jsx"
import styles from '../../main.module.css'
import {useState, useEffect, useRef} from "react"
import Navigation from "../Navigation/Navigation.jsx";

export default function Main() {
    console.log("hello")
    const [messages, setMessages] = useState([]);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="d-flex flex-column vh-100 p-3">
            <Navigation/>
            <div className={styles.messageList} ref={chatContainerRef}>
                {messages.map((item) => {
                    return (
                        <Message
                            user={item.user.question}
                            chatgpt={item.chatgpt.answer}
                            key={item.id}
                        />
                    )
                })}
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <InputForm messages={messages} setMessages={setMessages}/>
            </div>
        </div>
    )
}
