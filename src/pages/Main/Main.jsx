import { useState, useEffect, useContext } from "react"
import InputForm from "../../components/InputForm/InputForm.jsx"
import Navigation from "../../components/Navigation/Navigation.jsx"
import Messages from "../../components/Messages/Messages.jsx"
import AuthContext from "../../context/AuthContext.jsx"

export default function Main() 
{
  const { authTokens, handleLogOut } = useContext(AuthContext)
  const [messages, setMessages] = useState([]);


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
    .then((data) => alert(data.message))
    .catch((error) => {
      console.log(error)
      handleLogOut()
    })
  }
  
  useEffect(() => {
    getMessage();
  }, [])

  return (
    <div className="d-flex flex-column vh-100 p-4" style={{ backgroundColor: "#23262d"}}>
      <Navigation />
      <Messages messages={messages} />
      <div style={{ display: "flex", justifyContent: "center"}}>
        <InputForm messages={messages} setMessages={setMessages} />
      </div>
    </div>
  )
}
