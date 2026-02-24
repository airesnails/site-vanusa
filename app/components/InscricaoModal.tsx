"use client";

import { useState } from "react";

type ModalStep = "form" | "payment";

export default function InscricaoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<ModalStep>("form");
  const [nome, setNome] = useState("");
  const [ddi, setDdi] = useState("+1");
  const [telefone, setTelefone] = useState("");
  const [sending, setSending] = useState(false);

  function maskPhone(value: string, selectedDdi: string) {
    const digits = value.replace(/\D/g, "");
    if (selectedDdi === "+55") {
      // (00) 00000-0000
      return digits
        .slice(0, 11)
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    // +1: (000) 000-0000
    return digits
      .slice(0, 10)
      .replace(/(\d{3})(\d)/, "($1) $2")
      .replace(/(\d{3})(\d)/, "$1-$2");
  }

  function resetAndClose() {
    setStep("form");
    setNome("");
    setDdi("+1");
    setTelefone("");
    setSending(false);
    onClose();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !telefone.trim()) return;

    setSending(true);

    // Enviar lead silenciosamente — sem confirmação de envio
    fetch("/api/send-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome: nome.trim(), telefone: `${ddi} ${telefone.trim()}` }),
    }).catch(() => {
      // silencioso
    });

    // Avança direto para os botões de pagamento
    setSending(false);
    setStep("payment");
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
    >
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* Botão fechar */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 text-2xl leading-none text-brown-light hover:text-brown-dark transition-colors"
          aria-label="Fechar"
        >
          ✕
        </button>

        {step === "form" && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h3 className="font-heading text-2xl font-bold text-brown-dark text-center">
              Quero me inscrever
            </h3>
            <p className="font-body text-sm text-brown text-center">
              Preencha seus dados para continuar
            </p>

            <div>
              <label
                htmlFor="nome"
                className="mb-1 block font-body text-sm font-semibold text-brown-dark"
              >
                Nome
              </label>
              <input
                id="nome"
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                className="w-full rounded-lg border-2 border-beige-dark bg-beige-light px-4 py-3 font-body text-base text-brown-dark outline-none transition-colors placeholder:text-brown-light/60 focus:border-gold"
              />
            </div>

            <div>
              <label
                htmlFor="telefone"
                className="mb-1 block font-body text-sm font-semibold text-brown-dark"
              >
                Telefone
              </label>
              <div className="flex gap-2">
                <select
                  value={ddi}
                  onChange={(e) => {
                    setDdi(e.target.value);
                    setTelefone("");
                  }}
                  className="w-24 shrink-0 rounded-lg border-2 border-beige-dark bg-beige-light px-2 py-3 font-body text-base text-brown-dark outline-none transition-colors focus:border-gold appearance-none text-center"
                >
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+55">🇧🇷 +55</option>
                </select>
                <input
                  id="telefone"
                  type="tel"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(maskPhone(e.target.value, ddi))}
                  placeholder={ddi === "+55" ? "(00) 00000-0000" : "(000) 000-0000"}
                  className="w-full rounded-lg border-2 border-beige-dark bg-beige-light px-4 py-3 font-body text-base text-brown-dark outline-none transition-colors placeholder:text-brown-light/60 focus:border-gold"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-2 w-full rounded-full bg-gold px-8 py-4 font-body text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl disabled:opacity-60"
            >
              {sending ? "Enviando..." : "Avançar"}
            </button>
          </form>
        )}

        {step === "payment" && (
          <div className="flex flex-col gap-5 text-center">
            <h3 className="font-heading text-2xl font-bold text-brown-dark">
              Escolha a forma de pagamento
            </h3>
            <p className="font-body text-sm text-brown">
              Selecione a opção que preferir:
            </p>

            <a
              href="https://buy.stripe.com/14A5kD4m11d23kT26F97G02"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-gold px-8 py-4 font-body text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl"
            >
              Pagamento à vista ou crédito
            </a>

            <a
              href="https://wa.me/18623009242"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border-2 border-gold bg-white px-8 py-4 font-body text-base font-semibold uppercase tracking-wider text-gold-dark shadow-lg transition-all hover:bg-beige-light hover:shadow-xl"
            >
              Pagamento facilitado
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
