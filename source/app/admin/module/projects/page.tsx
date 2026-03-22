"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { VscProject } from "react-icons/vsc";
import { BiBookContent } from "react-icons/bi";

export default function Projects() {
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

  function handleGoBack() {
    router.back();
  }

  function handleLogout() {
    localStorage.removeItem("token");
    router.push("/admin/login");
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
      <header className="flex flex-col gap-3 border-b border-white/10 bg-slate-900/40 px-6 py-3 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Projetos</h1>
          <p className="text-sm text-slate-300">
            Gerencie os projetos exibidos no seu portfolio, adicione novos ou edite os existentes.
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            onClick={handleGoBack}
            className="rounded-md bg-slate-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-500"
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Sair
          </button>
        </div>
      </header>
      <div className="flex flex-row flex-wrap p-10 gap-4">

      </div>
    </main>
  );
}
