import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-b flex flex-col lg:flex-row lg:items-center">
      <div className="hidden lg:block w-[192px] lg:border-r pl-2 py-5">
        <Link className="flex items-center" href="/">
          <img src="/images/logo.png" alt="" />
          <div>
            <p className="text-lg m-0 leading-5">Hermes</p>
            <p className="text-[11px] text-[#D0C06C]">Automated Trading</p>
          </div>
        </Link>
      </div>
      <div className="flex lg:hidden justify-between px-5 pt-5">
        <Link className="flex items-center" href="/">
          <img src="/images/logo.png" alt="" />
          <div>
            <p className="text-lg m-0 leading-5">Hermes</p>
            <p className="text-[11px] text-[#D0C06C]">Automated Trading</p>
          </div>
        </Link>
        <div className="flex items-center gap-[5px]">
          <img src="/images/Ellipse1.png" alt="" />
          <div>
            <p className="text-[11px] leading-3">@treasure11</p>
            <p className="text-[11px] text-[#D0C06C]">treasure.eth</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0 w-full px-10 mb-5 lg:mb-0">
        <div className="hidden lg:flex items-center gap-[5px]">
          <img src="/images/Ellipse1.png" alt="" />
          <div>
            <p className="text-[11px] leading-3">@treasure11</p>
            <p className="text-[11px] text-[#D0C06C]">treasure.eth</p>
          </div>
        </div>

        <div className="relative">
          <img
            className="absolute my-auto ml-3 top-0 bottom-0"
            src="/images/search.png"
            alt=""
          />
          <input
            className="w-[283px] text-[13px] bg-[#13141B] border border-[#424550] rounded-[10px] p-2 pl-8"
            type="text"
            name=""
            id=""
            placeholder="Search for traders..."
          />
        </div>

        <ul className="flex items-center gap-8">
          <li>
            <a href="#">
              <img src="/images/discord.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/twitter.png" alt="" />
            </a>
          </li>
          <li>
            <a className="text-[13px]" href="#">
              Notifications
            </a>
          </li>
          <li>
            <a className="text-[13px]" href="#">
              $HERMES
            </a>
          </li>
          <li>
            <a className="text-[13px]" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="text-[11px] text-[#D0C06C]" href="#">
              Disconnect
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
