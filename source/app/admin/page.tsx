"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { VscProject } from "react-icons/vsc";
import { BiBookContent } from "react-icons/bi";
import { BsFileEarmarkPerson } from "react-icons/bs";

export default function Admin() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/admin/login");
      return;
    }
    setReady(true);
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("token");
    router.push("/admin/login");
  } 

  function handleModule(moduleName: string) {
    router.push(`/admin/module/${moduleName}`);
  }

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <p>Verificando sessão...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
      <header className="flex flex-col gap-3 border-b border-white/10 bg-slate-900/40 px-6 py-3 backdrop-blur md:flex-row md:items-center md:justify-end">
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Sair
        </button>
      </header>
      <div className="flex flex-row flex-wrap p-10 gap-4">
        <div onClick={() => handleModule("pagecontent")} className="rounded-md w-20 border p-3 border-white/10 bg-slate-500/10 backdrop-blur cursor-pointer hover:bg-slate-50/10">
          <BiBookContent className="w-full h-full" />
        </div>
        <div onClick={() => handleModule("projects")}  className="rounded-md w-20 border p-3 border-white/10 bg-slate-500/10 backdrop-blur cursor-pointer hover:bg-slate-50/10">
          <VscProject className="w-full h-full" />
        </div>
        <div onClick={() => handleModule("parties")}  className="rounded-md w-20 border p-3 border-white/10 bg-slate-500/10 backdrop-blur cursor-pointer hover:bg-slate-50/10">
          <BsFileEarmarkPerson className="w-full h-full" />
        </div>
      </div>
    </main>
  );
}
