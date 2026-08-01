import { serverFetch } from "../core/server";


export const getMyPayments = async (clientEmail) => {
  return serverFetch(
    `/api/payments?clientEmail=${clientEmail}`
  );
};