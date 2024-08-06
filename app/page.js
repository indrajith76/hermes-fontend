export default function Home() {
  return (
    <div>
      <div className="p-9">
        <p className="text-golden text-[11px]">Dashboard</p>
        <p className="text-4xl mb-5">Open Positions</p>

        <div className=" flex gap-[63px]">
          <div className="w-full grid grid-cols-3 gap-[30px]">
            <div className="bg-[#13141B] p-4 h-[170px] rounded-[10px]">
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-1 text-[11px] bg-[#424550] px-[6px] rounded">
                  <img src="/images/ArrowU.png" alt="" /> IN
                </p>
                <img src="/images/Star1.png" alt="" />
              </div>
              <p className="text-2xl flex items-center gap-2 mt-1">
                PEPE-WETH <span className="text-golden text-[11px]">+1%</span>
              </p>

              <div className="bg-black rounded-lg p-2 flex items-center justify-between">
                <div>
                  <p className="text-[11px]">Entry market cap</p>
                  <p className="text-xl">$162.2K</p>
                </div>
                <img src="/images/ArrowR.png" alt="" />
                <div>
                  <p className="text-[11px]">Current MC</p>
                  <p className="text-xl">$162.2K</p>
                </div>
              </div>
              <div className="text-[11px] flex items-center justify-between mt-[14px]">
                <p>ACTIVE: 2HR</p>
                <div className="flex gap-2">
                  <button className="text-golden">PAUSE</button>
                  <button className="text-golden">CLOSE</button>
                  <button className="text-golden">EDIT</button>
                </div>
              </div>
            </div>

            <div className="bg-[#13141B] p-4 h-[170px] rounded-[10px]">
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-1 text-[11px] bg-[#424550] px-[6px] rounded">
                  <img src="/images/ArrowU.png" alt="" /> IN
                </p>
                <img src="/images/Star1.png" alt="" />
              </div>
              <p className="text-2xl flex items-center gap-2 mt-1">
                PEPE-WETH <span className="text-golden text-[11px]">+1%</span>
              </p>

              <div className="bg-black rounded-lg p-2 flex items-center justify-between">
                <div>
                  <p className="text-[11px]">Entry market cap</p>
                  <p className="text-xl">$162.2K</p>
                </div>
                <img src="/images/ArrowR.png" alt="" />
                <div>
                  <p className="text-[11px]">Current MC</p>
                  <p className="text-xl">$162.2K</p>
                </div>
              </div>
              <div className="text-[11px] flex items-center justify-between mt-[14px]">
                <p>ACTIVE: 2HR</p>
                <div className="flex gap-2">
                  <button className="text-golden">PAUSE</button>
                  <button className="text-golden">CLOSE</button>
                  <button className="text-golden">EDIT</button>
                </div>
              </div>
            </div>

            <div className="bg-[#13141B] p-4 h-[170px] rounded-[10px]">
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-1 text-[11px] bg-[#424550] px-[6px] rounded">
                  <img src="/images/ArrowU.png" alt="" /> IN
                </p>
                <img src="/images/Star1.png" alt="" />
              </div>
              <p className="text-2xl flex items-center gap-2 mt-1">
                PEPE-WETH <span className="text-golden text-[11px]">+1%</span>
              </p>

              <div className="bg-black rounded-lg p-2 flex items-center justify-between">
                <div>
                  <p className="text-[11px]">Entry market cap</p>
                  <p className="text-xl">$162.2K</p>
                </div>
                <img src="/images/ArrowR.png" alt="" />
                <div>
                  <p className="text-[11px]">Current MC</p>
                  <p className="text-xl">$162.2K</p>
                </div>
              </div>
              <div className="text-[11px] flex items-center justify-between mt-[14px]">
                <p>ACTIVE: 2HR</p>
                <div className="flex gap-2">
                  <button className="text-golden">PAUSE</button>
                  <button className="text-golden">CLOSE</button>
                  <button className="text-golden">EDIT</button>
                </div>
              </div>
            </div>

            <div className="bg-[#13141B] p-4 h-[170px] rounded-[10px] flex justify-center items-center">
              <img src="/images/plus.png" alt="" />
            </div>
          </div>
          <div>
            <div className="w-[291px] border border-[#4F5042] rounded-[10px] card-bg p-6">
              <div className="flex items-center mb-[30px]">
                <img src="/images/logo.png" alt="" />
                <p className="text-base">Hermes</p>
              </div>
              <p className="text-2xl">DEX Volume Bot</p>
              <p className="text-[12px] leading-[14px] text-[#7C7C7C] mt-2">
                Generate several buy & sell transactions on popular
                decentralized exchanges to add liquidity to markets.
              </p>

              <button className="w-full bg-[#D0C06C] rounded-lg text-black text-[14px] mt-16 py-[6px]">
                Start Trading
              </button>
              <button className="w-full border rounded-lg text-[14px] mt-2 py-[6px]">
                Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-9 pt-6">
        <div className="flex justify-between items-end">
          <p className="text-golden text-[10px]">
            Last Updated - 10 seconds ago...
          </p>
          <div className="relative">
            <img
              className="absolute my-auto ml-3 top-0 bottom-0"
              src="/images/search.png"
              alt=""
            />
            <input
              className="w-[177px] text-[13px] bg-[#13141B] border border-[#424550] rounded-[10px] p-2 pl-8"
              type="text"
              name=""
              id=""
              placeholder="Search for traders..."
            />
          </div>
        </div>
        <h2 className="text-4xl leading-10 mt-2">
          Buy Hermes Protocol (HERMES)
        </h2>
        <div className="flex items-center gap-7 mt-2 mb-[45px]">
          <p className="text-5xl leading-[62px]">$62.254</p>
          <button class="bg-neutral-950 text-[#D0C06C] border border-[#D0C06C] border-b-4 font-medium overflow-hidden relative px-4 py-[4px] rounded-md active:opacity-75 outline-none duration-300 group">
            <span class="bg-[#D0C06C] shadow-[#D0C06C] absolute -top-[150%] left-0 inline-flex w-80 text-[15px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Open Position
          </button>
          <button class="bg-neutral-950 text-white border border-white border-b-4 font-medium overflow-hidden relative px-4 py-[4px] rounded-md active:opacity-75 outline-none duration-300 group">
            <span class="bg-white shadow-white absolute -top-[150%] left-0 inline-flex w-80 text-[15px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            View Chart
          </button>
        </div>

        
      </div>
    </div>
  );
}
