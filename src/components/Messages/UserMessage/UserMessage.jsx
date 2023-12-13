import { FaCircleUser } from "react-icons/fa6";

export default function UserMessage({ message }) 
{
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
          <div style={iconWrapperEnd}>
            <FaCircleUser />
          </div>
          <p className="mb-0">{message}</p>
        </div>
      </div>
      </>
    )
}
