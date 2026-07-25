"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Form,
  Fieldset,
  FieldGroup,
  TextField,
  Input,
  Label,
  FieldError,
  Button,
} from "@heroui/react";

import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // ==========================================
  // Email Login
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    setError("");

    try {
      const formData = new FormData(e.currentTarget);

      const email = formData.get("email");

      const password = formData.get("password");

      const result = await authClient.signIn.email({
        email,
        password,
      });

      if (result?.error) {
        setError(result.error.message || "Login failed.");
        return;
      }

      // Get Session
      const session = await authClient.getSession();

      const role = session?.data?.user?.role;

      console.log("ROLE:", role);

      // Redirect by Role
      if (role === "client") {
        router.push("/");
      } else if (role === "freelancer") {
        router.push("/dashboard/freelancer");
      } else if (role === "admin") {
        router.push("/dashboard/admin");
      } else {
        router.push("/");
      }
    } catch (err) {
      console.log(err);

      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // Google Login
  // ==========================================
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.log(error);

      setError("Google Sign In failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4 py-10">
      <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-xl">
        {/* Header */}
        <div className="bg-[var(--primary)] px-8 py-10 text-center">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-white/80">
            Login to your SkillSwap account.
          </p>
        </div>

        <Form onSubmit={handleSubmit}>
          <Fieldset className="p-6 md:p-8">
            <FieldGroup className="space-y-6">
              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
                  {error}
                </div>
              )}

              {/* Google Login */}
              <Button
                type="button"
                variant="outline"
                onPress={handleGoogleLogin}
                className="h-12 w-full border-[var(--border)]"
              >
                <FcGoogle className="text-xl" />
                Continue with Google
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-[var(--border)]" />

                <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
                  Email Login
                </span>

                <div className="h-px flex-1 bg-[var(--border)]" />
              </div>

              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  const emailRegex =
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

                  if (!emailRegex.test(value)) {
                    return "Enter a valid email.";
                  }

                  return null;
                }}
              >
                <Label>Email Address</Label>

                <Input
                  placeholder="john@example.com"
                  className="h-12"
                />

                <FieldError />
              </TextField>

              {/* Password */}
              <TextField
                isRequired
                name="password"
                type={showPassword ? "text" : "password"}
              >
                <Label>Password</Label>

                <div className="relative">
                  <Input
                    placeholder="Enter your password"
                    className="h-12 w-full pr-12"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                <FieldError />
              </TextField>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-[var(--primary)] hover:text-[var(--secondary)]"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                isLoading={loading}
                isDisabled={loading}
                className="h-12 w-full bg-[var(--primary)] text-white hover:bg-[var(--secondary)]"
              >
                {loading ? (
                  "Logging in..."
                ) : (
                  <>
                    Login
                    <ArrowRight
                      size={18}
                      className="ml-2 text-[var(--accent)]"
                    />
                  </>
                )}
              </Button>

              {/* Register */}
              <div className="text-center">
                <p className="text-sm text-[var(--muted)]">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() =>
                      router.push("/auth/register")
                    }
                    className="font-semibold text-[var(--primary)] hover:text-[var(--secondary)]"
                  >
                    Register
                  </button>
                </p>
              </div>
            </FieldGroup>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;