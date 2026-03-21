
"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.token) {
        setError(data?.error?.name || "Erro ao realizar login.");
        return;
      }

      localStorage.setItem("token", data.token);
      router.push("/admin");
    } catch (err) {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white px-4">
      <div className="w-full max-w-md rounded-2xl bg-slate-900/80 border border-white/10 p-8 shadow-lg backdrop-blur">
        <h1 className="text-3xl font-semibold mb-2">Administração</h1>
        <p className="text-sm text-slate-300 mb-6">
          Faça login para gerenciar o conteúdo do seu portfolio.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-slate-200">E-mail</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2 text-white outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="seu@email.com"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-200">Senha</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950/40 px-3 py-2 text-white outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/30"
              placeholder="••••••••"
            />
          </label>

          {error ? (
            <div className="rounded-md bg-red-500/15 px-3 py-2 text-sm text-red-100">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-base font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="mt-6 text-xs text-slate-400">
          Voltar para <a href="/" className="text-indigo-300 hover:text-indigo-100">portfolio</a>.
        </p>
      </div>
    </main>
  );
}
