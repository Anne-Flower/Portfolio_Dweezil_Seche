import React, { FC } from "react";

type LabelsProps = {
  label: string;
};
const Labels: FC<LabelsProps> = ({ label }) => {
  return (
    <div className="menca text-white2 font-medium text-[12px] md:text-[14px]">
      {label}
    </div>
  );
};

export default Labels;
