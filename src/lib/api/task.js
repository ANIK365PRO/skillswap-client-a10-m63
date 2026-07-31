
import { serverFetch } from "../core/server";


// সার্ভার সাইডে ডেটা ফেচ করার জন্য একটি হেল্পার ফাংশন
// for GET by userId and status

export const getMyTasks = async ({userId, status='open'}) => {
    return serverFetch(`/api/tasks?userId=${userId}&status=${status}`);
}

// for GET by taskId
export const getMyTaskById = async (taskId) => {
    return serverFetch(`/api/tasks/${taskId}`);
}


// for GET by task status for freelancer/browse-task page
export const getTaskByStatus = async (status) => {
    return serverFetch(`/api/tasks?status=${status}`);
}

// // 'GET' proposals for logged-in freelancer
// export const getMyProposals = async (email) => {
//   return serverFetch(`/api/proposals?freelancerEmail=${email}`);
// };




