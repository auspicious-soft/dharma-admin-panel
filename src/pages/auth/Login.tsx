import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../auth/Authenticated";
import { Input } from "../../components/ui/input";
import { Lock, Eye, EyeClosed, MailOpen, ArrowRight } from "iconoir-react";
import { Button } from "@/components/ui/button";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(); // fake login
    navigate("/dashboard", { replace: true });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold capitalize leading-[46px] text-center mb-[30px] text-[#1f1f1f]">
        Login
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        {/* Email Field */}
        <div className="relative">
          <MailOpen
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-input-888"
            strokeWidth={0.9}
          />
          <Input type="email" placeholder="Email Address" className="pl-12" />
        </div>

        {/* Password Field */}
        <div className="relative">
          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-input-888"
            strokeWidth={0.9}
          />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="pl-12 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-input-888 hover:text-dark-bg"
          >
            {showPassword ? (
              <EyeClosed className="w-4 h-4" strokeWidth={0.9} />
            ) : (
              <Eye className="w-4 h-4" strokeWidth={0.9} />
            )}
          </button>
        </div>
        <div className="mt-[-6px] text-right ">
          <Link
            to="/forgot-password"
            className=" text-paragraph text-sm font-normal leading-[22px] ml-auto"
          >
            Forgot Password?
          </Link>
        </div> 

        <Button type="submit">
          Login <ArrowRight className="w-5 h-5" />
        </Button>
      </form>
    </div>
  );
};

export default Login;
