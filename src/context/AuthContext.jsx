import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) 
{
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null);
    const [user, setUser] = useState(() => localStorage.getItem("authTokens") ? jwtDecode(localStorage.getItem("authTokens")) : null);
    const [loading, setLoading] = useState(true)
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
                "username" : e.target.existingUsername.value,
                "password" : e.target.existingPassword.value
            })
        })
        .then((response) => {
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
            navigate("/", {replace: true});
        })
        .catch((error) => alert(error));
    }

    function handleSignUp(e)
    {
        e.preventDefault();

        let username = e.target.username.value;
        let email = e.target.email.value;
        let password = e.target.password.value;

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
        .then((response) => {
            if (!response.ok)
            {
                throw new Error("something went wrong...");
            } else 
            {
                fetch("https://yuristai.pythonanywhere.com/api/v1/auth/token/", {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        "username" : username,
                        "password" : password
                    })
                })
                .then((response) => {
                    if (!response.ok)
                    {
                        throw new Error("something went wrong...")
                    }
                    return response.json()
                })
                .then((data) => {
                    setAuthTokens(data);
                    setUser(jwtDecode(data.access));
                    localStorage.setItem("authTokens", JSON.stringify(data));
                    navigate("/", { replace: true });
                })
                .catch((error) => alert(error))
            }
        })
        .catch((error) => alert(error));
    }

    function handleLogOut()
    {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        navigate("/registration");
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
