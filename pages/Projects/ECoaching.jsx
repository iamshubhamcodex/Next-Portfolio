import Home from "@/Component/ECoaching/ECoachingHome";
import Navbar from "@/Component/ECoaching/ECoachingNavbar";
import dynamic from "next/dynamic";
import Head from "next/head";

const DynamicServices = dynamic(
  () => import("@/Component/ECoaching/ECoachingServices"),
  {
    loading: () => "Loading...",
  }
);

const ECoaching = () => {
  return (
    <>
      <Head>
        <title>ECoaching | Projects</title>
      </Head>
      <Navbar />
      <Home />
      <DynamicServices />
    </>
  );
};

export default ECoaching;
