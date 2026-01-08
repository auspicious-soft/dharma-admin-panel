import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { MailOpen, ArrowRight } from "iconoir-react";
import { Button } from "@/components/ui/button";
const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/enter-otp");
  };
  return (
    <div>
      <h2 className="text-3xl font-bold capitalize leading-[46px] text-center mb-[30px] text-[#1f1f1f]">
        Forgot Password?
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

        {/* Email Field */}
        <div className="relative">
          <MailOpen
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-input-888"
            strokeWidth={0.9}
          />
          <Input type="email" placeholder="Email Address" className="pl-12" />
        </div>

        <Button type="submit">
          Verify Email <ArrowRight className="w-5 h-5" />
        </Button>

        <div className="text-center">
          <p className="text-paragraph text-sm font-normal leading-[22px]">
            Remember Password?{" "}
            <Link
              to="/login"
              className="underline text-paragraph text-sm font-normal leading-[22px]"
            >
              Login
            </Link> 
          </p>
        </div>
        
      </form>
    </div>
  );
};

export default ForgotPassword;
