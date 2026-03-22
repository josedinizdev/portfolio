"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Column, DataGrid } from 'react-data-grid';
import 'react-data-grid/lib/styles.css';
import type { Parties } from "@/lib/model";
import PartiesApi from "@/api/partiesApi";

export default function PartiesList() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [parties, setParties] = useState<Parties[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/admin/login");
      return;
    }
    setReady(true);
    loadParties();
  }, [router]);

  const loadParties = async () => {
    setLoading(true);
    const data = await PartiesApi.list();
    if (data) setParties(data);
    setLoading(false);
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/module/parties/${id}`);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir este cliente?")) {
      setLoading(true);
      const success = await PartiesApi.remove(id);
      if (success) {
        await loadParties();
      }
      setLoading(false);
    }
  };

  const handleCreate = () => {
    router.push("/admin/module/parties/0");
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  const columns: Column<Parties>[] = [
    { key: 'name', name: 'Nome' },
    { key: 'entity_type', name: 'Tipo', renderCell: ({ row }: { row: Parties }) => row.entity_type === 'person' ? 'Pessoa' : 'Empresa' },
    { key: 'status', name: 'Status' },
    { key: 'email', name: 'Email' },
    { key: 'phone', name: 'Telefone' },
    { key: 'document', name: 'Documento' },
    { key: 'lead_origin', name: 'Origem do Lead' },
    {
      key: 'actions',
      name: 'Ações',
      renderCell: ({ row }: { row: Parties }) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(row.id)}
            className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-500 text-xs whitespace-nowrap"
          >
            Editar
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500 text-xs whitespace-nowrap"
          >
            Excluir
          </button>
        </div>
      ),
      width: 150
    }
  ];

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <p>Verificando sessão...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen h-screen bg-linear-to-br from-slate-900 via-slate-950 to-black text-white flex flex-col">
      <header className="flex flex-col gap-3 border-b border-white/10 bg-slate-900/40 px-6 py-3 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Clientes</h1>
          <p className="text-sm text-slate-300">
            Cadastro de clientes, adicione os clientes que você já trabalhou, edite ou remova os que não deseja mais exibir.
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
        </div>
      </header>
      <div className="p-6 flex flex-col flex-1">
        <div className="bg-slate-800 p-6 rounded-lg flex flex-col flex-1">
          <div className="flex flex-row gap-2 align-center">
            <h2 className="text-xl font-semibold mb-4">Lista de Clientes</h2>
            <button
              type="button"
              onClick={handleCreate}
              className="rounded-md bg-green-600 px-4 py-1 h-8  text-sm font-semibold text-white transition hover:bg-green-500"
            >
              Novo
            </button>
          </div>
          {loading && <p>Carregando...</p>}
          {!loading && <div className="flex flex-col flex-1">
            <DataGrid
              rows={parties}
              columns={columns}
              className="rdg-dark"
              style={{ height: '100%' }}
            />
          </div>}
        </div>
      </div>
    </main>
  );
}
