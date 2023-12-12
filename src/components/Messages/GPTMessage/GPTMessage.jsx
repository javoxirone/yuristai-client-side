import { LuBot } from "react-icons/lu";

export default function GPTMessage({ message }) 
{
    const iconWrapper = {
        display: "flex",
        alignSelf: "flex-start",
        fontSize: 18,
    }

    const assistantMsg = {
        backgroundColor: "#5d51f2",
        color: "#ffffff",
        borderRadius: "10px",
        padding: 15,
        display: "flex",
        marginTop: "20px",
        flexDirection: "column",
        maxWidth: "80%",
        rowGap: 10,
    }

    return (
        <>
        <div className="d-flex justify-content-start w-100">
            <div style={assistantMsg}>
            <div style={iconWrapper}>
                <LuBot />
            </div>
            <p>{message}</p>
            </div>
        </div>
        </>
    )
}
