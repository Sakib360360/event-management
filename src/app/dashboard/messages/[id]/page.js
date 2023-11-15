import formatDate from "@/utils/formatDate";
import getSingleMessage from "@/utils/getSingleMessage";
import markAsSeen from "@/utils/markAsSeen";

const Message = async ({ params }) => {
    const message = await getSingleMessage(params.id);
    const seen = await markAsSeen(params.id);

    return (
        // <div className="min-h-screen">
        //     <div className="p-12">
        //         <p className="">Name: {message.name}</p>
        //         <p className="my-2">Email: {message.email}</p>
        //         <p className="my-8">Date: {formatDate(message.date)}</p>
        //         <p className="my-4">
        //             {message.message}
        //         </p>
        //     </div>
        // </div>

        <div className="min-h-screen flex items-center dashboard-bg">
            <div className="dashboard-tile rounded-xl p-3 w-full m-4 min-h-[35em]">
                <div className="card-body">
                    <div>
                        <div className="mb-7">
                            <h1 className="text-3xl font-semibold">Name: {message.name}</h1>
                        </div>

                        <div className="mb-7">
                            <p>Email: {message.email}</p>
                            <p>Date: {formatDate(message.date)}</p>
                            <p>{message.message}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        {/* <UserButton data={data}></UserButton> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;