import {useRef, useEffect} from "react"
import UserMessage from "./UserMessage/UserMessage"
import GPTMessage from "./GPTMessage/GPTMessage"
import Loading from "../LoadingAnimation/Loading"
import styles from "./Messages.module.css"
import moment from "moment/moment.js";

export default function Messages({messages, isLoading}) {
    const chatContainerRef = useRef(null)

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [messages])
    const formatDate = (createdAt) => {
        return moment(createdAt).format('MMMM Do YYYY, h:mm');
    };
    return (
        <div className={styles.messageList} ref={chatContainerRef}>
            {messages.map((item) => {
                return (
                    <div key={String(item.id)}>
                        {item.role == "user" ? (
                            <UserMessage message={item.content} createdAt={formatDate(item.created_at)}/>
                        ) : (
                            <GPTMessage message={item.content} createdAt={formatDate(item.created_at)}/>
                        )}
                    </div>
                )
            })}
            {isLoading && <Loading/>}
        </div>
    )
}
