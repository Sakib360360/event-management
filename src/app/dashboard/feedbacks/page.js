"use client";

import SliceText from "@/utils/SliceText";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdBookmarkRemove, MdRateReview } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";

const FeedbackPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const refetch = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("https://server-event-management-iota.vercel.app/feedback")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToTestimonial = (id) => {
    fetch(
      `https://server-event-management-iota.vercel.app/feedback/${id}?status=testimonial`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Testimonial Added",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch("https://server-event-management-iota.vercel.app/feedback");
        }
      })
      .catch((err) => console.log(err));
  };

  const removeFromTestimonial = (id) => {
    fetch(
      `https://server-event-management-iota.vercel.app/feedback/${id}?status=feedback`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Testimonial Removed",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch("https://server-event-management-iota.vercel.app/feedback");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen pt-6 dashboard-bg dashboard-color">
      <div className="overflow-x-auto mx-2 rounded-2xl">
        <table className="table dashboard-tile">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th>Sender</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loading ? (
              <tr>
                <td>
                  <span className="loading loading-infinity loading-lg"></span>
                </td>
              </tr>
            ) : (
              data.map((dt) => (
                <tr key={dt._id}>
                  <td>
                    {dt.userEmail}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {dt.status}
                    </span>
                  </td>
                  <td>{SliceText(dt.feedback, 40)}</td>
                  <th>
                    <button
                      onClick={() => addToTestimonial(dt._id)}
                      className="btn btn-active btn-secondary px-[0.3rem] min-h-[2.2rem] h-0"
                      title="Make Testimonial"
                    >
                      <MdRateReview className="text-2xl"></MdRateReview>
                    </button>

                    <button
                      onClick={() => removeFromTestimonial(dt._id)}
                      className="btn btn-active btn-primary px-[0.3rem] min-h-[2.2rem] h-0 mx-2"
                      title="Remove Testimonial"
                    >
                      <MdBookmarkRemove className="text-2xl"></MdBookmarkRemove>
                    </button>

                    <Link
                      href={`/dashboard/feedbacks/${dt._id}`}
                      className="btn btn-active bg-yellow-300 px-[0.3rem] min-h-[2.2rem] h-0"
                      title="View details"
                    >
                      <TbListDetails className="text-2xl"></TbListDetails>
                    </Link>
                  </th>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackPage;
