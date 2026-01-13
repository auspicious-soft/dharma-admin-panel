import CourseSelect from "@/components/reusableComponents/CourseSelect";
import TableSearch from "@/components/reusableComponents/TableSearch";
import SubscriptionsPurchasedTable from "@/components/SubscriptionsPurchased/SubscriptionsPurchasedTable";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DateInput from "@/components/reusableComponents/DateInput";

const SubscriptionsPurchased = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* HEADER */}
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <h2 className="text-black text-lg md:text-2xl font-bold nd:leading-[46px]">
          Subscriptions Purchased
        </h2>
        <CourseSelect />
      </div>
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-1 md:gap-3 items-center max-w-md w-full">
          <Select>
            <SelectTrigger className="w-full h-[44px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="filter 1">Filter 1</SelectItem>
              <SelectItem value="Filter 2">Filter 2</SelectItem>
            </SelectContent>
          </Select>
          <DateInput className="w-full h-[44px]" />
        </div>
        <div className="flex gap-1 md:gap-3 items-center">
          <TableSearch />
          <Button
            variant="secondary"
            className="h-[44px] flex items-center gap-1 md:gap-2"
          >
            Export CSV
          </Button>
        </div>
      </div>
      <SubscriptionsPurchasedTable />
    </div>
  );
};

export default SubscriptionsPurchased;
