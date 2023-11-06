import Message from "@/Components/Message/Message";
import Link from "next/link";

const MessagesPage = () => {
    const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis labore qui quos. Quis necessitatibus natus iste nisi cum eius aliquam sit itaque blanditiis architecto provident, eveniet libero dolor dicta vitae.";

    return (
        <div className="py-1 min-h-screen">
            <Link href={"/dashboard/messages/1"}><Message user={"user Name"} message={message}></Message></Link>
            <Link href={"/dashboard/messages/2"}><Message user={"user Name"} message={message}></Message></Link>
            <Link href={"/dashboard/messages/3"}><Message user={"user Name"} message={message}></Message></Link>
        </div>
    );
};

export default MessagesPage;