"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
  Chip,
} from "@heroui/react";
import { createProposal } from "@/lib/actions/proposals";

// import { createProposal } from "@/lib/actions/task";


const ProposalForm = ({ taskId, freelancer }) => {

  console.log('freelancer in ProposalForm ' , freelancer)
  
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    proposedBudget: "",
    estimatedDays: "",
    coverNote: "",
    form: "",
  });


  const validateProposal = (proposal) => {
    const newErrors = {
      proposedBudget: "",
      estimatedDays: "",
      coverNote: "",
      form: "",
    };


    if (!proposal.proposedBudget || proposal.proposedBudget <= 0) {
      newErrors.proposedBudget = "Enter a valid budget amount";
    }


    if (!proposal.estimatedDays || proposal.estimatedDays <= 0) {
      newErrors.estimatedDays = "Enter a valid completion time";
    }


    if (!proposal.coverNote || proposal.coverNote.trim().length < 20) {
      newErrors.coverNote =
        "Cover note should be at least 20 characters";
    }


    setErrors(newErrors);


    return !Object.values(newErrors).some(
      (error) => error !== ""
    );
  };


  const handleSubmit = async (event) => {
    event.preventDefault();


    const formData = new FormData(event.currentTarget);


    const proposal = {
      taskId,
      freelancerEmail: freelancer?.email,
      freelancerName: freelancer?.name,
      freelancerImage: freelancer?.image,

      proposedBudget: Number(
        formData.get("proposedBudget")
      ),

      estimatedDays: Number(
        formData.get("estimatedDays")
      ),

      coverNote: formData.get("coverNote"),

      status: "pending",
    };


    console.log(
      "proposal before send:",
      proposal
    );


    if (!validateProposal(proposal)) return;


    setLoading(true);

    try {
        const response = await createProposal(proposal);  // call post porposal api

        // যদি Success / InsertedId পাওয়া যায়
        if (response?.insertedId || response?.success) {
          alert("Proposal submitted successfully!");
          router.push("/dashboard/freelancer/my-proposals");
        } else {
          // Backend থেকে আসা নির্দিষ্ট ভুল (e.g. Already applied)
          setErrors((prev) => ({
            ...prev,
            form: response?.message || "You have already applied for this task.",
          }));
          // router.push("/dashboard/freelancer/browse-tasks");
        }
      } catch (error) {
        console.log("Proposal submit error:", error);
        setErrors((prev) => ({
          ...prev,
          form: error?.message || "Something went wrong. Please try again.",
        }));
      } finally {
        setLoading(false);
    }


    // try {
    //   const data = await createProposal(proposal);


    //   if (data?.insertedId) {
    //     alert("Proposal submitted successfully");

    //     router.push(
    //       "/dashboard/freelancer/my-proposals"
    //     );
    //   }

    // } catch (error) {

    //   console.log(error);

    //   setErrors((prev) => ({
    //     ...prev,
    //     form:
    //       "Something went wrong. Please try again.",
    //   }));

    // } finally {

    //   setLoading(false);

    // }
  };
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-0">

      {/* Task Info */}
      <div className="mb-6 rounded-2xl border border-default-200 bg-content1 p-4 sm:p-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          <div>
            <p className="text-xs uppercase tracking-wide text-default-500 font-medium">
              Task ID
            </p>

            <p className="text-sm font-mono text-default-700 truncate max-w-[220px] sm:max-w-none">
              {taskId}
            </p>
          </div>


          <Chip
            variant="flat"
            color="primary"
            size="sm"
          >
            {/* email */}

            { freelancer?.email }
          </Chip>

        </div>

      </div>



      <Form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-default-200 bg-content1 p-6 sm:p-8 shadow-md flex flex-col gap-6"
      >


        <div>
          <h2 className="text-2xl font-semibold text-foreground">
            Submit a Proposal
          </h2>

          <p className="mt-1 text-sm text-default-500">
            Share your expertise, timeline, and pricing to convince the client.
          </p>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">


          {/* Budget */}
          <TextField
            name="proposedBudget"
            isRequired
            isInvalid={!!errors.proposedBudget}
          >

            <Label>
              Proposed Budget (USD)
            </Label>


            <Input
              type="number"
              placeholder="Enter your bid amount (e.g. 50)"
              min="1"
            />


            <Description>
              Specify the amount you want to charge for completing this task.
            </Description>


            {errors.proposedBudget && (
              <FieldError>
                {errors.proposedBudget}
              </FieldError>
            )}

          </TextField>




          {/* Days */}
          <TextField
            name="estimatedDays"
            isRequired
            isInvalid={!!errors.estimatedDays}
          >

            <Label>
              Estimated Completion Time
            </Label>


            <Input
              type="number"
              placeholder="Enter delivery time (e.g. 3)"
              min="1"
            />


            <Description>
              Tell the client how many days you need.
            </Description>


            {errors.estimatedDays && (
              <FieldError>
                {errors.estimatedDays}
              </FieldError>
            )}

          </TextField>


        </div>




        {/* Cover Note */}

        <TextField
          name="coverNote"
          isRequired
          isInvalid={!!errors.coverNote}
        >

          <Label>
            Cover Note
          </Label>


          <TextArea
            placeholder="Hi! I have experience in this field..."
            className="min-h-36"
          />


          <Description>
            Introduce yourself, mention experience, and explain why you are a good fit.
          </Description>


          {errors.coverNote && (
            <FieldError>
              {errors.coverNote}
            </FieldError>
          )}

        </TextField>




        {/* Form Error */}

        {errors.form && (
          <div className="rounded-lg border border-danger-200 bg-danger-50 px-4 py-3 text-sm text-danger">
            {errors.form}
          </div>
        )}






        {/* Buttons */}

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">


          <Button
            type="button"
            variant="secondary"
            onPress={() => router.back()}
            isDisabled={loading}
          >
            Back
          </Button>



          <Button
            type="submit"
            color="primary"
            isLoading={loading}
            className="font-semibold"
          >
            {loading
              ? "Submitting..."
              : "Submit Proposal"
            }
          </Button>


        </div>


      </Form>


    </div>
  );
};


export default ProposalForm;
