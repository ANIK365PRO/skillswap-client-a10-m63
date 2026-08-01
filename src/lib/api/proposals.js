import { serverFetch } from "../core/server";



// 'GET' proposals for logged-in freelancer
export const getMyProposals = async (email) => {
  return serverFetch(`/api/proposals?freelancerEmail=${email}`);
};


// get for client task proposals
export const getTaskProposals = async (taskId) => {
  return serverFetch(`/api/proposals?taskId=${taskId}`);
};


// get for client payment view
export const getProposalById = async (id) => {
  return serverFetch(`/api/proposals/${id}`);
};