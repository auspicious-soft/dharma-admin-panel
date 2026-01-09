import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { isAuthenticated } from "../auth/Authenticated";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import EnterOtp from "@/pages/auth/EnterOtp";
import CreateNewPassword from "@/pages/auth/CreateNewPassword";
import UploadFiles from "@/pages/dashboard/UploadFiles/UploadFiles";
import Users from "@/pages/dashboard/Users/Users";
import UsersDetails from "@/pages/dashboard/Users/UsersDetails";
import CourseIntroduction from "@/pages/dashboard/CourseIntroduction/CourseIntroduction";
import LessonsVideos from "@/pages/dashboard/LessonsVideos/LessonsVideos";
import DomainsTasks from "@/pages/dashboard/DomainsTasks/DomainsTasks";
import Questions from "@/pages/dashboard/Questions/Questions";
import Exams from "@/pages/dashboard/Exams/Exams";
import FlashCards from "@/pages/dashboard/FlashCards/FlashCards";
import ApplicationSupport from "@/pages/dashboard/ApplicationSupport/ApplicationSupport";
import ExamStrategy from "@/pages/dashboard/ExamStrategy/ExamStrategy";
import CertificatesPDUs from "@/pages/dashboard/CertificatesPDUs/CertificatesPDUs";
import Announcements from "@/pages/dashboard/Announcements/Announcements";
import RatingsReviews from "@/pages/dashboard/RatingsReviews/RatingsReviews";
import CompanyProfile from "@/pages/dashboard/CompanyProfile";
import Roles from "@/pages/dashboard/Roles/Roles";
import RoleDetails from "@/pages/dashboard/Roles/RoleDetails";
import AddRole from "@/pages/dashboard/Roles/AddRole";
import CourseEdit from "@/pages/dashboard/CourseIntroduction/CourseEdit";
import AddLessonsModule from "@/pages/dashboard/LessonsVideos/AddLessonsModule";
import EditLessonsTask from "@/pages/dashboard/LessonsVideos/EditLessonsTask";
import AddDomains from "@/pages/dashboard/DomainsTasks/AddDomains";
import EditDomainsQuestions from "@/pages/dashboard/DomainsTasks/EditDomainsQuestions";
import DomainsEditItem from "@/pages/dashboard/DomainsTasks/DomainsEditItem";
import View from "@/pages/dashboard/Questions/QuestionsView";
import AddFlashCard from "@/pages/dashboard/FlashCards/AddFlashCard";
import ManageCategories from "@/pages/dashboard/FlashCards/ManageCategories";
import AddApplicationSupport from "@/pages/dashboard/ApplicationSupport/AddApplicationSupport";
import EditApplicstionTask from "@/pages/dashboard/ApplicationSupport/EditApplicstionTask";
import AddExamStrategy from "@/pages/dashboard/ExamStrategy/AddExamStrategy";
import EditExamTask from "@/pages/dashboard/ExamStrategy/EditExamTask";
import AddAnnouncements from "@/pages/dashboard/Announcements/AddAnnouncements";
import Support from "@/pages/dashboard/Support/Support";
import Courses from "@/pages/dashboard/Courses/Courses";
import SubscriptionManagement from "@/pages/dashboard/SubscriptionManagement/SubscriptionManagement";
import SubscriptionsPurchased from "@/pages/dashboard/SubscriptionsPurchased/SubscriptionsPurchased";
import MockExams from "@/pages/dashboard/MockExams/MockExams";
import Tickets from "@/pages/dashboard/Tickets/Tickets";
import Notifications from "@/pages/dashboard/Notifications/Notifications";
import AddNotifications from "@/pages/dashboard/Notifications/AddNotifications";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Root redirect */}
      <Route
        path="/"
        element={
          isAuthenticated() ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/enter-otp" element={<EnterOtp />} />
        <Route path="/create-new-password" element={<CreateNewPassword />} />
      </Route>

      {/*dashboard routes */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {/* Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />

         {/* Upload files page */}
        <Route path="/upload-files" element={<UploadFiles />} />

         {/* Users page */}
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersDetails />} />

         {/* Course introduction page */}
        <Route path="/course-introduction" element={<CourseIntroduction />} />
        <Route path="/course-introduction/edit/:courseId" element={<CourseEdit />} />

        {/* Lessons videos page */}
        <Route path="/lessons-videos" element={<LessonsVideos />} />
        <Route path="/lessons-videos/add-lessons-module" element={<AddLessonsModule />}/>
        <Route path="/lessons-videos/edit-lessons-module/:id" element={<AddLessonsModule />}/>
        <Route path="/lessons-videos/edit-lessons-task/:moduleId/:itemId" element={<EditLessonsTask />}/>

        {/* Domains tasks page */}
        <Route path="/domains-tasks" element={<DomainsTasks />} />
        <Route path="/domains-tasks/add-domains" element={<AddDomains />}/>
        <Route path="/domains-tasks/add-domains/:id" element={<AddDomains />} />
        <Route path="/domains-tasks/edit-domains-questions/:id" element={<EditDomainsQuestions />}/>
        <Route path="/domains-tasks/domain-edit-item/:moduleId/:itemId" element={<DomainsEditItem />}/>

         {/*Question page*/}
        <Route path="/questions" element={<Questions />} />
        <Route path="/questions/QuestionsView/:id" element={<View />} />

         {/*Exams Page*/}
        <Route path="/exams" element={<Exams />} />
        {/*Flash Cards*/}
        <Route path="/flash-cards" element={<FlashCards />} />
        <Route path="/flash-cards/add-flash-cards" element={<AddFlashCard />} />
        <Route path="/flash-cards/edit-flash-cards/:id" element={<AddFlashCard />} />
        <Route path="/flash-cards/manage-categories" element={<ManageCategories />} />

         {/*Application Support*/}
        <Route path="/application-support" element={<ApplicationSupport />} />
        <Route path="/application-support/add-application-support" element={<AddApplicationSupport />} />
        <Route path="/application-support/edit-application-support/:id" element={<AddApplicationSupport />} />
        <Route path="/application-support/edit-application-task/:moduleId/:itemId" element={<EditApplicstionTask/>} />

        {/*Exam Strategy*/}
        <Route path="/exam-strategy" element={<ExamStrategy />} />
        <Route path="/exam-strategy/add-exam-strategy" element={<AddExamStrategy />} />
        <Route path="/exam-strategy/edit-exam-strategy/:id" element={<AddExamStrategy />} />
        <Route path="/exam-strategy/edit-exam-task/:moduleid/:itemId" element={<EditExamTask />} />

        {/*Certificates PDUs*/}
        <Route path="/certificates-pdus" element={<CertificatesPDUs />} />

        {/*Announcements*/}
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/announcements/add-announcement" element={<AddAnnouncements />} />

        {/*Notifications*/}
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/notifications/add-notification" element={<AddNotifications />} />

        {/*Ratings Reviews*/}
        <Route path="/ratings-reviews" element={<RatingsReviews />} />

        {/*Support */}
        <Route path="/support" element={<Support />} />

        {/*Courses */}
        <Route path="/courses" element={<Courses />} />

        {/*Subscription Management */}
        <Route path="/subscription-management" element={<SubscriptionManagement />} />
        
        {/*Subscriptions Purchased */}
        <Route path="/subscriptions-purchased" element={<SubscriptionsPurchased />} />

        {/*Mock Exams */}
        <Route path="/mock-exams" element={<MockExams />} />

       {/*Tickets*/}
        <Route path="/tickets" element={<Tickets />} /> 

        {/*Company Profile*/}
        <Route path="/company-profile" element={<CompanyProfile />} />

        {/*Role*/}
        <Route path="/roles" element={<Roles />} />
        <Route path="/roles/add" element={<AddRole />} />
        <Route path="/roles/:id" element={<RoleDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
