import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-80 m-auto justify-between p-3 flex items-center text-white md:w-3/4">
      <div>
        <Link href="/">
          <img
            className="w-12 hover:translate-y-2 transition cursor-pointer"
            src="https://raw.githubusercontent.com/ulrmdhn/me.portoflio/master/src/img/mini-avatar.png"
            alt="avatar"
          />
        </Link>
      </div>
      <div className="flex gap-4">
        <p className="hidden md:block underline underline-offset-1 hover:underline-offset-8 cursor-pointer">
          Home
        </p>
        <p className="underline transition delay-150 ease-in underline-offset-1 hover:underline-offset-8  cursor-pointer">
          Projects
        </p>
      </div>
    </div>
  );
}

export default Navbar;
