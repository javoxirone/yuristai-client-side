import {IoSend} from "react-icons/io5"
import "../../index.css"
import {useContext, useState, useEffect} from "react"
import styles from "./InputForm.module.css"
import AuthContext from "../../context/AuthContext"

const API_KEY = "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"

export default function InputForm({messages, setMessages, setIsLoading}) 
{
    const [count, setCount] = useState(0);
    const {authTokens, user, setShowFeedback} = useContext(AuthContext);

    async function handleSubmit(event)
     {
        event.preventDefault();

        setCount(count + 1);

        let user_question = event.target.prompt.value;
        event.target.prompt.value = "";


        await fetch("https://yuristai.pythonanywhere.com/api/v1/conversation/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + String(authTokens.access),
            },
            body: JSON.stringify({
                "user": user.user_id,
                "role": "user",
                "content": user_question
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("something went wrong!")
                }
                return response.json();
            })
            .then((data) => setMessages([...messages, data]))
            .catch((error) => alert(error));

        const prompt = {role: "user", content: user_question}
        await gptRequest(prompt);
    }

    async function gptRequest(prompt) {
        setIsLoading(true);

        const systemMessage = {
            role: "system",
            content: `YuristAI - bu O'zbekiston advokatlik kasbi bilan ` +
                `bog'liq jiddiylik va ishonchlilikni aks ettiruvchi ` +
                `professional, rasmiy va obro'li chatbot.`
        }

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [systemMessage, prompt]
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("something went wrong");
                }
                return response.json();
            })
            .then((data) => {
                fetch("https://yuristai.pythonanywhere.com/api/v1/conversation/create/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + String(authTokens.access),
                    },
                    body: JSON.stringify({
                        "user": user.user_id,
                        "role": "assistant",
                        "content": data.choices[0].message.content
                    })
                })
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("something went wrong!")
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setIsLoading(false)
                        setMessages((prevState) => [...prevState, data]);
                    })
                    .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        if (count > 0 && count % 3 == 0)
        {
            setShowFeedback(true);
        }
    }, [count]);

    return (
            <form className={styles.inputGroup} onSubmit={handleSubmit}>
                <input
                    className="form-control bg-dark text-white shadow-none"
                    placeholder="Savol bering"
                    style={{
                        color: "white",
                        border: "1px solid white",
                        fontSize: 18
                    }}
                    name="prompt"
                />
                <button type="submit" className="btn btn-primary">
                    <IoSend style={{color: "white"}}/>
                </button>
            </form>
    )
}
