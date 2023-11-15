"use client";

import "./Modal.css";

const Modal = ({ handleSubmit }) => {
  return (
    <dialog id="my_modal_2" className="modal glassmorphism">
      <div className="modal-box bg-black">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            autoComplete="off"
            className="input input-bordered input-primary w-full my-3 input-filed"
          />
          <input
            type="text"
            placeholder="Your email"
            name="email"
            autoComplete="off"
            className="input input-bordered input-primary w-full my-3 input-filed"
          />

          <textarea
            placeholder="Your Feedback"
            name="feedback"
            className="input input-bordered bg-transparent input-primary w-full my-3 input-filed"
            cols={20}
            rows={40}
          ></textarea>
          <button className="btn w-full">Submit</button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
