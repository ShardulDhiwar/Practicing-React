import React from "react";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Perform any submission logic here (e.g., form validation, API calls, etc.)
    navigate("/");
  };
  return (
    <div>
      Submit
      <button className='px-5 py-2 mx-5 bg-green-300 rounded-full cursor-pointer' onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Submit;
