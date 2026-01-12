import { useNavigate } from "react-router-dom";
import SubscriptionBg from "@/assets/subscription-bg.jpg";
import { EditPencil } from "iconoir-react";
import { SubscriptionPlan } from "./subscription.types";

const SubscriptionCard = ({ plan }: { plan: SubscriptionPlan }) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-[20px] bg-[#F0F8FF]">
      <div
        className="flex justify-between items-center py-5 px-6 rounded-t-[20px]"
        style={{
          backgroundImage: `url(${SubscriptionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="justify-start text-white text-2xl font-semibold">
          {plan.name}
        </h3>

        <button
          onClick={() => navigate(`/subscription-management/edit/${plan.id}`)}
          className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white"
        >
          <EditPencil className="w-[18px]" />
        </button>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {/* Features */}
        <div className="space-y-3 text-sm">
          {plan.features
            .filter((feature) => feature.enabled)
            .map((feature) => (
              <div key={feature.key} className="space-y-2">
                {/* Feature label */}
                <div className="self-stretch justify-start text-paragraph text-sm font-medium list-disc">
                  <span className="relative top-[-1px] mr-2">•</span>{" "}
                  {feature.label}
                </div>

                {/* Items list */}
                {feature.items && feature.items.length > 0 && (
                  <ul className="self-stretch justify-start text-paragraph text-xs font-medium list-disc ml-6">
                    {feature.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {typeof feature.attempts === "number" && (
                  <div className="self-stretch justify-start text-paragraph text-xs font-medium list-disc ml-6">
                    Attempts: {feature.attempts}
                  </div>
                )}
              </div>
            ))}
        </div>
        <div
          className="prose prose-slate max-w-none tinymce-content text-paragraph text-base "
          dangerouslySetInnerHTML={{ __html: plan.description }}
        />
      </div>
    </div>
  );
};

export default SubscriptionCard;
