import Link from "next/link";

const Nav = () => {
  return (
    <div className="bg-slate-100">
      <ul className="flex justify-center  ">
        <Link href="/" className="mx-4 text-cyan-400 hover:text-black text-3xl">
          Home
        </Link>
        <Link
          href="/Auth"
          className="mx-4 text-cyan-400 hover:text-black text-3xl"
        >
          Auth
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
