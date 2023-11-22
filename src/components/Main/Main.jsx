import Message from "../Message/Message.jsx";
import InputForm from "../InputForm/InputForm.jsx";
import PageTitle from "../PageTitle/PageTitle.jsx";

const Main = () => {


    return (
            <div
                className="d-flex flex-column align-items-center justify-content-center vh-100 w-100">
                <PageTitle title="Xabarlar"/>
                <Message/>
                <InputForm/>
            </div>
    );
};

export default Main;
