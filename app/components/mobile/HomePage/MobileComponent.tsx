// components/MobileComponent.js

import Banner from "./components/Banner";
import Category from "./components/Category";

const MobileComponent = () => {
  return (
    <div className="max-w-[390px] mx-auto bg-[#F1F1F1]">
      <Banner />
      <Category/>
      <p>ali</p>
    </div>
  );
};

export default MobileComponent;
