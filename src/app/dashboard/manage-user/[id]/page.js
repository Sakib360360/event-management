import UserButton from "@/Components/UserButton/UserButton";
import getSingleUser from "@/utils/getSingleUser";

const SingleUser = async ({ params }) => {
    const data = await getSingleUser(params.id)

    return (
        // <div className="flex flex-col items-center lg:flex-row py-12 px-12 min-h-screen event-container">
        //     <div className="w-full lg:w-[30em] mb-5 lg:mr-12">
        //         <img className="w-full" src={data?.photoUrl} alt={data.name} />
        //     </div>

        //     <div>
        //         <div className="mb-7">
        //             <h1 className="text-3xl font-semibold">{data.name}</h1>
        //             <p className="text-xl mt-1">{data.email}</p>
        //         </div>

        //         <div>
        //             <p>Role: {data.role}</p>
        //         </div>

        //         <UserButton data={data}></UserButton>
        //     </div>
        // </div>

        <div className="min-h-screen grid place-content-center">
            <div className="flex flex-col items-center lg:flex-row bg-[#1D232A] rounded-xl p-3">

                <div className="w-full lg:w-[30em] mb-5 lg:mr-12">
                    <img className="w-full" src={data.photoUrl} alt={data.name} />
                </div>

                <div className="card-body">
                    <div>
                        <div className="mb-7">
                            <h1 className="text-3xl font-semibold">{data.name}</h1>
                        </div>

                        <div className="mb-7">
                            <p className="underline font-semibold accent-color">Details</p>
                            <p>Id: {data._id}</p>
                            <p>email: {data.email}</p>
                            <div>Role: {data.role === "admin"
                                ? <div className="badge badge-accent">{data.role}</div>
                                : data.role === "organizer"
                                    ? <div className="badge badge-primary">{data.role}</div>
                                    : <div className="badge badge-secondary">{data.role}</div>}</div>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <UserButton data={data}></UserButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;