import { serverMutation } from "../core/server";
// import { revalidatePath } from "next/cache";



// 'POST' api for proposal
export const createProposal = async (proposalData) => {
  return serverMutation("/api/proposals",proposalData);
};

// for accept button
export const acceptProposal = async (id) => {
  const result = await serverMutation(
    `/api/proposals/${id}/accept`,
    {},
    "PATCH"
  );

//   revalidatePath("/dashboard/client/manage-proposals");

  return result;
};


//for reject button
export const rejectProposal = async (id) => {
  const result = await serverMutation(
    `/api/proposals/${id}/reject`,
    {},
    "PATCH"
  );

//   revalidatePath("/dashboard/client/manage-proposals");

  return result;
};

