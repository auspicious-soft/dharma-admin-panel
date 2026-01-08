"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ImageUploader from "@/components/reusableComponents/ImageUploader";
const CompanyProfile = () => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [companyName, setCompanyName] = useState("");

  return (
    <div className="flex gap-5 w-full flex-col lg:flex-row">
      
      <ImageUploader
        preview={logoPreview}
        onChange={setLogoPreview}
        buttonLabel="Upload / Change Image"
        containerClass="w-full max-w-80 lg:w-[340px] m-auto"
      />

      {/* Right — Company Name */}
      <div className="flex-1 rounded-2xl bg-light-blue p-4 md:p-7 flex flex-col gap-5">
        <h3 className="text-black text-base font-semibold">
          Name of Company
        </h3>
        <Input
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
        />

        <div className="flex justify-end mt-2">
          <Button className="px-12">Update</Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
