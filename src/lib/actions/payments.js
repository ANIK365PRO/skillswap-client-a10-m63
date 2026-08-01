import { serverMutation } from "../core/server";


export const paymentSuccess = async (taskId) => {
  return serverMutation(
    `/api/tasks/${taskId}/payment-success`,
    {},
    "PATCH"
  );
};