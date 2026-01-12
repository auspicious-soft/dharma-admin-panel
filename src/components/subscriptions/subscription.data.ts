import { SubscriptionPlan } from "./subscription.types";

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 1,
    name: "Silver",
    features: [
      { key: "qod", label: "Question of the day", enabled: true },
      {
        key: "applicationSupport",
        label: "Application Support",
        enabled: true,
      },
      {
        key: "practice",
        label: "PgMP Practice Test",
        enabled: true,
        items: ["Name of Practice Test", "Name of Practice Test 1"],
        attempts: 2,
      },
      {
        key: "mock",
        label: "PgMP Challenger Mock",
        enabled: true,
        items: ["Name of Mock Exams", "Name of Mock Exams 1"],
        attempts: 1,
      },
      { key: "domainsTasks", label: "Domains & Tasks", enabled: true },
    ],
    description: `
<h2>About this Subscription</h2>
<p>
  This one month subscription offers a meticulously designed
  preparation plan for PgMP certification.
</p>

<ul>
  <li>Question of the day</li>
  <li>Practice tests</li>
  <li>Mock exams</li>
</ul>
`,
  },
  {
    id: 2,
    name: "Gold",
    features: [
      { key: "qod", label: "Question of the day", enabled: true },
      {
        key: "applicationSupport",
        label: "Application Support",
        enabled: true,
      },
      {
        key: "practice",
        label: "PgMP Practice Test",
        enabled: true,
        items: ["Name of Practice Test", "Name of Practice Test 1"],
        attempts: 2,
      },
      {
        key: "mock",
        label: "PgMP Challenger Mock",
        enabled: true,
        items: ["Name of Mock Exams", "Name of Mock Exams 1"],
        attempts: 1,
      },
      { key: "domainsTasks", label: "Domains & Tasks", enabled: true },
    ],
    description: `
<h2>About this Subscription</h2>
<p>
  This one month subscription offers a meticulously designed
  preparation plan for PgMP certification.
</p>

<ul>
  <li>Question of the day</li>
  <li>Practice tests</li>
  <li>Mock exams</li>
</ul>
`,
  },
  {
    id: 3,
    name: "Platinum",
    features: [
      { key: "qod", label: "Question of the day", enabled: true },
      {
        key: "applicationSupport",
        label: "Application Support",
        enabled: true,
      },
      {
        key: "practice",
        label: "PgMP Practice Test",
        enabled: true,
        items: ["Name of Practice Test", "Name of Practice Test 1"],
        attempts: 1,
      },
      {
        key: "mock",
        label: "PgMP Challenger Mock",
        enabled: true,
        items: ["Name of Mock Exams", "Name of Mock Exams 1"],
        attempts: 1,
      },
      { key: "domainsTasks", label: "Domains & Tasks", enabled: true },
    ],
    description: `
<h2>About this Subscription</h2>
<p>
  This one month subscription offers a meticulously designed
  preparation plan for PgMP certification.
</p>

<ul>
  <li>Question of the day</li>
  <li>Practice tests</li>
  <li>Mock exams</li>
</ul>
`,
  },
];
