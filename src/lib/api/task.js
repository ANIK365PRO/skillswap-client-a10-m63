
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