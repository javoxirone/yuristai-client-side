// <<<<<<< HEAD
// import { LuBot } from "react-icons/lu";
// import { FaCircleUser } from "react-icons/fa6";

// export default function Message({ user, chatgpt })
// {
//     const iconWrapper = {
//         display: "flex",
//         alignSelf: "flex-start",
//         fontSize: 18
//     }

//     const assistantMsg = {
//         backgroundColor: "#5d51f2",
//         color: "#ffffff",
//         borderRadius: "10px",
//         padding: 15,
//         display: "flex",
//         flexDirection: "column",
//         maxWidth: "80%",
//         rowGap: 10
//     }

//     const userMsg = {
//         backgroundColor: "#1a1a1a",
//         borderRadius: 10,
//         padding: 15,
//         color: "#ffffff",
//         display: "flex",
//         flexDirection: "column",
//         maxWidth: "80%",
//         rowGap: 10
//     }

//     return (
//         <>
//         <div className="d-flex justify-content-end w-100">
//             <div style={userMsg}>
//                 <div style={iconWrapper}>
//                     <FaCircleUser/>
//                 </div>
//                 <p className="mb-0">{ user }</p>
//             </div>
//         </div>

//         <div className="d-flex justify-content-start w-100">
//             <div style={assistantMsg}>
//                 <div style={iconWrapper}>
//                     <LuBot/>
//                 </div>
//                 <p>{ chatgpt }</p>
//             </div>
//         </div>
//         </>
//     )
// =======
import { LuBot } from "react-icons/lu"
import { FaCircleUser } from "react-icons/fa6"

export default function Message({ user, chatgpt }) {
  const iconWrapper = {
    display: "flex",
    alignSelf: "flex-start",
    fontSize: 18,
  }

  const iconWrapperEnd = {
    display: "flex",
    alignSelf: "flex-end",
    fontSize: 18,
  }

  const assistantMsg = {
    backgroundColor: "#0d6efd",
    color: "#ffffff",
    borderRadius: "10px",
    padding: 15,
    display: "flex",
    marginTop: "20px",
    flexDirection: "column",
    maxWidth: "80%",
    rowGap: 10,
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
          <p className="mb-0">{user}</p>
        </div>
      </div>

      <div className="d-flex justify-content-start w-100">
        <div style={assistantMsg}>
          <div style={iconWrapper}>
            <LuBot />
          </div>
          <p>{chatgpt}</p>
        </div>
      </div>
    </>
  )
// >>>>>>> 50a01f3ac1ef451f4ba09edeaf1f335c242ec6ff
}
