import { loader } from "@/utils/images";
import React from "react";

const Loading = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loader_image" />
    </div>
  );
};

export default Loading;
