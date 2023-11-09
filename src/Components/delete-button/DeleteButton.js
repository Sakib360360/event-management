"use client"
import deleteEvent from '@/utils/deleteEvent';
import React from 'react';
import Swal from 'sweetalert2';

const DeleteButton = (id) => {
    const handleDelete = async (id) => {
        const dlEv = await deleteEvent(id.id)
        if (dlEv.deletedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Deleted successfully",
              showConfirmButton: false,
              timer: 1500
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Couldn't delete",
              text: "Something went wrong!",
              footer: ''
            });
          }
    }

    return (
        <button
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600" onClick={()=>handleDelete(id)}
        >
            Delete Event
        </button>
    );
};

export default DeleteButton;