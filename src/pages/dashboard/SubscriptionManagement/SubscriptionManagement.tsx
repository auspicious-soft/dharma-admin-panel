import CourseSelect from "@/components/reusableComponents/CourseSelect";
import SubscriptionList from "@/components/subscriptions/SubscriptionList";


const SubscriptionManagement = () => {
  return (
   <div className="flex flex-col gap-5 ">
       <div className="flex justify-between flex-col lg:flex-row gap-4 items-center">
        <h2 className="justify-start text-2xl font-bold w-full lg:w-auto">
         Subscription Management
        </h2>  

        <div className="flex flex-wrap flex-1 w-full gap-2 lg:gap-4 lg:justify-end">
          <CourseSelect />
          
        </div>
      </div>
      
      <SubscriptionList />
    </div>
  );
};

export default SubscriptionManagement;
