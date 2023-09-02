import React from "react";

const TaskTableHeader = () => {
  return (
    <div className="flex px-2 py-1">
      <span className="w-[20%] text-xl font-bold">Task</span>
      <span className="w-[10%] text-xl">Type</span>
      <span className="w-[20%] text-xl">Date</span>
      <span className="w-[10%] text-xl">Status</span>
      <span className="w-[10%] text-xl">Priority</span>
      <span className="w-[20%] text-xl">ManHour</span>
      <span className="w-[10%] text-xl"></span>
    </div>
  );
};

export default TaskTableHeader;
