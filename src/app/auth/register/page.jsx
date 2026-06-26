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
  Description,
  Button,
  RadioGroup,
  Radio,
  TextArea,
  Chip,
} from "@heroui/react";

import { ArrowRight, Person, PersonWorker } from "@gravity-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, X } from "lucide-react";

import { authClient } from "@/lib/auth-client";

const RegisterForm = () => {
  
  const router = useRouter();

  // ===============================
  // State
  // ===============================

  const [role, setRole] = useState("client");

  const [skillInput, setSkillInput] = useState("");

  const [skills, setSkills] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);


//================================
// radio section
//================================
    const categoryType = [
    {
      title: "Client",
      value: "client",
      icon: <Person/>,
    },
    {
      title: "Freelancer",
      value: "freelancer",
      icon: <PersonWorker/>,
    }
  ];


  // ===============================
  // Skill Functions
  // ===============================

  const addSkill = () => {
    const skill = skillInput.trim();

    if (!skill) return;

    const exists = skills.find(
      (item) => item.toLowerCase() === skill.toLowerCase()
    );

    if (exists) {
      setSkillInput("");
      return;
    }

    setSkills((prev) => [...prev, skill]);

    setSkillInput("");
  };


  const removeSkill = (skill) => {
  setSkills((prev) => prev.filter((item) => item !== skill));

  
  };

  // ===============================
  // Register
  // ===============================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(formData.entries());

      console.log('data', data)

      const payload = {
        role:data.role, 
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.image,
        skills: data.skills || '',
        bio: data.bio || '',
        hourlyRate: data.hourlyRate || '',



      };

      // if (role === "freelancer") {

      //   // [data.skills, data.bio, Number(data.hourlyRate), ...payload]
      //   // payload.push = data.skills;

      //   // payload.bio = data.bio;

      //   // payload.hourlyRate = Number(data.hourlyRate);
      // }

      console.log("Register Payload");

      console.log(payload);

      const result = await authClient.signUp.email(payload);

      console.log(result);

      if (result?.error) {
        setError(result.error.message || "Registration Failed");
        return;
      }

      router.push("/auth/login");
    } catch (err) {
      console.log(err);

      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

    // ===============================
    // Google Login
    // ===============================

      const handleGoogleLogin = async () => {
      try {
        await authClient.signIn.social({
          provider: "google",
          callbackURL: "/dashboard/client",
        });
      } catch (error) {
        console.error(error);
        setError("Google sign in failed.");
      }
    };


  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center mx-auto px-4 py-10">
      <div className="w-full max-w-2xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-[var(--primary)] md:px-8 py-10 text-center">
          <h1 className="text-3xl font-bold text-white">
            Create Your Account
          </h1>

          <p className="mt-2 text-sm text-white/80">
            Join SkillSwap as a Client or Freelancer.
          </p>
        </div>

        <Form onSubmit={handleSubmit}>
          <Fieldset className="p-2 md:p-8">



            <FieldGroup className="space-y-6">

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
                  {error}
                </div>
              )}



          {/* Account Type */}
            <RadioGroup defaultValue="client" name="role" variant="secondary">

                <Label>Chose your Type:</Label>
                <div className="grid gap-x-4 grid-cols-2">
                  {categoryType.map((option) => (
                    <Radio key={option.value} value={option.value} 
                    onClick={()=> setRole(option.value)}>
                      
                      <Radio.Content
                        className=
                          " group relative flex w-full flex-col gap-6 rounded-xl border border-[var(--border)] bg-background px-5 py-5 transition-all data-[selected=true]:border-accent data-[selected=true]:bg-accent/10 "
                          
                       
                      >
                        <Radio.Control className="absolute top-3 right-4 size-5">
                          <Radio.Indicator />
                        </Radio.Control>

                        <div className="flex flex-col items-center justify-center gap-1">
                          <Description>{option.icon}</Description>
                          <span>{option.title}</span>
                        </div>
                        {/* <span className="text-sm font-semibold">{option.price}</span> */}
                      </Radio.Content>
                    </Radio>
                  ))}
                </div>
            </RadioGroup>



              {/* Google Sign Up */}
              <div className="space-y-3">

                <Button
                  type="button"
                  variant="bordered"
                  className="w-full h-12 border-[var(--border)]"
                  onPress={handleGoogleLogin}
                >
                  <FcGoogle className="text-xl" />
                  Continue with Google
                </Button>

                <p className="text-center text-xs text-[var(--muted)]">
                  Google accounts are always created as
                  <span className="font-semibold text-[var(--primary)]">
                    {" "}Client
                  </span>
                  .
                </p>

              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">

                <div className="h-px flex-1 bg-[var(--border)]" />

                <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
                  Email Registration
                </span>

                <div className="h-px flex-1 bg-[var(--border)]" />

              </div>



              {/* ---------- Form Fields Start ---------- */}

              {/* Full Name */}
              <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.trim().length < 3) {
                    return "Name must be at least 3 characters.";
                  }
                  return null;
                }}
              >
                <Label>Full Name</Label>

                <Input
                  placeholder="John Doe"
                  className="h-12"
                />

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
                    return "Enter a valid email address.";
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

              {/* Photo URL */}
              <TextField
                isRequired
                name="image"
                type="url"
                validate={(value) => {
                  try {
                    new URL(value);
                    return null;
                  } catch {
                    return "Please enter a valid image URL.";
                  }
                }}
              >
                <Label>Photo URL</Label>

                <Input
                  placeholder="https://example.com/profile.jpg"
                  className="h-12"
                />

                <Description>
                  Paste your profile image link.
                </Description>

                <FieldError />
              </TextField>

              {/* Password */}
              <TextField
                isRequired
                name="password"
                type={showPassword ? "text" : "password"}
                validate={(value) => {
                  if (value.length < 6) {
                    return "Password must be at least 6 characters.";
                  }

                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain one uppercase letter.";
                  }

                  if (!/[a-z]/.test(value)) {
                    return "Password must contain one lowercase letter.";
                  }

                  return null;
                }}
              >
                <Label>Password</Label>

                <div className="relative">

                  <Input
                    placeholder="Enter your password"
                    className="h-12 pr-12 w-full"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] hover:text-[var(--foreground)] transition"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>

                <Description>
                  Minimum 6 characters, including one uppercase and one lowercase letter.
                </Description>

                <FieldError />
              </TextField>

              {/* Freelancer Section */}
              {role === "freelancer" && (
                <>
                  <div className="mt-6 rounded-2xl border border-accent bg-accent/10 p-6">

                        <h3 className="text-lg font-semibold text-[var(--foreground)]">
                          Freelancer Profile
                        </h3>

                        <p className="mt-1 text-sm text-[var(--muted)]">
                          Complete your freelancer profile to start receiving projects.
                        </p>

                        <div className="mt-6 space-y-6">


                          {/* Skills */}
                          <div className="space-y-3">
                            <Label>Skills</Label>

                            <div className="flex gap-2">
                            <Input
                              value={skillInput}
                              placeholder="React"
                              onChange={(e)=>setSkillInput(e.target.value)}
                              onKeyDown={(e)=>{
                                if(e.key==="Enter"||e.key===","){
                                  e.preventDefault();
                                  addSkill();
                                }
                              }}
                              className="flex-1 bg-surface"
                            />

                              <Button
                                type="button"
                                color="primary"
                                onPress={addSkill}
                              >
                                Add
                              </Button>
                            </div>


                            <Description>
                              Press Enter, comma, or click Add to insert a skill.
                            </Description>

                            <input
                              type="hidden"
                              name="skills"
                              value={JSON.stringify(skills)}
                            />

                            {skills.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                  <Chip
                                    key={skill}
                                    variant="flat"
                                    color="primary"
                                    onClose={() => removeSkill(skill)}
                                  >
                                    {skill}
                                  </Chip>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Bio */}
                          <TextField
                            isRequired
                            name="bio"
                            validate={(value) => {
                              if (value.trim().length < 30) {
                                return "Bio must be at least 30 characters.";
                              }

                              return null;
                            }}
                          >
                            <Label>Professional Bio</Label>

                            <TextArea
                              placeholder="Tell clients about your experience, skills and services..."
                              className="min-h-18 bg-surface"
                            />

                            <Description>
                              Minimum 30 characters.
                            </Description>

                            <FieldError />
                          </TextField>

                          {/* Hourly Rate */}
                            <TextField
                            isRequired
                            name="hourlyRate"
                            type="number"
                            validate={(value) => {
                              if (!value || Number(value) <= 0) {
                                return "Enter a valid hourly rate.";
                              }

                              return null;
                            }}
                          >
                            <Label>Hourly Rate (USD)</Label>

                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-default-400 ">
                                  $
                                </span>

                                <Input
                                  min="1"
                                  placeholder="20"
                                  className="pl-8 w-full bg-surface"
                                />
                            </div>

                            <Description>
                              Example: $20 per hour
                            </Description>

                                <FieldError />
                            </TextField>


                        </div>
                  </div>
        
            

                </>  

              )}


                      {/* Create Account */}
                    <Button
                      type="submit"
                      isLoading={loading}
                      isDisabled={loading}
                      className="mt-6 h-12 w-full bg-[var(--primary)] text-white hover:bg-[var(--secondary)]"
                    >
                      {loading ? (
                        "Creating Account..."
                      ) : (
                        <>
                          Create Account
                          <ArrowRight className="ml-2 h-4 w-4 text-[var(--accent)]" />
                        </>
                      )}
                    </Button>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                      <p className="text-sm text-[var(--muted)]">
                        Already have an account?{" "}
                        <button
                          type="button"
                          onClick={() => router.push("/auth/login")}
                          className="font-semibold text-[var(--primary)] transition hover:text-[var(--secondary)]"
                        >
                          Login
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

export default RegisterForm;



