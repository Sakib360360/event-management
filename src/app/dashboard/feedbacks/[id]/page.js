"use client";

import { useEffect, useState } from "react";
import { MdBookmarkRemove, MdRateReview } from "react-icons/md";
import Swal from "sweetalert2";

const FeedbackDetails = ({ params }) => {
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/feedback/${params.id}`)
      .then((res) => res.json())
      .then((data) => setFeedback(data))
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
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="bg-[#1D232A] rounded-xl p-3 w-full m-4 min-h-[35em]">
        <div className="card-body">
          <div>
            <div className="mb-7">
              <h1 className="text-3xl font-semibold">
                Name: {feedback.userName}
              </h1>
            </div>

            <div className="mb-7">
              <p>Email: {feedback.userEmail}</p>
              <div>Status: {feedback.status === "feedback" ? <div className="badge badge-primary">{feedback.status}</div> : <div className="badge badge-secondary">{feedback.status}</div>}</div>
              <p>Feedback: {feedback.feedback}</p>
            </div>

            <button
              onClick={() => addToTestimonial(feedback._id)}
              className="btn btn-active btn-secondary px-[0.3rem] min-h-[2.2rem] h-0 text-[12px]"
              title="Make Testimonial"
            >
              <MdRateReview className="text-2xl"></MdRateReview>Make Testimonial
            </button>

            <button
              onClick={() => removeFromTestimonial(params.id)}
              className="btn btn-active btn-primary px-[0.3rem] min-h-[2.2rem] h-0 mx-2 text-[12px]"
              title="Remove Testimonial"
            >
              <MdBookmarkRemove className="text-2xl"></MdBookmarkRemove>Remove
              Testimonial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetails;
