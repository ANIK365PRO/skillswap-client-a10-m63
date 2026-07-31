
"use client";

import { useState } from "react";

import {
  TextField,
  Label,
  Input,
  FieldError,
  TextArea,
  Select,
  ListBox,
  Button,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { createTaskPost, updateTaskPost } from "@/lib/actions/task";


const categories = [
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Graphic Design",
  "Content Writing",
  "Digital Marketing",
  "Video Editing",
  "SEO",
  "Data Entry",
  "Other",
];

const experienceLevels = [
  "Beginner",
  "Intermediate",
  "Expert",
];

export default function PostTaskForm({task}) {
  const [loading, setLoading] = useState(false);

  const {data: session } = authClient.useSession();
  const user = session?.user;
  // console.log("User session in PostTaskForm:", user);

  const isEdit = !!task; // for edit mode, check if task prop is provided

  const [form, setForm] = useState({
    title: task?.title || "",
    category: task?.category || "",
    description: task?.description || "",
    skillsRequired: task?.skillsRequired?.join(", ") || "",
    experienceLevel: task?.experienceLevel || "Beginner",
    budget: task?.budget || "",
    deadline: task?.deadline?.split("T")[0] || "",
  });

  const [errors, setErrors] = useState({});


  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.title.trim()) {
      newErrors.title = "Task title is required.";
    }

    if (!form.category) {
      newErrors.category = "Please select a category.";
    }

    if (!form.description.trim()) {
      newErrors.description =
        "Description is required.";
    }else if (
      form.description.length < 20
    ) {
      newErrors.description =
        "Minimum 20 characters required.";
    }

    if (!form.skillsRequired.trim()) {
      newErrors.skillsRequired =
        "Please add required skills.";
    }

    if (!form.budget) {
      newErrors.budget = "Budget is required.";
    }

    if (Number(form.budget) < 10) {
      newErrors.budget =
        "Minimum budget is $10.";
    }

    if (!form.deadline) {
      newErrors.deadline =
        "Please select a deadline.";
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (
      form.deadline &&
      new Date(form.deadline) <= today
    ) {
      newErrors.deadline =
        "Deadline must be in the future.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    const payload = {
      ...form,

      userId: user?.id || null,
      clientName: user?.name || "User",
      email: user?.email || null,
      status: "open",
      hasApprovedProposal: false,
      paymentStatus: "unpaid",


      budget: Number(form.budget),

      skillsRequired: form.skillsRequired
        .split(",")
        .map((skill) => skill.trim()),
    };

    if (isEdit) {
      console.log("UPDATE TASK", payload);

      // PATCH API
      await updateTaskPost(task._id, payload); // PATCH API CALL

      alert("Task updated successfully!");

        setForm({
        title: "",
        category: "",
        description: "",
        skillsRequired: "",
        experienceLevel: "Beginner",
        budget: "",
        deadline: "",
      });
    } else {
      console.log("CREATE TASK", payload);

      await createTaskPost(payload);  // POST API call to create a new task

      alert("Task posted successfully!");

      setForm({
        title: "",
        category: "",
        description: "",
        skillsRequired: "",
        experienceLevel: "Beginner",
        budget: "",
        deadline: "",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="mx-auto max-w-3xl p-6">
      {/* Header */}

        <div className="mb-8">
                {/* <span
                    className="
                        inline-flex items-center
                        rounded-full
                        bg-[var(--primary)]/10
                        px-3 py-1
                        text-xs font-semibold
                        text-[var(--primary)]
                    "
                >
                    Client Dashboard
                </span> */}

                <h1 className="mt-4 text-3xl font-bold">
                    {isEdit ? "Edit Task" : "Post a New Task"}
                </h1>

                <p className="mt-2 text-[var(--muted)]">
                    {isEdit
                      ? "Update your task information."
                      : "Publish your project and receive proposals from talented freelancers."}
                </p>
        </div>
        

      {/* Card */}

      <form
        onSubmit={handleSubmit}
        className="
          rounded-3xl
          border border-[var(--border)]
          bg-[var(--surface)]
          p-8
          shadow-md
          transition-all
          hover:shadow-xl
        "
      >
        <div className="space-y-6">
          {/* Title */}

          <TextField
            isInvalid={!!errors.title}
            className="flex flex-col gap-1"
          >
            <Label>Task Title</Label>

            <Input
                className="border border-[var(--border)] focus-within:border-[var(--primary)] focus-within:ring-2 focus-within:ring-[var(--primary)]/20"
      
              placeholder="Build a modern landing page"
              value={form.title}
              onChange={(e) =>
                handleChange(
                  "title",
                  e.target.value
                )
              }
            />

            <FieldError>
              {errors.title}
            </FieldError>
          </TextField>

          {/* Category */}

          <div>

            <Select
              className="mt-2"
              value={form.category}
              onChange={(value) =>
                handleChange(
                    "category",
                    value
                )
            }
            >
              
              <Label>Category</Label>

              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  {categories.map(
                    (item) => (
                      <ListBox.Item
                        key={item}
                        id={item}
                        textValue={item} 
                      >
                        {item}
                      </ListBox.Item>
                    )
                  )}
                </ListBox>
              </Select.Popover>
            </Select>

            <p className="mt-1 text-xs text-red-500">
              {errors.category}
            </p>
          </div>

          {/* Description */}

          <TextField
            isInvalid={
              !!errors.description
            }
            className="flex flex-col gap-1"
          >
            <div className="flex items-center justify-between">
              <Label>
                Description
              </Label>

              <span className="text-xs text-[var(--muted)]">
                {
                  form.description
                    .length
                }
                /500
              </span>
            </div>

            <TextArea
              placeholder="Describe your project..."
              value={
                form.description
              }
              onChange={(e) =>
                handleChange(
                  "description",
                  e.target.value
                )
              }
              className="h-32"
            />

            <FieldError>
              {
                errors.description
              }
            </FieldError>
          </TextField>

          {/* Skills */}

          <TextField
            isInvalid={
              !!errors.skillsRequired
            }
            className="flex flex-col gap-1"
          >
            <Label>
              Required Skills
            </Label>

            <Input
                className="border border-[var(--border)] focus-within:border-[var(--primary)] focus-within:ring-2 focus-within:ring-[var(--primary)]/20"
              placeholder="React, Next.js, Tailwind"
              value={
                form.skillsRequired
              }
              onChange={(e) =>
                handleChange(
                  "skillsRequired",
                  e.target.value
                )
              }
            />

            <p className="text-xs text-[var(--muted)]">
              Separate skills using
              commas.
            </p>

            <FieldError>
              {
                errors.skillsRequired
              }
            </FieldError>
          </TextField>

          {/* Experience */}

          <div>
            

            <Select
              className="mt-2"
              value={
                form.experienceLevel
              }
              onChange={(value) =>
                handleChange(
                  "experienceLevel",
                  value
                )
              }
            >

            <Label>
              Experience Level
            </Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  {experienceLevels.map(
                    (item) => (
                      <ListBox.Item
                        key={item}
                        id={item}
                        textValue={item} 
                      >
                        {item}
                      </ListBox.Item>
                    )
                  )}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Budget + Deadline */}

          <div className="grid gap-6 md:grid-cols-2">
            <TextField
              isInvalid={
                !!errors.budget
              }
            >
              <Label>
                Budget (USD)
              </Label>

              <Input
                className="border border-[var(--border)] focus-within:border-[var(--primary)] focus-within:ring-2 focus-within:ring-[var(--primary)]/20"
                type="number"
                min={10}
                placeholder="500"
                value={form.budget}
                onChange={(e) =>
                  handleChange(
                    "budget",
                    e.target.value
                  )
                }
              />

              <FieldError>
                {errors.budget}
              </FieldError>
            </TextField>

            <TextField
              isInvalid={
                !!errors.deadline
              }
            >
              <Label>
                Deadline
              </Label>

              <Input
                className="border border-[var(--border)] focus-within:border-[var(--primary)] focus-within:ring-2 focus-within:ring-[var(--primary)]/20"
                type="date"
                value={form.deadline}
                onChange={(e) =>
                  handleChange(
                    "deadline",
                    e.target.value
                  )
                }
              />

              <FieldError>
                {errors.deadline}
              </FieldError>
            </TextField>
          </div>

          {/* Button */}

          <Button
            type="submit"
            isLoading={loading}
            className="
                h-12
                w-full
                rounded-2xl
                bg-[var(--accent)]
                font-semibold
                text-black
                transition-all
                hover:scale-[1.01]
                hover:shadow-lg
                active:scale-95
            "
          >
          {isEdit ? "Update Task" : "Post Task"}
          </Button>
        </div>
      </form>
    </div>
  );
}