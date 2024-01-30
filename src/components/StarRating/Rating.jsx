import styles from "./Rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function StarRating({ rating, setRating}) 
{
    const [hover, setHover] = useState(null);

    return (
      <div className={styles.container}>
          {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                  <label>
                      <input 
                      type="radio" 
                      name="rating" 
                      value={ratingValue} 
                      onClick={() => setRating(ratingValue)}
                      />
                      <FontAwesomeIcon 
                      icon={faStar} 
                      className={styles.star}
                      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)} 
                      />
                  </label>
              )
          })}
      </div>
    )
}