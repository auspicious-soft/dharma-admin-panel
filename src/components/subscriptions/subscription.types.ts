export type FeatureKey =
  | "qod"
  | "applicationSupport"
  | "practice"
  | "mock"
  | "domainsTasks";
export interface SubscriptionPlan {
  id: number;
  name: string;
  features: SubscriptionFeature[];
  description: string;
}
export interface SubscriptionFeature {
  key: FeatureKey;
  label: string;
  enabled: boolean;

  items?: string[];       
  attempts?: number;   
}
