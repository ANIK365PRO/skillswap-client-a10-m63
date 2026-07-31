
'use server';
import { revalidatePath } from "next/cache";
import { serverDeleteMutation, serverMutation } from "../core/server";


// 'POST' api 
export const createTaskPost = async (newTaskPostData) => {
    return serverMutation('/api/tasks', newTaskPostData);
}


//  'PATCH' api by id
export const updateTaskPost = async (id, data) => {
    const result = serverMutation(`/api/tasks/${id}`, data, 'PATCH')
    revalidatePath('/dashboard/client/my-tasks')
    return result;
}

// 'DELETE' api by id
export const deleteTaskPost = async (id) => {
    return serverDeleteMutation(`/api/tasks/${id}`)
}


// // 'POST' api for proposal
// export const createProposal = async (proposalData) => {
//   return serverMutation("/api/proposals",proposalData);
// };