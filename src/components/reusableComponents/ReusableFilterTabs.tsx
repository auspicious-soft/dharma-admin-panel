"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type TabConfig = {
  value: string;
  label: string;
};

type ReusableFilterTabsProps = {
  value: string;
  tabs: TabConfig[];
  defaultValue?: string;
  className?: string;
  onValueChange?: (value: string) => void;
};


export function ReusableFilterTabs({
  value, 
  defaultValue,
  tabs,
  onValueChange
}: ReusableFilterTabsProps) {
  return (
    <Tabs value={value} defaultValue={defaultValue} onValueChange={onValueChange}>
      <TabsList>
        {tabs.map(tab => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

