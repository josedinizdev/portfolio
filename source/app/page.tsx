
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="font-semibold tracking-wide">José Diniz</div>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-white/80">
              Início
            </a>
            <a href="#sobre" className="transition hover:text-white/80">
              Sobre
            </a>
            <a href="#projetos" className="transition hover:text-white/80">
              Projetos
            </a>
            <a href="#habilidades" className="transition hover:text-white/80">
              Habilidades
            </a>
            <a href="#contato" className="transition hover:text-white/80">
              Contato
            </a>
          </nav>
          <a
            href="#contato"
            className="hidden rounded-full border border-indigo-400 px-4 py-2 text-sm text-indigo-100 transition hover:bg-indigo-400 hover:text-slate-950 md:inline-flex"
          >
            Vamos conversar
          </a>
        </div>
      </header>

      <section
        id="home"
        className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 text-center"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-indigo-200/70">
            Desenvolvedor Fullstack
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Construindo experiências digitais escaláveis e elegantes.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-200/90">
            Sou um desenvolvedor fullstack apaixonado por resolver problemas com
            software moderno. Adoro construir aplicações com foco em usabilidade,
            performance e segurança.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-full bg-indigo-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-300"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full border border-indigo-400 px-8 py-3 text-sm font-semibold text-indigo-100 transition hover:bg-indigo-400 hover:text-slate-950"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="border-t border-slate-800 px-4 py-16"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-start">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold">Sobre mim</h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200/90">
              Trabalho com desenvolvimento web desde o início da minha jornada e já
              construí aplicações para startups, pequenas empresas e projetos
              pessoais. Meu foco é criar soluções que sejam confiáveis, fáceis de
              manter e agradáveis de usar.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-200/90">
              Tenho experiência com backend em Node.js, bancos de dados relacionais
              e não-relacionais, e frontend moderno com React/Next.js.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
              <h3 className="text-xl font-semibold">Destaques</h3>
              <ul className="mt-5 space-y-3 text-slate-200/90">
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-indigo-400" />
                  Entrega de valor com foco em qualidade e manutenção.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-indigo-400" />
                  APIs seguras e desempenho escalável.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-indigo-400" />
                  UI/UX intuitiva com componentes reutilizáveis.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="border-t border-slate-800 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Projetos recentes</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200/90">
            Alguns trabalhos e aplicações que criei para resolver problemas do mundo
            real — com foco em performance, confiabilidade e experiência do usuário.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold">Dashboard Analítico</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/80">
                Painel responsivo construído com Next.js e gráficos interativos para
                análise de dados em tempo real.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="rounded-full bg-slate-800 px-3 py-1">Next.js</span>
                <span className="rounded-full bg-slate-800 px-3 py-1">TypeScript</span>
                <span className="rounded-full bg-slate-800 px-3 py-1">D3</span>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-xl font-semibold">API RESTful com autenticação</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/80">
                API escalável com autenticação JWT, documentação OpenAPI e testes
                automatizados.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="rounded-full bg-slate-800 px-3 py-1">Node.js</span>
                <span className="rounded-full bg-slate-800 px-3 py-1">Express</span>
                <span className="rounded-full bg-slate-800 px-3 py-1">PostgreSQL</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="habilidades" className="border-t border-slate-800 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Habilidades</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200/90">
            Ferramentas e tecnologias que utilizo para construir aplicações de
            ponta a ponta.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
              { title: "Backend", items: ["Node.js", "NestJS", "Express", "REST / GraphQL"] },
              { title: "Banco de dados", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
              { title: "DevOps", items: ["Docker", "CI/CD", "GitHub Actions", "AWS"] },
            ].map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-slate-800 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Vamos conversar</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200/90">
            Tem um projeto em mente ou quer falar sobre tecnologia? Envie uma mensagem
            e eu respondo o quanto antes.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
              <h3 className="text-lg font-semibold">Contato direto</h3>
              <p className="mt-4 text-sm text-slate-200/80">
                <span className="font-medium text-indigo-200">Email:</span>{" "}
                <a
                  className="text-indigo-200 underline hover:text-indigo-100"
                  href="mailto:contato@josediniz.dev"
                >
                  contato@josediniz.dev
                </a>
              </p>
              <p className="mt-2 text-sm text-slate-200/80">
                <span className="font-medium text-indigo-200">LinkedIn:</span>{" "}
                <a
                  className="text-indigo-200 underline hover:text-indigo-100"
                  href="#"
                >
                  linkedin.com/in/josediniz
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
              <h3 className="text-lg font-semibold">Mensagem</h3>
              <p className="mt-4 text-sm text-slate-200/80">
                Copie o texto abaixo para enviar uma mensagem rápida.
              </p>
              <pre className="mt-4 rounded-xl bg-slate-950/60 p-4 text-sm text-slate-200">
                Olá, José!{"\n"}
                Gostaria de conversar sobre um projeto ou oportunidade.
              </pre>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} José Diniz. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com Next.js · Tailwind CSS · TypeScript
          </p>
        </div>
      </footer>
    </main>
  );
}
