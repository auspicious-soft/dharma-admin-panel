"use client";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { subscriptionPlans } from "@/components/subscriptions/subscription.data";
import { SubscriptionPlan, FeatureKey } from "@/components/subscriptions/subscription.types";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MultiSelectChips } from "@/components/reusableComponents/MultiSelectChips";
import RichTextEditor from "@/components/reusableComponents/RichTextEditor";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/* Types used by MultiSelect                                          */
/* ------------------------------------------------------------------ */
type PracticeTest =
  | "Name of Practice Test"
  | "Name of Practice Test 1"
  | "Name of Practice Test 2"
  | "Name of Practice Test 3";

type MockExams =
  | "Name of Mock Exams"
  | "Name of Mock Exams 1"
  | "Name of Mock Exams 2";

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */
const getFeature = (
  features: SubscriptionPlan["features"],
  key: FeatureKey
) => features.find((f) => f.key === key);

/* ------------------------------------------------------------------ */
/* Component                                                          */
/* ------------------------------------------------------------------ */
const EditSubscriptionPage = () => {
  const { id } = useParams();
  const plan = subscriptionPlans.find((p) => p.id === Number(id));

  /* ---------------------- State ---------------------- */
  const [questionOfDay, setQuestionOfDay] = useState<boolean>(false);
  const [applicationSupport, setApplicationSupport] = useState<boolean>(false);
  const [domainsTasks, setDomainsTasks] = useState<boolean>(false);

  const [practiceTest, setPracticeTest] = useState<PracticeTest[]>([]);
  const [practiceAttempts, setPracticeAttempts] = useState<number>(0);

  const [mockExams, setMockExams] = useState<MockExams[]>([]);
  const [mockAttempts, setMockAttempts] = useState<number>(0);

  const [description, setDescription] = useState<string>("");

  /* ---------------------- Sync from Plan ---------------------- */
  useEffect(() => {
    if (!plan) return;

    const qod = getFeature(plan.features, "qod");
    const appSupport = getFeature(plan.features, "applicationSupport");
    const domains = getFeature(plan.features, "domainsTasks");
    const practice = getFeature(plan.features, "practice");
    const mock = getFeature(plan.features, "mock");

    setQuestionOfDay(qod?.enabled ?? false);
    setApplicationSupport(appSupport?.enabled ?? false);
    setDomainsTasks(domains?.enabled ?? false);

    setPracticeTest((practice?.items as PracticeTest[]) ?? []);
    setPracticeAttempts(practice?.attempts ?? 0);

    setMockExams((mock?.items as MockExams[]) ?? []);
    setMockAttempts(mock?.attempts ?? 0);

    setDescription(plan.description);
  }, [plan]);

  /* ---------------------- Guard ---------------------- */
  if (!plan) {
    return <div className="p-6">Subscription not found</div>;
  }

  /* ---------------------- Render ---------------------- */
  return (
    <div className="flex flex-col gap-7">
      <h2 className="text-2xl font-bold">Edit Subscription</h2>

      {/* PLAN NAME */}
      <Input value={plan.name} readOnly />

      <div className="flex flex-col gap-2">
        <h6 className="text-sm font-normal">Select Access</h6>

        <div className="p-4 bg-light-blue rounded-[20px] flex flex-col gap-3">
          {/* Question of the day */}
          <FeatureSelect
            label="Question of the day"
            value={questionOfDay}
            onChange={setQuestionOfDay}
          />

          {/* Application Support */}
          <FeatureSelect
            label="Application Support"
            value={applicationSupport}
            onChange={setApplicationSupport}
          />

          {/* Practice Test */}
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <Label className="lg:max-w-[200px] w-full">Practice Test</Label>

            <MultiSelectChips<PracticeTest>
              options={[
                "Name of Practice Test",
                "Name of Practice Test 1",
                "Name of Practice Test 2",
                "Name of Practice Test 3",
              ]}
              value={practiceTest}
              onChange={setPracticeTest}
              placeholder="Select Practice Tests"
            />

            <Input
              type="number"
              value={practiceAttempts}
              onChange={(e) => setPracticeAttempts(Number(e.target.value))}
              placeholder="No. of Attempts"
              className="lg:max-w-[200px]"
            />
          </div>

          {/* Mock Exams */}
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <Label className="lg:max-w-[200px] w-full">Mock Exams</Label>

            <MultiSelectChips<MockExams>
              options={[
                "Name of Mock Exams",
                "Name of Mock Exams 1",
                "Name of Mock Exams 2",
              ]}
              value={mockExams}
              onChange={setMockExams}
              placeholder="Select Mock Exams"
            />

            <Input
              type="number"
              value={mockAttempts}
              onChange={(e) => setMockAttempts(Number(e.target.value))}
              placeholder="No. of Attempts"
              className="lg:max-w-[200px]"
            />
          </div>

          {/* Domains & Tasks */}
          <FeatureSelect
            label="Domains & Tasks"
            value={domainsTasks}
            onChange={setDomainsTasks}
          />
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col gap-1.5">
        <Label>Your Text</Label>
        <RichTextEditor value={description} onChange={setDescription} />
      </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-2 max-w-xl ml-auto w-full ">
              <Button variant="outline">Cancel</Button>
      
              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Reusable Feature Select                                             */
/* ------------------------------------------------------------------ */
const FeatureSelect = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) => (
  <div className="flex flex-col lg:flex-row gap-2 items-center">
    <Label className="lg:max-w-[200px] w-full">{label}</Label>
    <Select
      value={value ? "yes" : "no"}
      onValueChange={(v) => onChange(v === "yes")}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="yes">Yes</SelectItem>
        <SelectItem value="no">No</SelectItem>
      </SelectContent>
    </Select>
  </div>
);

export default EditSubscriptionPage;
