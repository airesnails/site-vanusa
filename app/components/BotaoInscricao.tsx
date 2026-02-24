"use client";

import { useState } from "react";
import InscricaoModal from "./InscricaoModal";

export default function BotaoInscricao({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          className ||
          "inline-block rounded-full bg-gold px-10 py-4 font-body text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl sm:text-lg"
        }
      >
        Quero me inscrever
      </button>
      <InscricaoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
