"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  // VARIABLES DECALARATION
  const { data: session } = useSession();

  return (
    <div className="bg-slate-100 mb-5">
      <ul className="flex justify-between font-bold  items-center">
        <Link href="/" className="mx-4  hover:text-black text-3xl">
          Todo App
        </Link>
        {session ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="mx-4  flex flex-col items-center m-2 cursor-pointer"
            >
              <img
                width="60"
                height="60"
                src={session.user.image}
                alt="profile"
                className="mx-1 rounded-full  border-red-600 border-2"
              />
              <p className="font-bold ">{session.user.name}</p>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <button
                className="btn btn-error font-bold text-center p-4"
                onClick={() => signOut()}
              >
                Logout
              </button>
            </ul>
          </div>
        ) : (
          <div
            className="mx-4 font-bold hover:text-black text-2xl flex items-center m-2 cursor-pointer"
            onClick={() => signIn()}
          >
            Login
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/login-rounded-right.png"
              alt="login-rounded-right"
              className="mx-1"
            />
          </div>
        )}
      </ul>
    </div>
  );
};

export default Nav;
