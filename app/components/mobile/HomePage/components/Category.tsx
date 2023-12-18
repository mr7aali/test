import React from "react";
import categoryImage from "@/public/images/product1png.png";
import Image from "next/image";
const Category = () => {
  return (
    <div className="bg-white  rounded-lg m-[0.75rem] px-[.78rem]">
      <h1 className="text-[#0F0F0F] text-[1.125rem] px-[0.47rem] pt-[0.94rem]">
        Category <span className="text-[#737373]">for You</span>
      </h1>

      <div className="w-full  overflow-x-auto flex">
        <SingleCategory title="Lotions" />
        <SingleCategory title="Bag"/>
        <SingleCategory title="Feeding Bottle"/>

        <SingleCategory title="Honey"/>
        <SingleCategory title="Lotions"/>
        <SingleCategory title="Feeding Bottle"/>
        <SingleCategory title="Honey"/>
        <SingleCategory title="Lotions"/>
      </div>
    </div>
  );
};

export default Category;

const SingleCategory = ({ title }: { title: string }) => {
  return (
    <div className="mt-[1.12rem] inline-block mx-[0.47rem]">
      <div className="w-[90px] h-[90px] rounded-full flex justify-center items-center p-2 bg-[#F1F1F1]">
        <Image src={categoryImage} alt="Category Image" />
      </div>
      <h1 className="text-center mb-[1.06rem] mt-[0.56rem]">{title}</h1>
    </div>
  );
};
