import React, { FC } from "react";

type LabelsProps = {
  label: string;
};
const Labels: FC<LabelsProps> = ({ label }) => {
  return <div className="menca text-white2 font-extralight">{label}</div>;
};

export default Labels;
