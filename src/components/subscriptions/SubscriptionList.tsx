import SubscriptionCard from "./SubscriptionCard";
import { subscriptionPlans } from "./subscription.data";

const SubscriptionList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {subscriptionPlans.map((plan) => (
        <SubscriptionCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
};

export default SubscriptionList;
