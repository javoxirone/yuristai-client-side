import styles from "./Feedback.module.css";
import StarRating from "../StarRating/Rating";
import { useContext, useRef, useState } from "react";
import AuthContext from "../../context/AuthContext";

export default function Feedback() 
{
    const { user, authTokens, setShowFeedback } = useContext(AuthContext);
    const [feedback, setFeeback] = useState("");
    const [rating, setRating] = useState(null);

    const textAreaRef = useRef();

    const handleTextarea = (e) => {
      setFeeback(e.target.value);
    }
  
    function handleSubmit(e)
    {
        e.preventDefault();

        setShowFeedback(false);

        fetch("https://yuristai.pythonanywhere.com/api/v1/feedback/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authTokens.access}`
            },
            body: JSON.stringify({
                "user": user.user_id,
                "content": e.target.feedback.value,
                "stars": rating
            })
        })
        .catch((error) => alert(error))
    }

    return (
        <>
        <div className={styles.container}>
            <h1 className={styles.heading}>
            Xizmatimizdan foydalanishni davom ettirish uchun, 
            iltimos fikr-mulohazalaringizni qoldiring.
            </h1>
            <hr />
            <div className={styles.starWidget}>
                <StarRating 
                rating={rating} 
                setRating={setRating} 
                />
            </div>
            <form 
            className={styles.form} 
            onSubmit={handleSubmit}
            >
                <textarea 
                name="feedback" 
                cols="30" rows="10" 
                placeholder="Bu yerga yozing..."
                onChange={handleTextarea}
                />
                <button 
                disabled=
                {
                  rating !== null && feedback.length > 0 ? false 
                  : 
                  true
                }>
                Yuborish
                </button>
            </form>
        </div>
        </>
    )
}