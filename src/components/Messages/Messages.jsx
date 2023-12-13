import { useRef, useEffect } from "react"
import UserMessage from "./UserMessage/UserMessage"
import GPTMessage from "./GPTMessage/GPTMessage"
import Loading from "../LoadingAnimation/Loading"
import styles from "./Messages.module.css"

export default function Messages({ messages, isLoading }) 
{
    const chatContainerRef = useRef(null)

    useEffect(() => {
      if (chatContainerRef.current) 
      {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
      }
    }, [messages])
  
    return (
      <div className={styles.messageList} ref={chatContainerRef}>
        {messages.map((item) => {
          return (
            <div key={String(item.id)}>
            {item.role == "user" ? (
              <UserMessage message={item.content} />
            ) : (
            <GPTMessage message={item.content} />
            )}
            </div>
          )
        })}
        {isLoading && <Loading />}
      </div>
    )
}
