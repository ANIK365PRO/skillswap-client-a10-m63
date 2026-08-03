import { serverFetch } from "../core/server";

export const getClientStats = (email) => serverFetch(`/api/dashboard/client-stats?email=${email}`);

export const getFreelancerStats = (email) => serverFetch(`/api/dashboard/freelancer-stats?email=${email}`);

export const getAdminStats = () => serverFetch("/api/dashboard/admin-stats");