import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) 
{
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null);
    const [user, setUser] = useState(() => localStorage.getItem("authTokens") ? jwtDecode(localStorage.getItem("authTokens")) : null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [existingUsername, setExistingUsername] = useState("");
    const [existingPassword, setExistingPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [showFeedback, setShowFeedback] = useState(false);
    const navigate = useNavigate();

    function handleSignIn(e)
    {
        e.preventDefault();

        fetch("https://yuristai.pythonanywhere.com/api/v1/auth/token/", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "username" : existingUsername,
                "password" : existingPassword
            })
        })
        .then((response) => 
        {
            if (!response.ok)
            {
                throw new Error("something went wrong...");
            }
            return response.json();
        })
        .then((data) => {
            setAuthTokens(data); 
            setUser(jwtDecode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            navigate("/", { replace: true });
        })
        .catch((error) => alert(error));
    }

    function handleSignUp(e)
    {
        e.preventDefault();

        fetch("https://yuristai.pythonanywhere.com/api/v1/auth/register/", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "username" : username,
                "email" : email,
                "password" : password
            })
        })
        .then((response) => 
        {
            if (!response.ok)
            {
                throw new Error("something went wrong...");
            }
            navigate("/registration", { replace: true });
        }
        ).catch((error) => 
        {
            navigate("/registration", { replace: true });
            alert(error);
        });
    }

    function handleLogOut()
    {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        navigate("/registration", { replace: true });
    }

    function updateToken() 
    {
        fetch("https://yuristai.pythonanywhere.com/api/v1/auth/token/refresh/", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "refresh" : authTokens.refresh
            })
        })
        .then((response) => {
            if (!response.ok)
            {
                handleLogOut();
            }
            return response.json();
        })
        .then((data) => {
            setAuthTokens(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
        })
    }

    let contextData = {
        user : user,
        username : username,
        setUsername: setUsername,
        email : email,
        setEmail : setEmail,
        password : password,
        setPassword : setPassword,
        existingUsername : existingUsername,
        setExistingUsername : setExistingUsername,
        existingPassword : existingPassword,
        showFeedback : showFeedback,
        setShowFeedback : setShowFeedback,
        setExistingPassword : setExistingPassword,
        handleSignUp : handleSignUp,
        handleSignIn : handleSignIn,
        handleLogOut : handleLogOut,
        authTokens : authTokens
    }

    useEffect(() => {
        let interval = setInterval(() => {
            if (authTokens) 
            {
                updateToken();
            }
        }, 1000 * 240)
        return () => clearInterval(interval);
    }, [authTokens, loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
