"use client";

import api, { threat } from "./baseApi";
import toast from "react-hot-toast";
import { Parties, PartiesDto } from "@/lib/model";

async function list(): Promise<Parties[] | null> {
  try {
    const resp = await api.get("/admin/parties");
    return resp.data;
  } catch (err) {
    threat(err);
    return null;
  }
}

async function create(data: PartiesDto): Promise<Parties | null> {
  try {
    const resp = await api.post("/admin/parties", data);
    return resp.data;
  } catch (err) {
    threat(err);
    return null;
  }
}

async function get(id: string): Promise<Parties| null> {
  try {
    const resp = await api.get(`/admin/parties/${id}`);
    return resp.data;
  } catch (err) {
    threat(err);
    return null;
  }
}

async function update(id: string, data: PartiesDto): Promise<boolean> {
  try{
    await api.put(`/admin/parties/${id}`, data);
    return true;
  } catch (err) {
    threat(err);
    return false;
  }
}

async function remove(id: string): Promise<boolean> {
  try{
    await api.delete(`/admin/parties/${id}`);
    return true;
  } catch (err) {
    threat(err);
    return false;
  }
}

const PartiesApi = {
  list,
  create,
  get,
  update,
  remove,
}

export default PartiesApi;