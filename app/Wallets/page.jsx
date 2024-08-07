export default function Wallets() {
  return (
    <div>
      <div className="p-5 md:p-9">
        <p className="text-golden text-[11px]">Wallets</p>
        <p className="text-4xl mb-5">Active Wallets</p>
        <div className="w-[320px] md:w-[520px] lg:w-auto overflow-auto">

        <table className="w-[1017px] border-separate border-spacing-y-2">
          <thead>
            <tr>
              <td></td>
              <td></td>
              <td className="text-[10px] text-[#424550]">Current Action</td>
              <td className="text-[10px] text-[#424550]">Balance</td>
              <td className="text-[10px] text-[#424550]">Last activity</td>
              <td className="text-[10px] text-[#424550]">Actions</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((item, idx) => (
              <tr className="bg-[#13141B]">
                <td className="rounded-l-lg p-3 text-[11px] text-[#D0C06C] flex items-center gap-3">
                  #{idx + 1} <p className="text-white text-xl">Main Wallet 🦄</p>
                </td>
                <td></td>
                <td className=" text-[11px]">Trading SHIB-USDT</td>
                <td className=" text-[11px]">7.42 ETH</td>
                <td className=" text-[11px]">1m ago</td>
                <td className=" text-[11px] text-[#D0C06C]">Disperse</td>
                <td className=" text-[11px] text-[#D0C06C]">Rename Wallet</td>
                <td className="rounded-r-lg text-[11px] text-[#D0C06C]">
                  View on Etherscan
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <button className="flex items-center gap-1 text-[13px]">
                  <img src="/images/plus.png" alt="" />
                  <p>Create new</p>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

      <div className="border-t border-[#424550] p-5 md:p-9 pt-6">
        <div className=" md:flex justify-between items-end">
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
              className="w-full mt-2 md:mt-0 md:w-[177px] text-[13px] bg-[#13141B] border border-[#424550] rounded-[10px] p-2 pl-8"
              type="text"
              name=""
              id=""
              placeholder="Search for traders..."
            />
          </div>
        </div>
        <h2 className="text-4xl leading-10 mt-2">All Wallets</h2>

        <div className="flex flex-col gap-5 py-5 w-full lg:w-[935px] border-t border-[#424550] mt-8">
          {[1, 2, 3, 4].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <p className="text-[10px] md:text-[13px] 2xl:text-base">
                0x73ff03f25cf2e0d7a1c4bc2ce21eeb22dbbd4c68
              </p>
              <button className="text-[#D0C06C] text-[10px] 2xl:text-sm">
                View on Etherscan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
