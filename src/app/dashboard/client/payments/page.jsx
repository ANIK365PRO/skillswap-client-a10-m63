import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getMyPayments } from "@/lib/api/payments";
import PaymentsTable from "./PaymentsTable";

const PaymentsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });



  const payments = await getMyPayments(
    session.user.email
  );

  return (
    <PaymentsTable payments={payments}/> 

  )



};

export default PaymentsPage;