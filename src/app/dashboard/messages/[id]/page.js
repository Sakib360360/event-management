import formatDate from "@/utils/formatDate";
import getSingleMessage from "@/utils/getSingleMessage";
import markAsSeen from "@/utils/markAsSeen";

const Message = async ({ params }) => {
    const message = await getSingleMessage(params.id);
    const seen = await markAsSeen(params.id);

    return (
        <div className="min-h-screen">
            <div className="p-12">
                <p className="">Name: {message.name}</p>
                <p className="my-2">Email: {message.email}</p>
                <p className="my-8">Date: {formatDate(message.date)}</p>
                <p className="my-4">
                    {message.message}
                </p>
            </div>
        </div>
    );
};

export default Message;