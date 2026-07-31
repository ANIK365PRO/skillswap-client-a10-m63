
import { getTaskProposals } from "@/lib/api/proposals";
import ManageProposalsClient from "./ManageProposalsClient";

const ManageProposalsPage = async ({ params }) => {
  const { taskId } = await params;
  

  const proposals = await getTaskProposals(taskId);
  console.log('proposals in manage-proposals page-', taskId, proposals)

  return (
    <ManageProposalsClient proposals={proposals} />
  );
};

export default ManageProposalsPage;