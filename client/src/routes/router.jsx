import {createBrowserRouter} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AuthLayout from "../layouts/AuthLayout";
import SignUP from "../features/auth/pages/SignUP";
import SignIn from "../features/auth/pages/SignIn";
import EmployerLayout from "../layouts/EmployerLayout";
import AddJobs from "../features/jobs/employer/pages/AddJobs";
import UpdateJob from "../features/jobs/employer/pages/UpdateJob";
import MyPostedJobs from "../features/jobs/employer/pages/MyPostedJobs";
import ReviewJobApplications from "../features/jobs/employer/pages/ReviewJobApplications";
import SeekerLayout from "../layouts/SeekerLayout";
import AllJobs from "../features/jobs/seeker/pages/AllJobs";
import JobDetails from "../features/jobs/seeker/pages/JobDetails";
import ApplyJob from "../features/jobs/seeker/pages/ApplyJob";
import MyJobApplications from "../features/jobs/seeker/pages/MyJobApplications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound></NotFound>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "signup",
        Component: SignUP
      },
      {
        path: "signin",
        Component: SignIn
      }
    ]
  },
  {
    path: "/employer",
    Component: EmployerLayout,
    children: [
      {
        path: "add-jobs",
        Component: AddJobs
      },
      {
        path: "update-job/:id",
        Component: UpdateJob
      },
      {
        path: "my-posted-jobs",
        Component: MyPostedJobs
      },
      {
        path: "my-posted-jobs/:id",
        Component: ReviewJobApplications
      }
    ]
  },
  {
    path: "/seeker",
    Component: SeekerLayout,
    children: [
      {
        path: "jobs",
        Component: AllJobs
      },
      {
        path: "jobs/details/:id",
        Component: JobDetails
      },
      {
        path: "application/apply/:id",
        Component: ApplyJob
      },
      {
        path: "application/me",
        Component: MyJobApplications
      }
    ]
  }
]);