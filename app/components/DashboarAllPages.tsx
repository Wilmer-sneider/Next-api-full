import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import NavItem from "../dashboard/components/NavItem";

const DashboarAllPages = ({ children }: { children: ReactNode }) => {
  const navItemPatches = [
    {
      patch: "/dashboard/todo",
      title: "todo",
      description: "data todo",
    },
    {
      patch: "/dashboard/prueba",
      title: "prueba",
      description: "data prueba",
    },
  ];

  return (
    <div className="bg-slate-100 flex h-screen text-slate-300 selection:bg-blue-600 selection:text-white">
      <div
        id="menu"
        className="bg-gray-900 text-slate-300 w-64 h-full overflow-y-scroll"
      >
        <div id="logo" className="my-4 px-6">
          <h1 className="text-lg md:text-2xl font-bold text-white">
            Wilmer<span className="text-blue-500">7</span>.
          </h1>
          <p className="text-slate-500 text-sm">
            Esta es la prueba para un dashboard
          </p>
        </div>
        <div id="profile" className="px-6 py-10">
          <p className="text-slate-500">Bienvenido,</p>
          <Link href="#" className="inline-flex space-x-2 items-center">
            <span>
              <Image
                className="rounded-full w-8 h-8"
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                alt="imagen"
                width={200}
                height={200}
              />
            </span>
            <span className="text-sm md:text-base font-bold">
              Wilmer Sneider
            </span>
          </Link>
        </div>
        <div id="nav" className="w-full px-6">
          {navItemPatches.map((item) => (
            <NavItem key={item.patch} item={item} />
          ))}
        </div>
      </div>
      <div className="flex-1 bg-slate-100 p-4 overflow-y-scroll">
        {children}
      </div>
    </div>
  );
};

export default DashboarAllPages;
