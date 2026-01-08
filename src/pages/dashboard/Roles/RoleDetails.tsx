"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ImageUploader from "@/components/reusableComponents/ImageUploader";
import { MultiSelectChips } from "@/components/reusableComponents/MultiSelectChips";

import userPic from "@/assets/user-pic.png";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type AccessTabs =
  | "Dashboard"
  | "User Management"
  | "Settings"
  | "Reports"
  | "Billing";

export default function AddRole() {
  const [logoPreview, setLogoPreview] = useState<string | null>(userPic);

  const [tabs, setTabs] = useState<AccessTabs[]>([
    "Dashboard",
    "User Management",
  ]);

  const [formData, setFormData] = useState({
    user_status: "Active",
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@email.com",
    country_code: "+91",
    phone: "9876543210",
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex gap-5 w-full flex-col lg:flex-row">
      <div className="">
        <ImageUploader
          preview={logoPreview}
          onChange={setLogoPreview}
          buttonLabel="Upload / Change Image"
          containerClass="w-full max-w-80 lg:w-[340px] m-auto"
        />
        <div className="rounded-2xl bg-light-blue p-4 md:p-7 flex flex-col gap-5 mt-5">
          <h3 className="text-black text-base font-semibold">Status Of User</h3>

          <div className="grid grid-cols-1 gap-4">
            <Select
              value={formData.user_status}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, user_status: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Deactive">Deactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-5">
        {/* BASIC DETAILS */}
        <div className="rounded-2xl bg-light-blue p-4 md:p-7 flex flex-col gap-5">
          <h3 className="text-black text-base font-semibold">Basic Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              id="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
            />

            <Input
              id="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
            />

            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <div className="flex gap-2 relative bg-white rounded-[99px] border">
              <select
                id="country_code"
                value={formData.country_code}
                onChange={handleChange}
                className="outline-none pl-3 pr-0 rounded-tl-[99px] rounded-bl-[99px] text-paragraph text-sm font-light"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>

              <Input
                id="phone"
                type="tel"
                className="border-0 border-l rounded-l-none"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button className="px-12">Save Details</Button>
          </div>
        </div>

        {/* ACCESS */}
        <div className="rounded-2xl bg-light-blue p-4 md:p-7 flex flex-col gap-5">
          <h3 className="text-black text-base font-semibold">Access</h3>

          <MultiSelectChips<AccessTabs>
            options={[
              "Dashboard",
              "User Management",
              "Settings",
              "Reports",
              "Billing",
            ]}
            value={tabs}
            onChange={setTabs}
            placeholder="Select Access Tabs"
          />

          <div className="flex justify-end mt-4">
            <Button className="px-12">Save Access</Button>
          </div>
        </div>

        {/* PASSWORD */}
        <div className="rounded-2xl bg-light-blue p-4 md:p-7 flex flex-col gap-5">
          <h3 className="text-black text-base font-semibold">
            Change Password
          </h3>

          <div className="grid grid-cols-1 gap-4">
            <Input
              type="password"
              id="old_password"
              placeholder="Old Password"
              value={formData.old_password}
              onChange={handleChange}
            />
            <Input
              type="password"
              id="new_password"
              placeholder="New Password"
              value={formData.new_password}
              onChange={handleChange}
            />

            <Input
              type="password"
              id="confirm_password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end mt-4">
            <Button className="px-12">Verify</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
