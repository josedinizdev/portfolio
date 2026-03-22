"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import type { Parties, PartiesDto } from "@/lib/model";
import PartiesApi from "@/api/partiesApi";

export default function PartyForm() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const isNew = id === '0';

  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [party, setParty] = useState<Parties | null>(null);
  const [formData, setFormData] = useState<PartiesDto>({
    name: "",
    entity_type: "person",
    status: "lead",
    email: "",
    phone: "",
    document: "",
    lead_origin: "",
    observations: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/admin/login");
      return;
    }
    setReady(true);

    if (!isNew) {
      loadParty();
    }
  }, [router, isNew]);

  const loadParty = async () => {
    setLoading(true);
    const party = await PartiesApi.get(id);
    if (party) {
      setParty(party);
      setFormData(party);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!isNew && party) {
      const success = await PartiesApi.update(party.id, formData);
      if (success) {
        router.push("/admin/module/parties");
      }
    } else {
      const newParty = await PartiesApi.create(formData);
      if (newParty) {
        router.push("/admin/module/parties");
      }
    }
    setLoading(false);
  };

  const handleGoBack = () => {
    router.push("/admin/module/parties");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

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
          <h1 className="text-2xl font-semibold">
            {isNew ? "Novo Cliente" : "Editar Cliente"}
          </h1>
          <p className="text-sm text-slate-300">
            {isNew
              ? "Adicione um novo cliente ao sistema"
              : "Edite as informações do cliente selecionado"
            }
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
      <div className="p-6">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-slate-800 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tipo de Entidade</label>
              <select
                value={formData.entity_type}
                onChange={(e) => setFormData({ ...formData, entity_type: e.target.value as 'person' | 'company' })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
              >
                <option value="person">Pessoa</option>
                <option value="company">Empresa</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as PartiesDto['status'] })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
              >
                <option value="lead">Lead</option>
                <option value="qualified">Qualificado</option>
                <option value="unqualified">Não Qualificado</option>
                <option value="contacted">Contactado</option>
                <option value="responded">Respondeu</option>
                <option value="negotiating">Negociando</option>
                <option value="proposal_sent">Proposta Enviada</option>
                <option value="won">Ganho</option>
                <option value="recurring">Recorrente</option>
                <option value="lost">Perdido</option>
                <option value="discarted">Descartado</option>
                <option value="canceled">Cancelado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Telefone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Documento</label>
              <input
                type="text"
                value={formData.document}
                onChange={(e) => setFormData({ ...formData, document: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Origem do Lead</label>
              <input
                type="text"
                value={formData.lead_origin}
                onChange={(e) => setFormData({ ...formData, lead_origin: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Observações</label>
              <textarea
                value={formData.observations}
                onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white"
                rows={3}
              />
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 disabled:opacity-50"
            >
              {loading ? "Salvando..." : isNew ? "Criar Cliente" : "Atualizar Cliente"}
            </button>
            <button
              type="button"
              onClick={handleGoBack}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}