import {FaCircleUser} from "react-icons/fa6";

export default function UserMessage({message, createdAt}) {
    const iconWrapperEnd = {
        display: "flex",
        alignSelf: "flex-end",
        fontSize: 18,
    }

    const userMsg = {
        backgroundColor: "#1a1a1a",
        borderRadius: 10,
        padding: 15,
        color: "#ffffff",
        display: "flex",
        marginTop: "20px",
        flexDirection: "column",
        maxWidth: "80%",
        rowGap: 10,
    }

    return (
        <>
            <div className="d-flex justify-content-end w-100">
                <div style={userMsg}>
                    <div className="d-flex gap-3 align-items-center">
                        <div style={iconWrapperEnd}>
                            <FaCircleUser/>
                        </div>
                        <div className="opacity-75">
                            <small>{createdAt}</small>
                        </div>
                    </div>
                    <p className="mb-0">{message}</p>
                </div>
            </div>
        </>
    )
}
