"use client";

import { GetProjectResponse } from "@/_types/taskList";
import { putApi } from "@/_utils/api";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Button from "@/_common/Button";
import Smile from "@/_common/icons/Smile";
import X from "@/_common/icons/X";
import InputField from "@/_common/InputField";
import SelectBox from "@/_common/SelectBox";
import { ThemeContext } from "@/_context/theme";
import { useRouter } from "next/navigation";
import { minuteToHour, formatDate, hourToMinute } from "@/_utils/date";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

interface propTypes {
  title: string;
  className?: string;
  projects: GetProjectResponse[];
  searchParams?: Record<string, string> | null | undefined;
}

const TaskEditModal = ({ ...props }: propTypes) => {
  const router = useRouter();
  const { selectedTask } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: selectedTask.title,
      status: selectedTask.status,
      type: selectedTask.type,
      priority: selectedTask.priority,
      man_hour_min: minuteToHour(selectedTask.man_hour_min),
      from_date: formatDate(selectedTask.from_date),
      to_date: formatDate(selectedTask.to_date),
      project_id: selectedTask.project_id,
    },
  });

  /**
   * Handles the submission of the form.
   *
   * @param {object} event - The event object.
   * @return {void} This function does not return anything.
   */
  async function handleSubmitTask(data) {
    console.log(data);
    const params = {
      ...data,
      man_hour_min:
        data.man_hour_min == "" ? 0 : hourToMinute(data.man_hour_min),
      to_date: new Date(data.to_date),
      from_date: new Date(data.from_date),
    };
    putApi(`tasks/${selectedTask.id}`, params)
      .then((res) => {
        console.log(res);
        router.back();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSubmitTask)}
        className={`bg-white relative px-20 w-[80%] py-5 rounded-lg border-2 border-gray-text flex flex-col items-center gap-10 ${props.className}`}
      >
        {/* open Button */}
        <Link className="absolute top-5 right-5" href={`/tasks/list`}>
          <X color="black" />
        </Link>

        {/* Title */}
        <div className="flex justify-start w-full items-center gap-5">
          <Smile color="black" />
          <h1 className="text-2xl font-bold">{props.title}</h1>
        </div>

        {/* Input fields */}
        <div className="flex flex-wrap w-full gap-5 justify-center">
          <InputField
            title="Title*"
            placeholder="Enter Title"
            type="text"
            className="w-[40%]"
            register={register}
            label="title"
            required
            error={errors["title"]?.message}
          />
          <SelectBox
            title="Status"
            className="w-[40%]"
            label="status"
            options={[
              { value: "Not Started", label: "Not Started" },
              { value: "In Progress", label: "In Progress" },
              { value: "On Hold", label: "On Hold" },
              { value: "Under Review", label: "Under Review" },
              { value: "Completed", label: "Completed" },
            ]}
            register={register}
            required
            error={errors["status"]?.message}
          />
          <InputField
            title="Type*"
            type="text"
            placeholder="Enter Type"
            className="w-[40%]"
            register={register}
            label="type"
            required
            error={errors["type"]?.message}
          />
          <SelectBox
            title="Priority*"
            className="w-[40%]"
            options={[
              { value: "critical", label: "critical" },
              { value: "urgent", label: "urgent" },
              { value: "normal", label: "normal" },
              { value: "optional", label: "optional" },
            ]}
            label="priority"
            required
            register={register}
            error={errors["priority"]?.message}
          />
          <InputField
            title="From Date"
            type="date"
            className="w-[40%]"
            label="from_date"
            register={register}
            error={errors["from_date"]?.message}
          />

          <InputField
            title="To Date"
            type="date"
            className="w-[40%]"
            label="to_date"
            register={register}
            error={errors["to_date"]?.message}
          />

          <InputField
            title="Man Hour"
            type="time"
            className="w-[40%]"
            register={register}
            required
            label="man_hour_min"
            error={errors["man_hour_min"]?.message}
          />
          <SelectBox
            title="Project"
            className="w-[40%]"
            projects={props.projects}
            label="project_id"
            register={register}
            error={errors["projects"]?.message}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          {/* cancel */}
          <Link href={`/tasks/list`}>
            <Button cancel />
          </Link>

          {/* submit */}
          <Button text="Add" modal />
        </div>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default TaskEditModal;
