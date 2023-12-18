import Image from "next/image";
import logo from "@/public/images/logo.png"
import fav from "@/public/images/fav.png"
import message from "@/public/images/message.png"
import coin from "@/public/images/coin.png"
import search from "@/public/images/search.png"
const Navber = () =>
{
    return (
        <div className="bg-[#ffff] container px-[0.78rem] pt-2">
            <div className="flex flex-row items-center justify-between pb-4">
                <div>
                    <Image
                        priority
                        src={logo}
                        height={32}
                        width={100}
                        alt="Logo"
                    />
                </div>
                <div className="flex flex-row items-center gap-4">
                    <span className="bg-[#FFF1CA] flex justify-center items-center rounded-lg">
                        <Image
                            priority
                            src={coin}
                            height={20}
                            width={20}
                            alt="coin"
                        />
                        <h4 className="font-medium px-1">6000 pts</h4>
                    </span>
                    <Image
                        priority
                        src={fav}
                        height={20}
                        width={24}
                        alt="fav"
                    />
                    <Image
                        priority
                        src={message}
                        height={20}
                        width={24}
                        alt="fav"
                    />
                </div>
            </div>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Image
                        priority
                        src={search}
                        height={20}
                        width={24}
                        alt="fav"
                    />
                </span>
                {/* pl-11 pr-[9.1rem] */}
                <input className="py-3 pl-11 w-full placeholder-gray-500 focus:border-gray-500 border" placeholder="Search by book"/>
            </div>
        </div>
    );
};

export default Navber;