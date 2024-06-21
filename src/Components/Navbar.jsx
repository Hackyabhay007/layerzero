import React, { useState, useEffect } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the menu when a menu item is clicked
  };

  const navItems = [
    { label: "</A> HOME", href: "#" },
    { label: "</A> DEVELOPERS", href: "#" },
    { label: "</A> COMMUNITY", href: "#" },
    { label: "</A> CAREERS", href: "#" },
    { label: "</A> LAYERZERO  SCAN", href: "#" },
  ];

  return (
    <nav className="bg-[#000000] bg-opacity-70   z-50 fixed top-0 w-full  leading-none text-[calc(12/16*1rem)] tracking-normal font-['Roboto_Mono'] lg:px-4 xl:px-12">
      <div className="flex justify-between">
        <div className="flex lg:w-full justify-around lg:justify-between lg:items-center">
          {/* logo */}
          <div className="rounded-full text-4xl flex items-center px-8 lg:px-0.5 py-2  text-gray-300 font-bold">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 125 34"
              className="h-8 lg:h-12"
            >
              <path
                d="M9.51364 8.3e-7C8.25792.00626346 7.01571.26115 5.85798.75015c-1.15773.489-2.20831 1.20257-3.09174 2.09985-.88344.89727-1.58242 1.96074-2.057039 3.12964C.234586 7.14855-.00635202 8.40001.00012729 9.66256v3.19164H7.72992V8.23017c-.00009-.21716.04238-.4322.12498-.63285.0826-.20065.20372-.38296.35642-.53653.15271-.15357.33403-.27533.53357-.35842.19955-.0831.41343-.12583.62942-.12579h.27867c.21599-.00004.42992.0427.62942.12579.1996.08309.3809.20485.5337.35842.1527.15356.2738.33588.3565.53653.0826.20065.1251.41568.1251.63285V20.626c1.0151 0 2.0203-.201 2.9581-.5915.9378-.3906 1.79-.9631 2.5078-1.6847.7178-.7217 1.2871-1.5785 1.6756-2.5214.3884-.9429.5883-1.9536.5883-2.9742V9.66256c.0055-2.55808-.9964-5.01436-2.7867-6.83199-.8784-.89695-1.9256-1.60915-3.0806-2.095113C12.0053.249496 10.7657-.00052614 9.51364 8.3e-7Z"
                fill="#fff"
              ></path>
              <path
                d="M9.65335 26.9007h-.27867c-.21596 0-.42981-.0428-.62933-.1258-.19953-.0831-.38083-.2049-.53353-.3585-.15271-.1535-.27383-.3357-.35645-.5363-.08262-.2006-.12513-.4157-.12508-.6328V12.8516c-1.01512-.0001-2.02032.2008-2.95818.5913-.93786.3906-1.79.963-2.5078 1.6847-.71779.7217-1.287175 1.5785-1.675602 2.5215-.388428.9429-.58829651 1.9536-.58820916 2.9742v3.1472C-.0123788 25.0349.22419 26.2893.696522 27.4612c.472328 1.1719 1.171048 2.238 2.055758 3.1367.8847.8986 1.93783 1.612 3.09848 2.0989 1.16065.4869 2.4058.7376 3.66341.7376 1.25763 0 2.50273-.2507 3.66343-.7376 1.1606-.4869 2.2138-1.2003 3.0985-2.0989.8847-.8987 1.5834-1.9648 2.0557-3.1367.4724-1.1719.7089-2.4263.696-3.6907v-3.1472h-7.7297v4.624c0 .2172-.0426.4322-.1252.6328-.0827.2006-.2039.3829-.3566.5364-.1527.1536-.334.2753-.5336.3584-.1995.083-.41338.1258-.62935.1258ZM32.2404 9.8125h-2.7092v13.8184h7.9516v-2.6052h-5.2421l-.0003-11.2132ZM46.1589 14.9305c-.3821-.4775-.8714-.8571-1.4277-1.1075-.5563-.2505-1.1638-.3648-1.7726-.3336-.6361-.005-1.2658.1272-1.8467.3878-.5809.2606-1.0994.6435-1.5205 1.1228-.9042 1.0186-1.4039 2.3361-1.4039 3.7015 0 1.3653.4997 2.6828 1.4039 3.7015.4212.4791.9398.8618 1.5207 1.1223.5809.2604 1.2105.3926 1.8465.3876 1.3745 0 2.4413-.4804 3.2003-1.441v1.1648h2.533v-9.8702h-2.533v1.164Zm-.7751 5.7744c-.2555.2571-.5607.4588-.8966.5929-.336.1341-.6957.1976-1.057.1867-.36.0116-.7184-.0516-1.053-.1858-.3345-.1341-.6378-.3363-.8911-.5938-.493-.5497-.7658-1.2637-.7658-2.0039 0-.7403.2728-1.4542.7658-2.0039.2534-.2573.5568-.4593.8913-.5934.3344-.1341.6929-.1974 1.0528-.186.3612-.0107.7209.0529 1.0568.1869.336.134.6412.3356.8968.5925.4986.547.7751 1.2619.7751 2.0039 0 .7419-.2765 1.4569-.7751 2.0039ZM55.2176 20.3919l-2.5605-6.6341h-2.7684l4.0237 9.5548c-.1684.5702-.4996 1.0781-.9524 1.4608-.4758.3245-1.0468.4776-1.6201.4346v2.3692c1.1178.1039 2.2355-.2013 3.1474-.8596.8425-.6393 1.5192-1.6635 2.0302-3.0726l3.579-9.8865H57.387l-2.1694 6.6334ZM65.5777 13.4875c-.6905-.0244-1.3785.0954-2.0206.352-.642.2566-1.2241.6444-1.7095 1.1388-.9372 1.013-1.4566 2.3462-1.4531 3.7298.0036 1.3835.5299 2.714 1.4724 3.7221.9819.9867 2.2843 1.4802 3.9073 1.4804 1.8843 0 3.3111-.7039 4.2801-2.1117l-2.0418-1.1849c-.2596.3313-.5954.5942-.9785.7661-.383.172-.8019.2478-1.2206.2209-1.5055 0-2.4283-.6184-2.7686-1.8553h7.4022c.0632-.3453.0961-.6957.0981-1.0468.0375-1.3749-.467-2.7088-1.4036-3.7112-.4537-.4907-1.0062-.8784-1.6208-1.1371-.6146-.2587-1.277-.3825-1.943-.3631Zm-2.5719 4.2839c.1121-.58.425-1.1012.8833-1.4711.4872-.3621 1.0827-.5467 1.6882-.523.5535-.0072 1.0944.1661 1.5417.4939.4757.3683.7949.9043.8932 1.4999l-5.0064.0003ZM74.8454 15.4575v-1.6982h-2.5329v9.8705h2.5329v-4.7179c0-.9475.3043-1.6253.9128-2.0334.6094-.4081 1.3468-.5768 2.0718-.4738v-2.8419c-.6367-.0081-1.2639.1555-1.8164.4737-.5456.3183-.9599.8224-1.1682 1.421ZM90.1775 11.9496V9.81244h-9.0091v2.60596h5.5763l-5.7213 9.0362v2.1759h9.2635v-2.6052h-5.8313l5.7219-9.0757ZM96.2656 13.4875c-.6905-.0244-1.3786.0954-2.0207.352-.6421.2566-1.2242.6444-1.7097 1.1388-.9373 1.013-1.4568 2.3463-1.4531 3.7299.0036 1.3835.5301 2.714 1.4727 3.722.9819.9867 2.2842 1.4802 3.907 1.4804 1.8844 0 3.3111-.7039 4.2802-2.1117l-2.0419-1.1849c-.2596.3312-.5953.5941-.9783.766-.383.172-.8018.2478-1.2204.221-1.5057 0-2.4286-.6184-2.7684-1.8553h7.402c.063-.3454.096-.6957.098-1.0468.038-1.3749-.467-2.7088-1.4036-3.7112-.4536-.4907-1.0062-.8784-1.6208-1.1371-.6146-.2587-1.277-.3825-1.943-.3631Zm-2.5718 4.2839c.112-.58.4251-1.1013.8835-1.4711.4872-.3623 1.0828-.5468 1.6883-.5229.5535-.0075 1.0944.1658 1.5416.4938.4758.3683.7948.9043.8929 1.4999l-5.0063.0003ZM105.533 15.4575v-1.6982H103v9.8705h2.533v-4.7179c0-.9475.304-1.6253.913-2.0334.609-.4081 1.346-.5767 2.071-.4738v-2.8419c-.636-.0081-1.264.1555-1.816.4737-.546.3183-.96.8223-1.168 1.421ZM114.293 13.4857c-1.189.0132-2.336.4395-3.247 1.2066-.911.7671-1.531 1.8277-1.752 3.0016-.222 1.1739-.033 2.3888.535 3.4385.568 1.0497 1.48 1.8693 2.58 2.3198 1.101.4504 2.323.504 3.459.1515 1.135-.3525 2.114-1.0894 2.771-2.0854s.95-2.1897.831-3.3786c-.12-1.1889-.645-2.2995-1.486-3.1434-.48-.4926-1.055-.8808-1.69-1.1407-.635-.2598-1.316-.3857-2.001-.3699Zm1.904 7.166c-.248.2521-.545.4504-.873.5827-.327.1322-.678.1956-1.031.1862-.352.0101-.702-.053-1.028-.1853-.326-.1324-.622-.331-.868-.5836-.486-.5335-.756-1.2309-.756-1.9545 0-.7235.27-1.4208.756-1.9544.246-.2525.542-.4511.868-.5834.326-.1323.676-.1956 1.028-.1856.353-.0093.703.0542 1.031.1865.328.1322.625.3305.873.5825.492.5305.766 1.229.766 1.9544 0 .7255-.274 1.424-.766 1.9545ZM124.807 20.5938h-3.082v3.0401h3.082v-3.0401Z"
                fill="#fff"
              ></path>
            </svg>
          </div>
          <ul className="hidden lg:flex lg:space-x-6 text-white">
            {navItems.map((item, index) => (
              <li className=" py-2" key={index}>
                <a href={item.href} className="block w-full h-full 2xl:text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex text-white 2xl:text-sm ">
            <div className="my-auto px-1">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="h-4 w-4"
              >
                <path
                  d="M.399609.398438H19.5996V19.5984l-3.84-3.84H.399609V.398438Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <h1 className="border-b">DEVELOPER ASSISTANCE</h1>
          </div>
        </div>

        {!isOpen ? (
          <div className="lg:hidden  flex justify-center items-center px-4">
            <button
              className=" text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="lg:hidden text-xl  flex justify-center items-center px-4">
            <button
              className=" text-white focus:outline-none"
              onClick={toggleMenu}
            >
             X
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Nar  */}
      {isOpen && (
        <ul className="lg:hidden bg-ocean-blue-600 py-4 px-6 space-y-4 text-white">
          {navItems.map((item, index) => (
            <li
              className="text-base border p-2 rounded-full hover:bg-white/20 border-white"
              key={index}
            >
              <a
                href={item.href}
                className="block w-full h-full  rounded-full"
                onClick={handleMenuItemClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;