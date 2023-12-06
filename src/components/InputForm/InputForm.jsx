import { IoSend } from "react-icons/io5"
import "./style.css"
import { useState } from "react"
import styles from "./InputForm.module.css"

const API_KEY = "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"

export default function InputForm({ messages, setMessages }) 
{
  const [inputValue, setInputValue] = useState("")

  function handleInput(e) {
    setInputValue(e.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const prompt = { role: "user", content: inputValue }

    setInputValue("")

    await apiRequest(prompt)
  }

  async function apiRequest(prompt) 
  {
    const systemMessage = {
      role: "system",
      content: "YuristAI - bu O'zbekiston advokatlik kasbi bilan bog'liq jiddiylik va ishonchlilikni aks ettiruvchi professional, rasmiy va obro'li chatbot.",
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [systemMessage, prompt],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages([
          ...messages,
          {
            user: {
              question: prompt.content,
            },
            chatgpt: {
              answer: data.choices[0].message.content,
            },
            id: crypto.randomUUID()
          },
        ])
      })
  }

  return (
    <form className={styles.inputGroup} onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={handleInput}
        className="form-control bg-dark text-white"
        placeholder="Savol bering"
        style={{
          color: "white",
          border: "1px solid white",
          marginRight: "-9px",
        }}
      />
      <button type="submit" className="btn btn-primary">
        <IoSend style={{ color: "white" }} />
      </button>
    </form>
  )
}
