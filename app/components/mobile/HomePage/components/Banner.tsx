import Image from "next/image";
import bannerImage from "@/public/images/bannerImage.png";
const Banner = () => {
  return (
    <div
      className="border-y-2 border-[#EDEDED]  mt-5 mx-auto p-3 bg-white"
      // style={{ border: "1px solid red" }}
    >
      <Image
        src={bannerImage}
        className="mx-auto w-full"
        width={366}
        height={126}
        alt="This is banner Image"
      />
    </div>
  );
};

export default Banner;
