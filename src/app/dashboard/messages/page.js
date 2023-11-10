import Message from "@/Components/Message/Message";
import getMessages from "@/utils/getMessages";

const MessagesPage = async () => {
    let messages = await getMessages();

    return (
        <div className="py-1 min-h-screen message-wrapper">
            {
                messages.map((msg) => <Message key={msg._id} message={msg}></Message>)
            }
        </div>
    );
};

export default MessagesPage;