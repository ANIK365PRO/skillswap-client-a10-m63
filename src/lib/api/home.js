import { serverFetch } from "../core/server";

export const getTaskByStatusLimit = async (status, limit) => {
  let url = `/api/tasks?status=${status}`;

  if (limit) {
    url += `&limit=${limit}`;
  }

  console.log("url", url);

  return serverFetch    (url);
};


export const getStatisticsStat = async () => {
  return serverFetch(`/api/home/stats`);
}