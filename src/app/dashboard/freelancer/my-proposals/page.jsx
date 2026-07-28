

const MyProposalsPage = () => {
    return (
        <div>
            <h2>MyProposalsPage</h2>
        </div>
    );
};

export default MyProposalsPage;


// "use client";

// import { useEffect, useState } from "react";
// import { Chip, Table, Spinner } from "@heroui/react";
// import { getMyProposals } from "@/lib/api/task"; // আপনার ফাইলের সঠিক path বসাবেন

// const MyProposalsPage = () => {
//   const [proposals, setProposals] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProposals = async () => {
//       try {
//         const data = await getMyProposals(); // call get user proposal
        
//         if (data?.success) {
//           setProposals(data.data || []);
//         } else if (Array.isArray(data)) {
//           setProposals(data);
//         }
//       } catch (error) {
//         console.error("Error fetching proposals:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProposals();
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status?.toLowerCase()) {
//       case "accepted":
//         return "success";
//       case "rejected":
//         return "danger";
//       default:
//         return "warning";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex h-64 items-center justify-center">
//         <Spinner size="lg" label="Loading proposals..." />
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-7xl mx-auto space-y-6">
//       <div>
//         <h1 className="text-3xl font-bold text-foreground">My Proposals</h1>
//         <p className="mt-1 text-mutedText">
//           Track all the task applications you have submitted to clients.
//         </p>
//       </div>

//       <Table>
//         <Table.ScrollContainer>
//           <Table.Content aria-label="My Proposals Table" className="min-w-[600px]">
//             <Table.Header>
//               <Table.Column id="taskTitle">Task Title</Table.Column>
//               <Table.Column id="budget">Budget Bid</Table.Column>
//               <Table.Column id="dateSent">Date Sent</Table.Column>
//               <Table.Column id="status">Status Text</Table.Column>
//             </Table.Header>

//             <Table.Body>
//               {proposals.length > 0 ? (
//                 proposals.map((item) => (
//                   <Table.Row key={item._id || item.id} id={item._id || item.id}>
//                     {/* Task Title */}
//                     <Table.Cell className="font-semibold text-foreground">
//                       {item.taskTitle || item.taskInfo?.title || `Task ID: ${item.taskId}`}
//                     </Table.Cell>

//                     {/* Budget Bid */}
//                     <Table.Cell className="font-bold text-primary">
//                       ${item.proposedBudget || item.budget} USD
//                     </Table.Cell>

//                     {/* Date Sent */}
//                     <Table.Cell className="text-mutedText">
//                       {new Date(item.submittedAt || item.createdAt || Date.now()).toLocaleDateString("en-US", {
//                         year: "numeric",
//                         month: "short",
//                         day: "numeric",
//                       })}
//                     </Table.Cell>

//                     {/* Status Text */}
//                     <Table.Cell>
//                       <Chip
//                         color={getStatusColor(item.status)}
//                         size="sm"
//                         variant="soft"
//                         className="capitalize"
//                       >
//                         {item.status || "pending"}
//                       </Chip>
//                     </Table.Cell>
//                   </Table.Row>
//                 ))
//               ) : (
//                 <Table.Row id="empty">
//                   <Table.Cell colSpan={4} className="text-center py-8 text-mutedText">
//                     You haven't submitted any proposals yet.
//                   </Table.Cell>
//                 </Table.Row>
//               )}
//             </Table.Body>
//           </Table.Content>
//         </Table.ScrollContainer>
//       </Table>
//     </div>
//   );
// };

// export default MyProposalsPage;