import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <div
      className={`z-10 duration-500 absolute top-0 ${
        sidebar ? "-left-[170px]" : "left-0"
      } bg-[#0a0b10] md:relative flex flex-col justify-between border-r border-white text-white`}
    >
      <button
        onClick={() => setSidebar(!sidebar)}
        className="absolute block md:hidden top-2 right-2 p-1 text-gray-500 border border-gray-500 rounded"
      >
        <AiOutlineClose />
      </button>
      <div className="w-[167px] h-screen px-2 pt-6">
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="#" className="flex items-center gap-1">
              <img src="/images/ethereum.png" alt="" />
              <p className="text-[10px]">
                <span className="text-[#424550]">Ethereum</span> $2621
              </p>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center gap-1">
              <img src="/images/solana.png" alt="" />
              <p className="text-[10px]">
                <span className="text-[#424550]">Solana</span> $221
              </p>
            </Link>
          </li>
        </ul>
        <div
          className="h-[1px] my-6"
          style={{
            background:
              "linear-gradient(90deg, rgba(26, 29, 40, 0.07) 0%, rgba(182, 168, 98, 0.51) 49.2%, rgba(90, 102, 142, 0) 100%);",
          }}
        ></div>

        <ul className="flex flex-col gap-8">
          <li className="text-[15px] ">Dashboard</li>
          <li className="text-[15px] ">
            <Link href="/Wallets">Wallets</Link>
          </li>
          <li className="text-[15px] ">Trades</li>
          <li className="text-[15px] ">Volume</li>
        </ul>
      </div>
      <div className="flex flex-col items-center p-2 pb-10">
        <button className="flex items-center gap-2">
          <img src="/images/telegram.png" alt="" />
          <p className="text-[14px]">Get Help</p>
        </button>
        <div
          className="h-[1px] w-full my-4"
          style={{
            background:
              "linear-gradient(90deg, rgba(26, 29, 40, 0.07) 0%, rgba(182, 168, 98, 0.51) 49.2%, rgba(90, 102, 142, 0) 100%);",
          }}
        ></div>
        <button className="flex items-center gap-2 border border-transparent shadow shadow-[#ffffff63] rounded-xl py-1 px-2">
          <img src="/images/lightning.png" alt="" />
          <p className="text-[14px]">Upgrade to PRO</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
