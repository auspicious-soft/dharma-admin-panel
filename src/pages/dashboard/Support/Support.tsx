import CourseSelect from "@/components/reusableComponents/CourseSelect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Support = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between flex-col lg:flex-row gap-4 items-center">
        <h2 className="justify-start text-2xl font-bold w-full lg:w-auto">
          Support
        </h2>

        <div className="flex flex-wrap flex-1 w-full gap-2 lg:gap-4 lg:justify-end">
          <CourseSelect />
        </div>
      </div>
      <div className="self-stretch p-4 bg-light-blue rounded-[20px] inline-flex flex-col justify-start items-start gap-4">
        <Input type="text" placeholder="Title of section" />
        <Input type="text" placeholder="Description" />
        <Input type="email" placeholder="Email Address" />
        <Input type="tel" placeholder="Phone Number" />
        <Button type="submit" className="w-full">
          Update
        </Button>
      </div>
    </div>
  );
};

export default Support;
