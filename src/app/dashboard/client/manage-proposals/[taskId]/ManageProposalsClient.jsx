"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CircleCheck, CircleXmark } from "@gravity-ui/icons";
import {
  BadgeDollarSign,
  Clock3,
  FileText,
  UserRound,
} from "lucide-react";
import { acceptProposal, rejectProposal } from "@/lib/actions/proposals";


// const initialProposals = [
//   {
//     id: 1,
//     freelancerName: "John Doe",
//     freelancerEmail: 'john@doe.com',
//     budget: 120,
//     days: 5,
//     note: "I can complete this project efficiently and deliver high-quality work within the deadline.",
//     status: "pending",
//   },
//   {
//     id: 2,
//     freelancerName: "Sarah Smith",
//     freelancerEmail: 'sarah@smith.com',
//     budget: 100,
//     days: 4,
//     note: "I have 3 years of experience in React and can build modern, responsive applications.",
//     status: "pending",
//   },
// ];




const ManageProposalsClient = ({proposals}) => {
  const router = useRouter();

  const [proposalList, setProposalList] = useState(proposals);


    const handleAccept = async (proposal) => {
        const result = await acceptProposal(proposal._id); //proposals.taskId

        console.log(result); // এটা add করো

        if (result.success) {
            router.push(`/payment/checkout/${proposal.taskId}`)    
            // redirect to 
            // router.refresh();
        }
    };

    const handleReject = async (proposall) => {
  const result = await rejectProposal(proposall._id);

  if (result.success) {
    setProposalList((prev) =>
      prev.map((proposal) =>
        proposal._id === proposall._id
          ? { ...proposal, status: "rejected" }
          : proposal
      )
    );

   router.refresh();
  
  }
};




  const getStatusStyles = (status) => {
    switch (status) {
      case "accepted":
        return "bg-success/10 text-success";

      case "rejected":
        return "bg-danger/10 text-danger";

      default:
        return "bg-warning/10 text-warning";
    }
  };

  return (
    <div className="space-y-8 text-foreground">
      {/* Header */}
      <div>
        
        <h1 className="text-3xl font-bold md:text-4xl text-foreground">
           Manage Proposals
        </h1>

        <p className="mt-3 max-w-2xl text-muted">
          Review all freelancer applications submitted for your tasks. Accept a
          proposal to proceed with payment or reject applications that are not
          the right fit.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-2 md:gap-4 grid-cols-3">
        <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5 shadow-md">
          <p className="text-sm text-muted">Total Proposals</p>

          <h3 className="mt-2 text-3xl font-bold">
            {proposalList.length}
          </h3>
        </div>

        <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5 shadow-md">
          <p className="text-sm text-muted">Pending</p>

          <h3 className="mt-2 text-3xl font-bold text-warning">
            {
              proposalList.filter((item) => item.status === "pending")
                .length
            }
          </h3>
        </div>

        <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5 shadow-md">
          <p className="text-sm text-muted">Accepted</p>

          <h3 className="mt-2 text-3xl font-bold text-success">
            {
              proposalList.filter((item) => item.status === "accepted")
                .length
            }
          </h3>
        </div>
      </div>

      {/* Table for lg device */}
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-md hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-background">
              <tr className="text-left">
                <th className="p-5 font-semibold text-foreground">
                  Freelancer
                </th>

                <th className="p-5 font-semibold text-foreground">
                  Budget
                </th>

                <th className="p-5 font-semibold text-foreground">
                  Timeline
                </th>

                <th className="p-5 font-semibold text-foreground">
                  Cover Note
                </th>

                <th className="p-5 font-semibold text-foreground">
                  Status
                </th>

                <th className="p-5 font-semibold text-foreground">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {proposalList.map((proposal) => (
                <tr
                  key={proposal._id}
                  className="border-t border-border transition hover:bg-background"
                >
                  {/* Freelancer */}
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <UserRound
                          size={18}
                          className="text-primary"
                        />
                      </div>

                      <div>
                        <h4 className="font-semibold text-muted">
                          {proposal.freelancerName}
                        </h4>

                        <p className="text-sm text-muted">
                         {proposal.freelancerEmail}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Budget */}
                  <td className="p-5">
                    <div className="flex items-center gap-2 font-medium">
                      <BadgeDollarSign
                        size={18}
                        className="text-accent"
                      />

                      <span>${proposal.proposedBudget}</span>
                    </div>
                  </td>

                  {/* Days */}
                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <Clock3
                        size={18}
                        className="text-primary"
                      />

                      <span>{proposal.estimatedDays} Days</span>
                    </div>
                  </td>

                  {/* Note */}
                  <td className="max-w-sm p-5">
                    <div className="flex items-start gap-2">
                      <FileText
                        size={18}
                        className="mt-1 shrink-0 text-muted"
                      />

                      <p className="text-sm leading-6 text-muted">
                        {proposal.coverNote}
                      </p>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="p-5">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium capitalize ${getStatusStyles(
                        proposal.status
                      )}`}
                    >
                      {proposal.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-5">
                    <div className="flex flex-wrap gap-2">
                      
                      <button
                        disabled={proposal.status !== "pending"}
                        onClick={() => handleAccept(proposal)}
                        className="
                          flex items-center gap-2
                          rounded-[var(--radius-sm)]
                          bg-success
                          px-4 py-2
                          text-sm font-medium text-white
                          shadow-sm
                          transition-all
                          hover:scale-105
                          disabled:cursor-not-allowed
                          disabled:opacity-50
                        "
                      >
                        <CircleCheck />
                        Accept
                      </button>

                      <button
                        disabled={proposal.status !== "pending"}
                        onClick={() => handleReject(proposal)}
                        className="
                          flex items-center gap-2
                          rounded-[var(--radius-sm)]
                          bg-danger
                          px-4 py-2
                          text-sm font-medium text-white
                          shadow-sm
                          transition-all
                          hover:scale-105
                          disabled:cursor-not-allowed
                          disabled:opacity-50
                        "
                      >
                        <CircleXmark />
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {proposalList.length === 0 && (
            <div className="py-16 text-center">
              <h3 className="text-xl font-semibold">
                No Proposals Found
              </h3>

              <p className="mt-2 text-muted">
                Freelancer proposals will appear here.
              </p>
            </div>
          )}
        </div>
      </div>



      {/* card for sm device  */}
      <div className="space-y-4 md:hidden">
          
          {proposalList.length === 0 && (
            <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5 shadow-md py-16 text-center ">
              <h3 className="text-xl font-semibold">
                No Proposals Found
              </h3>

              <p className="mt-2 text-muted">
                Freelancer proposals will appear here.
              </p>
            </div>
          )}

          {proposalList.map((proposal) => (
            <div
              key={proposal._id}
              className="rounded-[var(--radius-md)] border border-border bg-surface p-5 shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <UserRound size={18} className="text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {proposal.freelancerName}
                  </h3>

                  <p className="text-sm text-muted">
                     {proposal.freelancerEmail}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Budget</span>

                  <span>${proposal.proposedBudget}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted">Timeline</span>

                  <span>{proposal.estimatedDays} Days</span>
                </div>

                <div>
                  <p className="mb-1 text-muted">Cover Note</p>

                  <p className="text-sm">
                    {proposal.coverNote}
                  </p>
                </div>

                <div className="pt-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${getStatusStyles(
                      proposal.status
                    )}`}
                  >
                    {proposal.status}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex gap-2">

                <button
                  disabled={proposal.status !== "pending"}
                  onClick={() => handleAccept(proposal)}
                  className="
                    flex-1 rounded-[var(--radius-sm)]
                    bg-success px-4 py-2
                    text-white disabled:opacity-50
                  "
                >
                  Accept
                </button>

                <button
                  disabled={proposal.status !== "pending"}
                 onClick={() => handleReject(proposal)}
                  className="
                    flex-1 rounded-[var(--radius-sm)]
                    bg-danger px-4 py-2
                    text-white disabled:opacity-50
                  "
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
      </div>

    </div>
  );
};

export default ManageProposalsClient;