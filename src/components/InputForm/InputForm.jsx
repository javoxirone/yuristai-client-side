import {IoSend} from "react-icons/io5";
import "./style.css";

const InputForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        console.log("Submitted");
    };
    return (
        <form className="input-group py-3 position-absolute bottom-0 w-100" onSubmit={handleSubmit}
              style={{ height: "80px" }}>
            <input className="form-control bg-dark text-white" placeholder="Savol bering"
                   style={{ color: "white", border: "1px solid white" }} />
            <button type="submit" className="btn btn-primary">
                <IoSend style={{ color: "white" }} />
            </button>
        </form>



    );
}

export default InputForm