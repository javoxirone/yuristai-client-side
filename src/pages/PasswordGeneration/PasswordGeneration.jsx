import styles from "./PasswordGeneration.module.css";
import Password from "../../components/Password/Password";
import PasswordConfirmation from "../../components/PasswordConfirmation/PasswordConfirmation";
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

function PasswordCreationPage() 
{
    const { handleSignUp } = useContext(AuthContext);
    const [isPasswordValid, setIsPasswordValid] = useState(null);
    const [isMatching, setIsMatching] = useState(null);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.passwordCreation}>
                    <h1 className={styles.heading}>
                        Akkauntingiz uchun parol yarating
                    </h1>
                    <form onSubmit={handleSignUp}>
                        <Password 
                        isPasswordValid={isPasswordValid}
                        setIsPasswordValid={setIsPasswordValid}
                        />
                        <PasswordConfirmation 
                        isMatching={isMatching}
                        setIsMatching={setIsMatching}
                        />
                        <button 
                        className={styles.submitButton}
                        disabled={
                            isPasswordValid == true 
                            && 
                            isMatching == true ? false : true 
                        }
                        >
                            Account Yaratish
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PasswordCreationPage;