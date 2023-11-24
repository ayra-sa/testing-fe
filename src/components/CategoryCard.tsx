import React from "react";

type Props = {
  label: string;
};

const CategoryCard = ({ label }: Props) => {
  return (
    <div className="border border-[#eee] rounded-xl py-2 px-4 font-medium text-sm tracking-[0.056px] cursor-default">
      <p>{label}</p>
    </div>
  );
};

export default CategoryCard;
