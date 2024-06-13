import React from "react";

const Title = ({
  subTitle,
  mainTitle,
}: {
  subTitle?: string;
  mainTitle?: string;
}) => {
  return (
    <div className="title">
      <div className="sub-title">{subTitle}</div>
      <div className="main-title">{mainTitle}</div>
    </div>
  );
};

export default Title;
