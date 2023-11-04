"use client";
import AuthContext from "@/context/AuthContext";
import saveFavorite from "@/utils/saveFavorite";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FaHeart, FaShare } from "react-icons/fa";
import "./HeartIcon.css";
import "./event.module.css";

const Search = ({ events }) => {
    const [search, setSearch] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");
    const [selectedEventId, setSelectedEventId] = useState(null);
    const [likedEvents, setLikedEvents] = useState([]);
    const { user } = useContext(AuthContext);
    const router = useRouter();
    const handleIconClick = (eventId) => {
        const isEventLiked = likedEvents.includes(eventId);

        if (isEventLiked) {
            // Remove event ID from liked events
            setLikedEvents((prevLikedEvents) =>
                prevLikedEvents.filter((id) => id !== eventId)
            );
        } else {
            // Add event ID to liked events
            setLikedEvents((prevLikedEvents) => [...prevLikedEvents, eventId]);
        }

        addBackend();


    };
    // make object for backend
    const addBackend = async () => {
        const userLikedEvents = {
            "email": user?.email,
            likedEvents
        }
        console.log(userLikedEvents)
        const saveFavoriteEvents = await saveFavorite(userLikedEvents)
    }



    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedFilter(selectedValue);
    };
    console.log(selectedFilter);

    const handleSearchChange = (e) => {
        const searchText = e.target.value;
        setSearch(searchText);
        console.log(searchText);
    };

    const handleShareClick = (eventId) => {
        setSelectedEventId(eventId === selectedEventId ? null : eventId);
    };



    // Filter events based on search and selected filter
    const filteredEvents = events.filter((event) => {
        const eventNameMatch = event.eventName
            .toLowerCase()
            .includes(search.toLowerCase());
        return eventNameMatch;
    });

    // Apply additional filters based on selected filter
    if (selectedFilter === "latest") {
        filteredEvents.sort(
            (a, b) => new Date(b.eventDate) - new Date(a.eventDate)
        );
    }

    return (
        <div>
            <div className="flex justify-center gap-4 md:gap-40">
                <div className="relative flex items-center">
                    <div className="relative text-white">
                        <input
                            type="text"
                            placeholder="Search event..."
                            value={search}
                            onChange={handleSearchChange}
                            className="bg-transparent border-2 border-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-blue-500 transition-all duration-300"
                        />

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4a8 8 0 100 16 8 8 0 000-16z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4-4"
                            />
                        </svg>
                    </div>
                </div>
                {/* filter */}
                <select
                    className="select bg-transparent border-2 border-white rounded-3xl w-full max-w-xs"
                    onChange={handleSelectChange}
                    value={selectedFilter}
                >
                    <option disabled value="">
                        Filter by...
                    </option>
                    <option className="text-black" value="latest">
                        Latest
                    </option>
                    <option className="text-black" value="topRated">
                        Top rated
                    </option>
                    <option className="text-black" value="mostSold">
                        Most sold
                    </option>
                </select>
            </div>

            {/* show events */}
            <div className="max-w-3xl mx-auto mt-8 p-8 bg-transparent rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-4"></h2>

                {/* List of Events */}
                {filteredEvents.map((event) => (
                    <div
                        key={event._id}
                        className="mb-8 p-4 bg-transparent border border-white rounded-md"
                    >
                      <img
              src={event.imageUrl}
              alt={event.eventName}
              className="mb-4 w-full h-48 object-cover rounded-md"
            />
                        <h3 className="text-xl font-semibold mb-2">{event.eventName}</h3>
                        <p className="text-gray-600 mb-2">{event.eventDate}</p>
                        <p className="text-gray-600 mb-2">{event.eventLocation}</p>
                        <p className="text-gray-600 mb-4">{event.eventDescription}</p>
                        <div className="flex justify-between items-center">
                            <button className="bg-transparent border border-white text-white p-2 rounded-md hover:bg-white hover:text-black transition duration-500">
                                Details
                            </button>
                            <div className="flex">
                                <button onClick={() => router.push('/dashboard/payments')} className="bg-transparent border-white border text-white p-2 mr-4 rounded-md hover:bg-white hover:text-black transition duration-500">
                                    Buy
                                </button>
                                <div className="">
                                    <button
                                        className="bg-transparent border-white border flex gap-1 justify-between items-center mr-4 text-white p-2 rounded-md hover:bg-white hover:text-black transition duration-500"
                                        onClick={() => handleShareClick(event._id)}
                                    >
                                        Share <span><FaShare /></span>
                                    </button>
                                </div>

                                {selectedEventId === event._id && (
                                    <div className="flex gap-2 justify-between items-center">
                                        <a
                                            className="bg-transparent text-white  p-2 rounded-full"
                                            href={`https://www.facebook.com/sharer/sharer.php?u=`}
                                        >
                                            Facebook
                                        </a>
                                        <a
                                            className="bg-transparent text-white  p-2 rounded-full"
                                            href={`https://twitter.com/intent/tweet?url=`}
                                        >
                                            Twitter
                                        </a>
                                        <a
                                            className="bg-transparent text-white  p-2 rounded-full"
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=`}
                                        >
                                            LinkedIn
                                        </a>
                                    </div>
                                )}

                                {/* favoutite */}
                                <div
                                    className={`heart-icon-container text-3xl mt-2 ${likedEvents.includes(event._id) ? 'liked' : ''
                                        }`}
                                    onClick={() => handleIconClick(event._id)}
                                >
                                    <FaHeart />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
