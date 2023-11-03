"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const page = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <div className="container mx-auto p-4">
             <h1 className="text-2xl font-bold mb-4 text-center">Your feedback is valuable to us<br></br>Please let us know how we can improve</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2">
          Feedback:
        </label>
        <textarea
          className="form-textarea w-full px-3 py-2 text-black border rounded-lg focus:outline-none"
          rows="4"
          {...register('feedback', { required: true })}
        />
      </div>

      <div className="mb-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit Feedback
        </button>
      </div>
    </form>
        </div>
    );
};

export default page;