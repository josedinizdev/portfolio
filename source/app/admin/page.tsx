"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <p>Verificando sessão...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">
      <header className="flex flex-col gap-3 border-b border-white/10 bg-slate-900/40 px-6 py-6 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Painel Administrativo</h1>
          <p className="text-sm text-slate-300">
            Aqui você pode gerenciar os conteúdos do portfolio.
          </p>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Sair
        </button>
      </header>

      <section className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-10">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Bem-vindo(a)!</h2>
          <p className="mt-2 text-slate-300">
            Este é um protótipo de área administrativa. Você pode estender essa página para incluir:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200">
            <li>Gerenciamento de projetos e experiências</li>
            <li>Edição de informações de contato e perfil</li>
            <li>Publicação de posts ou estudos de caso</li>
            <li>Visualização de estatísticas básicas</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
          <h2 className="text-xl font-semibold">Próximos passos</h2>
          <p className="mt-2 text-slate-300">
            Implemente endpoints de API protegidos usando o token JWT para atualizar o conteúdo do seu portfolio.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            Dica: use <span className="font-mono">Authorization: Bearer &lt;token&gt;</span> em suas requisições.
          </p>
        </div>
      </section>
    </main>
  );
}
