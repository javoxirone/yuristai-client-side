import Message from "../Message/Message.jsx"
import InputForm from "../InputForm/InputForm.jsx"
// import PageTitle from "../PageTitle/PageTitle.jsx"
import styles from "./Main.module.css"
import { useState, useEffect, useRef } from "react"
import Navigation from "../Navigation.jsx"

export default function Main() {
  const [messages, setMessages] = useState([])
  const chatContainerRef = useRef(null)

  useEffect(() => {
    // Scroll the chat container to the bottom when messages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="d-flex flex-column vh-100 p-3">
      <Navigation />
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
      <InputForm messages={messages} setMessages={setMessages} />
    </div>
  )
}
// >>>>>>> 50a01f3ac1ef451f4ba09edeaf1f335c242ec6ff
