import { useRef, useEffect } from "react"
import Message from "./Message/Message"
import styles from "./Messages.module.css"

function Messages({ messages }) {
  const chatContainerRef = useRef(null)

  useEffect(() => {
    // Scroll the chat container to the bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])
  return (
    <div className={styles.messageList} ref={chatContainerRef}>
      {messages.map((item) => {
        return (
          <Message
            user={item.user.question}
            chatgpt={item.chatgpt.answer}
            key={item.user.id}
          />
        )
      })}
    </div>
  )
}

export default Messages
