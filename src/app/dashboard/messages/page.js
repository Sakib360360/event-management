import Message from "@/Components/Message/Message";
import getMessages from "@/utils/getMessages";

const MessagesPage = async () => {
    // get all message from database
    let messages = await getMessages();

    return (
        <div className="py-1 min-h-screen">
            {
                messages.map((msg) => <Message key={msg._id} message={msg}></Message>)
            }
        </div>
    );
};

export default MessagesPage;