import { FC } from "react";
import Link from "next/link";
export const ContentContainer: FC = (props) => {
  return (
    <div className="flex-1 drawer h-52">
      {/* <div className="w-full h-screen drawer drawer-mobile"> */}
      <input id="my-drawer" type="checkbox" className="grow drawer-toggle" />
      <div className="items-center drawer-content">{props.children}</div>

      {/* SideBar / Drawer */}

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
          <li>
            <h1>Menu</h1>
          </li>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/checkwallet">
              <a>Check Your Wallet</a>
            </Link>
          </li>
          <li>
            <Link href="/display">
              <a>Display NFT</a>
            </Link>
          </li>
          <li>
            <Link href="/candymachine">
              <a>Candy Machine</a>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <a>Explore/Buy</a>
            </Link>
          </li>
          <li>
            <Link href="/soluno">
              <a>SolUNO</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
