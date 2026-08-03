import { getProposalById } from "@/lib/api/proposals";
import PaymentCheckoutClient from "./PaymentCheckoutClient";
import { getTaskById } from "@/lib/api/task";



const PaymentCheckoutPage = async ({ params }) => {
  const { taskId } = await params;

  const task = await getTaskById(taskId);
  // console.log("task from PaymentCheckoutPage:", task);

   const proposal = await getProposalById(task.acceptedProposalId);
  //  console.log("proposal from PaymentCheckoutPage:", proposal);

  return <PaymentCheckoutClient task={task} proposal={proposal}/>;
};

export default PaymentCheckoutPage;