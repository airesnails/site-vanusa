import Image from "next/image";
import BotaoInscricao from "./components/BotaoInscricao";
import TestimonialsLightbox from "./components/TestimonialsLightbox";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-brown-dark">
        {/* Bandeira de fundo — full width */}
        <div className="absolute inset-0">
          <Image
            src="/bandeira-hero.webp"
            alt="Bandeira de fundo"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Gradiente de transição — full width, começa abaixo da metade da foto */}
        <div className="absolute inset-x-0 bottom-0 z-[15] top-[35%] bg-gradient-to-b from-transparent via-cream to-cream" />

        {/* Conteúdo centralizado */}
        <div className="relative mx-auto flex max-w-[1170px] flex-col items-center px-5 sm:px-8">
        
          {/* Foto Hero — centralizada, grande, z-10 para ficar acima do gradiente */}
          <div className="relative z-10 mt-6 w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/vanusa/hero.png"
                alt="Vanuza Aires"
                fill
                className="object-contain object-bottom z-10"
                priority
              />
            </div>
          </div>

          {/* Título — sobre o gradiente */}
          <div className="relative z-10 mt-0 pb-10 z-[16] text-center sm:pb-16">
            <h1 className="font-heading text-4xl leading-tight font-light tracking-wide text-black sm:text-5xl md:text-6xl lg:text-8xl">
              REFINAMENTO
              <br />
              DE TÉCNICA
            </h1>
            <p className="mt-2 font-heading text-lg italic text-black/70 sm:text-xl md:text-2xl">
              by Vanuza Aires
            </p>
            
            {/* Frase descritiva */}
            <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-brown-dark sm:text-lg md:text-xl">
              Refine sua técnica, ganhe agilidade e entregue resultados impecáveis que valorizam seu trabalho.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#investimento"
                className="inline-block rounded-full bg-gold px-10 py-4 font-body text-base font-bold uppercase tracking-wider text-white shadow-xl transition-all hover:bg-gold-dark hover:shadow-2xl hover:scale-105 sm:px-12 sm:py-5 sm:text-lg"
              >
                ✨ Quero Garantir Minha Vaga
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TURMA PRESENCIAL ===== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1170px] px-5 py-16 sm:px-8 md:py-20">
          <div className="mb-8 inline-block rounded-md bg-gold px-6 py-2 max-sm:mx-auto max-sm:block max-sm:text-center">
            <h2 className="font-heading text-xl font-bold tracking-wider text-white sm:text-2xl">
              TURMA - PRESENCIAL
            </h2>
          </div>

          <p className="mb-6 font-heading text-xl font-semibold text-brown-dark sm:text-2xl">
            Alto nível de acabamento. Mais segurança. Mais lucro.
          </p>

          <div className="max-w-3xl space-y-4 font-body text-base leading-relaxed text-brown sm:text-lg">
            <p>
              Este é um curso presencial exclusivo, criado especialmente para
              profissionais que já atuam na área de unhas e desejam refinar a
              técnica, elevar o padrão de atendimento e entregar um resultado
              impecável às clientes, com mais agilidade e retorno financeiro.
            </p>
            <p>
              Um dia inteiro de treinamento intensivo, focado nas técnicas que
              mais vendem no mercado e que podem ser aplicadas rapidamente no dia
              a dia do salão.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PARA QUEM É ESTE CURSO ===== */}
      <section className="bg-beige">
        <div className="relative mx-auto max-w-[1170px] px-5 py-16 sm:px-8 md:py-20">
          {/* Mobile: título + foto lado a lado */}
          <div className="mb-6 flex items-center justify-between gap-4 md:hidden">
            <h2 className="font-heading text-3xl font-bold tracking-wide text-gold-dark">
              PARA QUEM É ESTE CURSO
            </h2>
            <div className="relative w-24 shrink-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-full bg-beige-dark/20">
                <Image
                  src="/vanusa/para-quem.webp"
                  alt="Vanuza Aires"
                  fill
                  className="object-cover object-top z-10"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            {/* Foto — desktop: absolute bottom */}
            <div className="relative hidden md:block md:absolute md:bottom-0 md:left-0 md:w-[320px] lg:w-[380px]">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/vanusa/para-quem.webp"
                  alt="Vanuza Aires"
                  fill
                  className="object-contain object-bottom z-10"
                  priority
                />
              </div>
            </div>

            {/* Spacer invisível para manter o espaço da foto */}
            <div className="hidden shrink-0 md:block md:w-[320px] lg:w-[380px]" />

            {/* Conteúdo */}
            <div className="flex-1">
              <h2 className="mb-6 hidden font-heading text-3xl font-bold tracking-wide text-gold-dark sm:text-4xl md:block">
                PARA QUEM É ESTE CURSO
              </h2>
              <ul className="mb-10 space-y-3 font-body text-base text-brown sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Nail designers e manicures que já trabalham na área;
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Profissionais que desejam melhorar acabamento e estrutura;
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Quem quer aumentar o valor do serviço e fidelizar clientes;
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Quem busca mais segurança técnica e agilidade no atendimento.
                </li>
              </ul>

              <div className="rounded-xl border-2 border-gold bg-white p-6 shadow-sm sm:p-8">
                <p className="font-heading text-lg font-bold uppercase tracking-wide text-brown-dark sm:text-xl">
                  Este não é um curso iniciante.
                </p>
                <p className="mt-2 font-heading text-lg font-bold uppercase tracking-wide text-gold-dark sm:text-xl">
                  É um curso de refinamento técnico e evolução profissional.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <a
                  href="#investimento"
                  className="inline-block rounded-full bg-gold px-8 py-4 font-body text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl hover:scale-105 sm:text-lg"
                >
                  Ver Investimento →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== O QUE VOCÊ VAI APRENDER ===== */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1170px] px-5 py-16 sm:px-8 md:py-20">
          <h2 className="mb-2 font-heading text-3xl font-light tracking-widest text-beige-dark sm:text-5xl md:text-7xl lg:text-8xl">
            APRENDER
          </h2>
          <h3 className="mb-8 font-heading text-2xl font-semibold italic text-gold-dark sm:text-3xl">
            O que você vai aprender
          </h3>

          <div className="mb-8 rounded-xl bg-beige p-6 sm:p-8">
            <p className="mb-4 font-body text-base italic text-brown sm:text-lg">
              Durante o treinamento, você aprenderá técnicas express, práticas e
              altamente lucrativas:
            </p>
            <ul className="space-y-3 font-body text-base text-brown-dark sm:text-lg">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                Acabamento profissional de alto padrão
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                <span>
                  Cutícula combinada<br />
                  <strong>(tesoura + broca)</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                Moldagem com Molde F1
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                Alongamento com Fibra de Vidro
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                Estrutura correta para unhas duráveis e elegantes
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                Técnicas que mais saem no salão e geram maior faturamento
              </li>
            </ul>
          </div>

          <p className="font-heading text-lg italic text-brown sm:text-xl">
            Tudo pensado para que você aprenda, treine e consiga aplicar
            rapidamente no seu trabalho.
          </p>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="#investimento"
              className="inline-block rounded-full bg-gradient-to-r from-gold-dark to-gold px-10 py-5 font-body text-base font-bold uppercase tracking-wider text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105 sm:text-lg"
            >
              ✨ Quero Garantir Minha Vaga
            </a>
          </div>
        </div>
      </section>

      {/* ===== O QUE DIZEM NOSSAS ALUNAS ===== */}
      <section className="bg-beige">
        <div className="mx-auto max-w-[1170px] px-5 py-16 sm:px-8 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="mb-2 font-heading text-3xl font-light tracking-wide text-beige-dark sm:text-4xl md:text-5xl lg:text-6xl">
              DEPOIMENTOS
            </h2>
            <h3 className="font-heading text-xl font-semibold italic text-gold-dark sm:text-2xl">
              O que dizem nossas alunas
            </h3>
          </div>

          <TestimonialsLightbox />

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="mb-6 font-heading text-base italic text-brown sm:text-lg">
              Faça parte da próxima turma de profissionais de sucesso
            </p>
            <a
              href="#investimento"
              className="inline-block rounded-full bg-gold px-8 py-4 font-body text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl hover:scale-105 sm:text-lg"
            >
              Quero Me Inscrever Agora
            </a>
          </div>
        </div>
      </section>

      {/* ===== COMO FUNCIONA O CURSO ===== */}
      <section className="overflow-hidden bg-beige">
        <div className="relative mx-auto max-w-[1170px] px-5 py-16 sm:px-8 md:py-20">
          {/* Mobile: título + foto lado a lado */}
          <div className="mb-6 flex items-center justify-between gap-4 md:hidden">
            <div className="inline-block border-b-2 border-gold pb-1">
              <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-brown-dark">
                Como Funciona o Curso
              </h2>
            </div>
            <div className="relative w-24 shrink-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-full bg-beige-dark/20">
                <Image
                  src="/vanusa/como-funciona.webp"
                  alt="Vanuza Aires"
                  fill
                  className="object-cover object-top z-10"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            {/* Conteúdo */}
            <div className="flex-1">
              <div className="mb-6 hidden border-b-2 border-gold pb-1 md:inline-block">
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-brown-dark sm:text-3xl">
                  Como Funciona o Curso
                </h2>
              </div>
              <ul className="space-y-3 font-body text-base text-brown sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Curso 100% presencial
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Duração: 1 dia inteiro de treinamento intensivo
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Turma com vagas limitadas
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Todo o material incluso
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Certificado de conclusão
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Links de Produtos
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Assessoria individual por 1 mês pós curso.
                </li>
              </ul>

              {/* Experiência Exclusiva */}
              <div className="mt-10">
                <div className="mb-4 inline-block border-b-2 border-gold pb-1">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-brown-dark sm:text-2xl">
                    Experiência Exclusiva para as Alunas
                  </h3>
                </div>
                <p className="mb-4 font-body text-base text-brown sm:text-lg">
                  Além do conteúdo técnico, você viverá uma experiência completa:
                </p>
                <ul className="space-y-3 font-body text-base text-brown sm:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    Café da manhã incluso
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    Presente exclusivo para as alunas
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    Fotos profissionais durante o curso
                  </li>
                </ul>
              </div>

              {/* Bônus */}
              <div className="mt-8 space-y-3">
                <div className="inline-block rounded-md bg-gold px-5 py-2">
                  <p className="font-heading text-base font-bold uppercase tracking-wider text-white sm:text-lg">
                    Bônus: 1 foto individual com fotógrafo
                  </p>
                </div>
                <div className="inline-block rounded-md bg-gold px-5 py-2">
                  <p className="font-heading text-base font-bold uppercase tracking-wider text-white sm:text-lg">
                    Ambiente profissional e acolhedor
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="#investimento"
                  className="inline-block w-full rounded-full border-2 border-gold bg-white px-8 py-4 text-center font-body text-base font-semibold uppercase tracking-wider text-gold-dark shadow-lg transition-all hover:bg-beige-light hover:shadow-xl hover:scale-105 sm:text-lg"
                >
                  Conferir Valores →
                </a>
              </div>
            </div>

            {/* Foto — desktop only: absolute bottom */}
            <div className="relative hidden md:block md:absolute md:bottom-0 md:right-0 md:w-[320px] lg:w-[500px]">
              <div className="relative aspect-[2/4] w-full">
                <Image
                  src="/vanusa/como-funciona.webp"
                  alt="Vanuza Aires"
                  fill
                  className="object-contain object-bottom z-10"
                />
              </div>
            </div>

            {/* Spacer invisível para manter o espaço da foto */}
            <div className="hidden shrink-0 md:block md:w-[320px] lg:w-[380px]" />
          </div>
        </div>
      </section>

      {/* ===== LOCAL DO CURSO / INVESTIMENTO / IMPORTANTE ===== */}
      <section id="investimento" className="relative overflow-hidden bg-cream">
        <div className="absolute -top-10 right-0 font-heading text-[10rem] font-light leading-none tracking-[0.3em] text-beige-dark/30 sm:text-[14rem] lg:text-[18rem]">
          AIRES
        </div>
        <div className="relative mx-auto max-w-[1170px] px-5 py-16 sm:px-8 md:py-20">
          {/* Barra dourada decorativa */}
          <div className="mb-10 h-1.5 w-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />

          <div className="mx-auto flex max-w-2xl flex-col gap-8">
            {/* Local do Curso */}
            <div className="rounded-xl border-2 border-gold bg-white p-6 text-center shadow-sm sm:p-8">
              <div className="mb-4 inline-block border-b-2 border-gold px-4 pb-1">
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-brown-dark">
                  Local do Curso
                </h2>
              </div>
              <div className="space-y-1 font-body text-base text-brown sm:text-lg">
                <p className="font-semibold italic">Aires Nails and Academy</p>
                <p>Harrison - New Jersey</p>
                <p className="mt-3 text-sm font-bold uppercase tracking-wide text-brown-dark">
                  Endereço completo informado após a confirmação da vaga
                </p>
              </div>
            </div>

            {/* Investimento */}
            <div className="rounded-xl border-2 border-gold bg-white p-6 text-center shadow-sm sm:p-8">
              <div className="mb-4 inline-block border-b-2 border-gold px-4 pb-1">
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-brown-dark">
                  Investimento
                </h2>
              </div>
              <div className="space-y-2 font-body text-base text-brown sm:text-lg">
                <p>
                  <span className="text-2xl font-bold text-gold-dark">
                    US$799,00
                  </span>{" "}
                  à vista{" "}
                  <span className="font-semibold">(cash ou cartão)</span>
                </p>
                <p className="font-semibold text-brown-light">OU</p>
                <div>
                  <p className="font-semibold">Plano facilitado:</p>
                  <p>• US$ 150 por semana</p>
                  <p>X6 = $900</p>
                </div>
              </div>
              <div className="mt-6">
                <BotaoInscricao className="inline-block rounded-full bg-gold px-10 py-4 font-body text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl cursor-pointer" />
              </div>
            </div>

            {/* Importante */}
            <div className="rounded-xl border-2 border-gold bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 inline-block border-b-2 border-gold px-4 pb-1">
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-brown-dark">
                  Importante
                </h2>
              </div>
              <ul className="space-y-3 font-body text-base text-brown sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  O curso deve estar 100% quitado até 1 semana antes da data do
                  curso
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  A primeira parcela não é reembolsável em caso de desistência
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOTO + POLÍTICA DE INSCRIÇÃO ===== */}
      <section className="overflow-hidden bg-beige">
        <div className="relative mx-auto max-w-[1170px] px-5 py-16 sm:px-8 md:py-20">
          {/* Mobile: título + foto lado a lado */}
          <div className="mb-6 flex items-center justify-between gap-4 md:hidden">
            <div>
              <h2 className="mb-1 font-heading text-2xl font-light tracking-wide text-beige-dark sm:text-3xl sm:tracking-widest">
                POLÍTICA
              </h2>
              <div className="inline-block border-b-2 border-gold pb-1">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-brown-dark">
                  Política de Inscrição
                </h3>
              </div>
            </div>
            <div className="relative w-24 shrink-0">
              <div className="relative w-full overflow-hidden rounded-full bg-beige-dark/20">
                <Image
                  src="/vanusa/politica.webp"
                  alt="Vanuza Aires"
                  fill
                  className="object-cover object-top z-10"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
            {/* Foto — desktop only: absolute bottom */}
            <div className="relative hidden md:block md:absolute md:top-0 md:bottom-0 md:left-20 md:w-[340px] lg:w-[400px]">
              <div className="relative h-full w-full">
                <Image
                  src="/vanusa/politica.webp"
                  alt="Vanuza Aires"
                  fill
                  className="object-contain object-center z-10"
                />
              </div>
            </div>

            {/* Spacer invisível para manter o espaço da foto */}
            <div className="hidden shrink-0 md:block md:w-[340px] lg:w-[400px]" />

            {/* Política */}
            <div className="flex-1">
              <h2 className="mb-2 hidden font-heading text-5xl font-light tracking-widest text-beige-dark sm:text-7xl md:block">
                POLÍTICA
              </h2>
              <div className="mb-6 hidden border-b-2 border-gold pb-1 md:inline-block">
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-brown-dark sm:text-2xl">
                  Política de Inscrição
                </h3>
              </div>
              <ul className="space-y-5 font-body text-base text-brown sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  A vaga é garantida somente após o pagamento da primeira parcela
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Em caso de desistência, nenhum valor pago será reembolsado
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Vagas limitadas para garantir qualidade no aprendizado
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUEM VAI MINISTRAR ===== */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute top-0 left-0 font-heading text-[10rem] max-md:hidden font-light leading-none tracking-widest text-beige-dark/30 sm:text-[14rem] lg:text-[18rem]">
          MINISTRAR
        </div>
        <div className="relative mx-auto max-w-[1170px] px-5 max-md:py-16 sm:px-8 md:pt-30">
          <div className="relative flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            {/* Foto — mobile: circular centralizada (maior); desktop: absolute bottom */}
            <div className="relative mx-auto w-32 shrink-0 md:absolute md:bottom-0 md:left-0 md:mx-0 md:w-[340px] lg:w-[400px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-full bg-beige-dark/20 md:aspect-[3/4] md:overflow-visible md:rounded-none md:bg-transparent">
                <Image
                  src="/vanusa/quem-vai.webp"
                  alt="Vanuza Aires"
                  fill
                  className="object-cover md:object-contain object-top md:object-bottom z-10"
                />
              </div>
            </div>

            {/* Spacer invisível para manter o espaço da foto */}
            <div className="hidden shrink-0 md:block md:w-[340px] lg:w-[400px]" />

            {/* Conteúdo */}
            <div className="flex-1">
              <div className="mb-6 inline-block rounded-md bg-gold/20 px-5 py-2">
                <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-brown-dark sm:text-2xl">
                  Quem vai Ministrar o Curso
                </h2>
              </div>
              <p className="mb-8 max-w-lg font-body text-base leading-relaxed text-brown sm:text-lg">
                O curso será ministrado por Vanuza Aires, com o apoio de sua
                equipe profissional — todos treinados diretamente por ela,
                garantindo padrão, qualidade e acompanhamento durante todo o
                treinamento.
              </p>

              <div className="mb-4 inline-block border-b-2 border-gold pb-1">
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-brown-dark sm:text-2xl">
                  Por que Participar
                </h3>
              </div>
              <ul className="space-y-3 font-body text-base text-brown sm:text-lg md:pb-12">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Refinar sua técnica
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Aumentar seu valor no mercado
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Entregar mais qualidade às clientes
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Trabalhar com mais segurança e agilidade
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  Ter mais retorno financeiro com o seu talento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSCRIÇÕES E INFORMAÇÕES ===== */}
      <section className="overflow-hidden bg-beige">
        <div className="relative mx-auto max-w-[1170px] px-5 py-16 sm:px-8 md:py-54">
          {/* Mobile: título + foto lado a lado */}
          <div className="mb-6 flex items-center justify-between gap-4 md:hidden">
            <div className="inline-block border-b-2 border-gold pb-1">
              <h2 className="font-heading text-xl font-bold uppercase tracking-wide text-brown-dark">
                Inscrições e Informações:
              </h2>
            </div>
            <div className="relative w-24 shrink-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-full bg-beige-dark/20">
                <Image
                  src="/vanusa/inscricoes.webp"
                  alt="Vanuza Aires"
                  fill
                  className="object-cover object-top z-10"
                />
              </div>
            </div>
          </div>

          {/* Mobile: conteúdo abaixo */}
          <div className="md:hidden">
            <p className="mb-6 font-body text-base text-brown">
              Entre em contato para garantir sua vaga.
            </p>
            <BotaoInscricao className="inline-block w-full text-center rounded-full bg-gold px-10 py-4 font-body text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl cursor-pointer" />
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex md:flex-row md:gap-16">
            {/* CTA — lado esquerdo */}
            <div className="flex-1 text-left">
              <div className="mb-4 inline-block border-b-2 border-gold pb-1">
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-brown-dark sm:text-3xl">
                  Inscrições e Informações:
                </h2>
              </div>
              <p className="mb-8 font-body text-base text-brown sm:text-lg">
                Entre em contato para garantir sua vaga.
              </p>
              <BotaoInscricao className="inline-block rounded-full bg-gold px-10 py-4 font-body text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-gold-dark hover:shadow-xl sm:text-lg cursor-pointer" />
            </div>

            {/* Spacer invisível para manter o espaço da foto */}
            <div className="shrink-0 md:w-[380px] lg:w-[500px]" />

            {/* Foto — desktop only: absolute bottom right */}
            <div className="absolute bottom-0 right-5 w-[380px] lg:w-[500px]">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/vanusa/inscricoes.webp"
                  alt="Vanuza Aires"
                  fill
                  className="object-contain object-bottom z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER / VAGAS LIMITADAS ===== */}
      <section className="bg-gradient-to-b from-brown-dark to-brown">
        <div className="mx-auto max-w-[1170px] px-5 py-16 text-center sm:px-8 md:py-24">
          <h2 className="font-heading text-4xl font-light tracking-wide text-gold-lighter sm:text-5xl lg:text-6xl">
            Vagas limitadas.
          </h2>
          <h2 className="mt-2 font-heading text-4xl font-light tracking-wide text-gold-lighter sm:text-5xl lg:text-6xl">
            Turma exclusiva.
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="font-heading text-xl text-gold-lighter/40 sm:text-3xl"
              >
                ✦
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
