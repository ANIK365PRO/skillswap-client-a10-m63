"use client";

import { BadgeCheck, CalendarDays, DollarSign, User } from "lucide-react";

const PaymentsTable = ({ payments }) => {
  if (!payments?.length) {
    return (
      <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-10 text-center shadow-md">
        <h2 className="text-2xl font-bold text-foreground">
          No Payments Found
        </h2>

        <p className="mt-2 text-muted">
          Your completed payments will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-md">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">
          Payment History
        </h1>

        <p className="mt-2 text-muted">
          Total Payments: {payments.length}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-border bg-background">
            <tr>
              <th className="px-4 py-3 text-left">Task</th>
              <th className="px-4 py-3 text-left">Freelancer</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Paid Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment._id}
                className="border-b border-border hover:bg-background transition"
              >
                {/* Task */}
                <td className="px-4 py-4">
                  <p className="font-semibold text-foreground">
                    {payment.taskTitle}
                  </p>
                </td>

                {/* Freelancer */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2 text-muted">
                    <User size={16} />
                    {payment.freelancerEmail}
                  </div>
                </td>

                {/* Amount */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1 font-semibold text-success">
                    <DollarSign size={18} />
                    {payment.amount}
                  </div>
                </td>

                {/* Status */}
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-sm font-medium text-success">
                    <BadgeCheck size={16} />
                    Paid
                  </span>
                </td>

                {/* Date */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2 text-muted">
                    <CalendarDays size={16} />
                    {new Date(payment.paidAt).toLocaleDateString()}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsTable;