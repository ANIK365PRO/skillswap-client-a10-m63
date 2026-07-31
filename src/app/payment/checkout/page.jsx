

// const PaymentsPage = () => {
//     return (
//         <div>
//             <h2>PaymentsPage</h2>
//         </div>
//     );
// };

// export default PaymentsPage;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar,
  CircleCheckBig,
  CreditCard,
  ShieldCheck,
  User,
} from "lucide-react";

const PaymentCheckoutPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // TODO:
    // PATCH /api/tasks/:id/payment-success
    // Update task status => "in-progress"
    // paymentStatus => "paid"

    setTimeout(() => {
      console.log("Payment Successful!");

      router.push("/dashboard/client");
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 text-foreground">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Side */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              Complete Payment
            </h1>

            <p className="mt-3 text-muted">
              Securely complete your payment to begin collaborating with your
              selected freelancer.
            </p>
          </div>

          {/* Payment Summary */}
          <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 shadow-md">
            <h3 className="mb-5 text-xl font-semibold text-foreground">
              Payment Summary
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted">Task</span>

                <span className="font-medium text-foreground">
                  Portfolio Website Design
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted">Freelancer</span>

                <span className="font-medium text-foreground">
                  freelancer@5.com
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted">Estimated Days</span>

                <span className="font-medium text-foreground">
                  5 Days
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4 text-lg font-bold">
                <span>Total</span>

                <span className="text-accent">$250</span>
              </div>
            </div>
          </div>

          {/* Secure Payment Info */}
          <div className="rounded-[var(--radius-md)] border border-border bg-success/10 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 text-success" size={22} />

              <div>
                <h4 className="font-semibold text-foreground">
                  100% Secure Payment
                </h4>

                <p className="mt-1 text-sm text-muted">
                  This is a dummy payment page created for assignment purposes.
                  No real card information is stored or processed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-primary">
            Card Information
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Card Holder */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Card Holder Name
              </label>

              <div
                className="
                  flex items-center gap-3
                  rounded-[var(--radius-sm)]
                  border border-border
                  bg-background
                  px-4 py-3
                  focus-within:border-primary
                  focus-within:ring-4
                  focus-within:ring-[var(--focus-ring)]
                "
              >
                <User size={18} className="text-muted" />

                <input
                  required
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="
                    w-full
                    bg-transparent
                    text-foreground
                    placeholder:text-mutedText
                    outline-none
                  "
                />
              </div>
            </div>

            {/* Card Number */}
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground">
                Card Number
              </label>

              <div
                className="
                  flex items-center gap-3
                  rounded-[var(--radius-sm)]
                  border border-border
                  bg-background
                  px-4 py-3
                  focus-within:border-primary
                  focus-within:ring-4
                  focus-within:ring-[var(--focus-ring)]
                "
              >
                <CreditCard size={18} className="text-muted" />

                <input
                  required
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="4242 4242 4242 4242"
                  className="
                    w-full
                    bg-transparent
                    text-foreground
                    placeholder:text-mutedText
                    outline-none
                  "
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Expiry */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Expiry Date
                </label>

                <div
                  className="
                    flex items-center gap-3
                    rounded-[var(--radius-sm)]
                    border border-border
                    bg-background
                    px-4 py-3
                    focus-within:border-primary
                    focus-within:ring-4
                    focus-within:ring-[var(--focus-ring)]
                  "
                >
                  <Calendar size={18} className="text-muted" />

                  <input
                    required
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="
                      w-full
                      bg-transparent
                      text-foreground
                      placeholder:text-mutedText
                      outline-none
                    "
                  />
                </div>
              </div>

              {/* CVV */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  CVV
                </label>

                <div
                  className="
                    flex items-center gap-3
                    rounded-[var(--radius-sm)]
                    border border-border
                    bg-background
                    px-4 py-3
                    focus-within:border-primary
                    focus-within:ring-4
                    focus-within:ring-[var(--focus-ring)]
                  "
                >
                  <ShieldCheck size={18} className="text-muted" />

                  <input
                    required
                    type="password"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    className="
                      w-full
                      bg-transparent
                      text-foreground
                      placeholder:text-mutedText
                      outline-none
                    "
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                mt-4 flex w-full items-center justify-center gap-2
                rounded-[var(--radius-md)]
                bg-primary
                px-5 py-4
                font-semibold
                text-white
                shadow-md
                transition-all
                hover:scale-[1.02]
                hover:bg-secondary
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? (
                "Processing..."
              ) : (
                <>
                  <CircleCheckBig size={20} />
                  Pay $250
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentCheckoutPage;