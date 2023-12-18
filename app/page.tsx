// index.tsx
import { headers } from "next/headers";
import dynamic from "next/dynamic";
import { isMobile } from "./utils/isMobile";

const MobileComponent = dynamic(
  () => import("./components/mobile/HomePage/MobileComponent")
);
const DesktopComponent = dynamic(
  () => import("./components/desktop/Home/DesktopComponent")
);

export default function Home() {
  const userAgent = headers().get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return mobileCheck ? <div><MobileComponent /></div> : <DesktopComponent />;
}