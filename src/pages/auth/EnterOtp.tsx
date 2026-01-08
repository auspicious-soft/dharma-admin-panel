import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { ArrowRight } from "iconoir-react";
import { Button } from "@/components/ui/button";

const EnterOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const CORRECT_OTP = "1234"; // mock OTP (replace with API response)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (otp.length !== 4) {
      setError("Please enter a 4-digit OTP");
      return;
    }

    if (otp !== CORRECT_OTP) {
      setError("Invalid OTP. Please try again.");
      return;
    }

    // OTP matched
    setError("");
    navigate("/create-new-password");
  };

  return (
    <div>
      <h2 className="text-3xl font-bold capitalize leading-[46px] text-center mb-[30px] text-[#1f1f1f]">
        Enter OTP
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="relative max-w-72 w-full m-auto">
          <Input
            type="text"
            placeholder="1234"
            maxLength={4}
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
              setError(""); // clear error while typing
            }}
            className="text-center"
          />

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">
              {error}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Continue <ArrowRight className="w-5 h-5" />
        </Button>

        <div className="text-center">
          <p className="text-paragraph text-sm font-normal leading-[22px]">
            Haven't received it?{" "}
            <button
              type="button"
              className="underline text-paragraph text-sm font-normal leading-[22px]"
            >
              Resend in
            </button>{" "}
            02:00 sec
          </p>
        </div>
      </form>
    </div>
  );
};

export default EnterOtp;
