import React, { useState } from "react";

interface propTypes {
  left: boolean;
  setLeft: (boolean) => void;
}

const Tabs = ({ ...props }: propTypes) => {
  return (
    <div className="flex gap-2 w-1/3 px-2 py-1 bg-bg-gray rounded-md">
      <button
        className={`font-bold rounded-md w-60 h-12 flex text-center items-center justify-center ${
          props.left ? "text-black bg-white" : "text-gray-on-gray bg-bg-gray"
        }`}
        onClick={() => props.setLeft(true)}
      >
        Sign In
      </button>
      <button
        className={`font-bold rounded-md w-60 h-12 flex text-center items-center justify-center ${
          !props.left ? "text-black bg-white" : "text-gray-on-gray bg-bg-gray"
        }`}
        onClick={() => props.setLeft(false)}
      >
        Sign In
      </button>
    </div>
  );
};

export default Tabs;
