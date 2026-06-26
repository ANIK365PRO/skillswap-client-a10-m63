"use client";

import React from "react";
import {
  Form,
  Fieldset,
  FieldGroup,
  TextField,
  Input,
  Label,
  FieldError,
  Description,
  Button,
  RadioGroup,
  Radio,
} from "@heroui/react";

import { ArrowRight } from "@gravity-ui/icons"
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());

    console.log(data);

    // Better Auth Register Logic Here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-lg">
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <Fieldset.Legend className="text-2xl font-bold text-[var(--foreground)]">
              Create Account
            </Fieldset.Legend>

            <Description className="mb-4 text-[var(--muted)]">
              Join SkillSwap and start hiring or freelancing.
            </Description>

            <FieldGroup>

              {/* Name */}
              <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.trim().length < 3) {
                    return "Name must be at least 3 characters";
                  }

                  return null;
                }}
              >
                <Label>Full Name</Label>
                <Input placeholder="John Doe" />
                <FieldError />
              </TextField>

              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  const emailRegex =
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

                  if (!emailRegex.test(value)) {
                    return "Enter a valid email";
                  }

                  return null;
                }}
              >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>

              {/* Image URL */}
              <TextField
                isRequired
                name="image"
                type="url"
                validate={(value) => {
                  try {
                    new URL(value);
                    return null;
                  } catch {
                    return "Enter a valid image URL";
                  }
                }}
              >
                <Label>Image URL</Label>
                <Input placeholder="https://example.com/profile.jpg" />
                <FieldError />
              </TextField>

              {/* Password */}
              <TextField
                isRequired
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 6) {
                    return "Password must be at least 6 characters";
                  }

                  if (!/[A-Z]/.test(value)) {
                    return "Must contain one uppercase letter";
                  }

                  if (!/[a-z]/.test(value)) {
                    return "Must contain one lowercase letter";
                  }

                  return null;
                }}
              >
                <Label>Password</Label>

                <Input placeholder="********" />

                <Description>
                  Minimum 6 characters, 1 uppercase & 1 lowercase letter.
                </Description>

                <FieldError />
              </TextField>

              {/* Role Selection */}
              <RadioGroup
                defaultValue="client"
                name="role"
                variant="secondary"
              >
                <Label>Account Type</Label>

                <div className="grid gap-4 md:grid-cols-2">
                  <Radio value="client">
                    <Radio.Content className="rounded-xl border border-[var(--border)] p-4 data-[selected=true]:border-[var(--accent)]">
                      <h4 className="font-semibold">Client</h4>
                      <p className="text-sm text-[var(--muted)]">
                        Hire freelancers for projects.
                      </p>
                    </Radio.Content>
                  </Radio>

                  <Radio value="freelancer">
                    <Radio.Content className="rounded-xl border border-[var(--border)] p-4 data-[selected=true]:border-[var(--accent)]">
                      <h4 className="font-semibold">Freelancer</h4>
                      <p className="text-sm text-[var(--muted)]">
                        Offer services and earn money.
                      </p>
                    </Radio.Content>
                  </Radio>
                </div>
              </RadioGroup>
            </FieldGroup>

            <Fieldset.Actions className="mt-6 flex flex-col gap-3">

              {/* Register Button */}
              <Button
                type="submit"
                className="w-full bg-[var(--primary)] hover:bg-[var(--secondary)] text-white "
              >
                Create Account
                <ArrowRight className="text-[var(--accent)]"/>
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-[var(--border)]" />
                <span className="text-sm text-[var(--muted)]">OR</span>
                <div className="h-px flex-1 bg-[var(--border)]" />
              </div>

              {/* Google */}
              <Button
                type="button"
                variant="bordered"
                className="w-full border-[var(--border)]"
              >
                <FcGoogle/>
                Continue with Google
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
}