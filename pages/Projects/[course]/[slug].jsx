import { useRouter } from "next/router";
import React, { useState } from "react";

const DynamicRouter = () => {
  // const [slug, setSlug] = useState("");
  // const [query, setQuery] = useState("");
  const router = useRouter();
  let { slug, course } = router.query;
  return (
    <div>
      {slug}
      {course}
    </div>
  );
};

export default DynamicRouter;
