import { useState } from "react"

import InputForm from "../../components/InputForm/InputForm.jsx"
import Navigation from "../../components/Navigation/Navigation.jsx"
import Messages from "../../components/Messages/Messages.jsx"

export default function Main() {
  const [messages, setMessages] = useState([])

  return (
    <div className="d-flex flex-column vh-100 p-4">
      <Navigation />
      <Messages messages={messages} />
      <InputForm messages={messages} setMessages={setMessages} />
    </div>
  )
}
