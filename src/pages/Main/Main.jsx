import { useState, useEffect, useContext } from "react"
import InputForm from "../../components/InputForm/InputForm.jsx"
import Navigation from "../../components/Navigation/Navigation.jsx"
import Messages from "../../components/Messages/Messages.jsx"
import AuthContext from "../../context/AuthContext.jsx"

export default function Main() 
{
  const { authTokens, handleLogOut } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getMessage()
  {
    fetch("https://yuristai.pythonanywhere.com/api/v1/auth/message/", {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + String(authTokens.access)
      }
    })
    .then((response) => {
      if (!response.ok)
      {
        throw new Error("something went wrong...");
      }
      return response.json()
    })
    .then((data) => console.log(data.message))
    .catch((error) => {
      handleLogOut()
    })
  }

  function getConversationList()
  {
    fetch("https://yuristai.pythonanywhere.com/api/v1/conversation/list/", {
      method: "GET",
      headers: {
        "Authorization" : `Bearer ${authTokens.access}`
      }
    })
    .then((response) => {
      if (!response.ok)
      {
        throw new Error("something went wrong")
      }
      return response.json();
    })
    .then((data) => setMessages(data.reverse()));
  }
  
  useEffect(() => {
    getMessage();
    getConversationList();
  }, [])

  return (
    <div className="d-flex flex-column vh-100 p-4 main-mobile" style={{ backgroundColor: "#0e0e0e"}}>
      <Navigation />
      <Messages messages={messages} isLoading={isLoading} />
      <div style={{ display: "flex", justifyContent: "center"}}>
        <InputForm messages={messages} setMessages={setMessages} setIsLoading={setIsLoading} />
      </div>
    </div>
  )
}
