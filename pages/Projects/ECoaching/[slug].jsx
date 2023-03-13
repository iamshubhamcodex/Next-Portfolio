import ECoachingAbout from "@/Component/ECoaching/ECcoachingAbout";
import ECoachingContact from "@/Component/ECoaching/ECoachingContact";
import ECoachingLogin from "@/Component/ECoaching/ECoachingLogin";
import ECoachingRegister from "@/Component/ECoaching/ECoachingRegister";
import ECoachingCourses from "@/Component/ECoaching/ECoachingCourses";
import ECoachingDashboard from "@/Component/ECoaching/ECoachingDashboard";
import ECoachingProfile from "@/Component/ECoaching/ECoachingProfile";
import ECoachingNavbar from "@/Component/ECoaching/ECoachingNavbar";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { ECoachingContext } from "@/Context/ECoaching/ECoachingStates";
import Head from "next/head";

const DynamicRoute = () => {
  let { setNavActive, setLogged } = useContext(ECoachingContext);
  const router = useRouter();
  let { slug } = router.query;
  let component;

  useEffect(() => {
    if (slug === "Home") setLogged(false);
    setNavActive(slug);
  }, [slug]);

  switch (slug) {
    case "Contact":
      component = <ECoachingContact />;
      break;
    case "About":
      component = <ECoachingAbout />;
      break;
    case "Register":
      component = <ECoachingRegister />;
      break;
    case "Login":
      component = <ECoachingLogin />;
      break;
    case "Courses":
      component = <ECoachingCourses />;
      break;
    case "Dashboard":
      component = <ECoachingDashboard />;
      break;
    case "Profile":
      component = <ECoachingProfile />;
      break;
    case "Log Out":
      window.localStorage.clear("loggedIn");
      window.localStorage.clear("user");
      setLogged(false);
      router.push("/Projects/ECoaching/");
      break;
    default:
      component = <h1 style={{ marginTop: "10rem" }}>No Such Page</h1>;
  }
  return (
    <>
      <Head>
        <title>{slug} - ECoaching | Projects</title>
      </Head>
      <ECoachingNavbar />
      {component}
    </>
  );
};

export default DynamicRoute;
