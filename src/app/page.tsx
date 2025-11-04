import {
  Bell,
  Calendar,
  Circle,
  Command,
  Github,
  LayoutDashboard,
  LifeBuoy,
  ListChecks,
  LogOut,
  LucideIcon,
  MessageSquare,
  Settings,
  Sparkles,
  SquareStack,
  Timer,
  Users,
} from "lucide-react";

type NavItem = {
  label: string;
  icon: LucideIcon;
  badge?: string;
  active?: boolean;
};

const mainNavigation: NavItem[] = [
  { label: "Visão Geral", icon: LayoutDashboard, active: true },
  { label: "Timeline", icon: Calendar },
  { label: "Projetos", icon: SquareStack, badge: "12" },
  { label: "Issues", icon: ListChecks, badge: "34" },
  { label: "Roadmap", icon: Timer },
  { label: "Relatórios", icon: MessageSquare },
];

const secondaryNavigation: NavItem[] = [
  { label: "Notificações", icon: Bell, badge: "8" },
  { label: "Workspace", icon: Users },
  { label: "Configurações", icon: Settings },
  { label: "Suporte", icon: LifeBuoy },
];

const statusColumns = [
  {
    title: "Exploração",
    accent: "from-violet-500/80 to-indigo-400/40",
    tickets: [
      {
        id: "LNR-204",
        title: "Descobrir novo fluxo de criação de tarefas",
        owner: "Ana",
        tag: "Pesquisa",
        due: "Hoje",
      },
      {
        id: "LNR-198",
        title: "Mapear integrações com apps de terceiros",
        owner: "Júlio",
        tag: "Descoberta",
        due: "Amanhã",
      },
    ],
  },
  {
    title: "Em Progresso",
    accent: "from-blue-500/80 to-cyan-400/30",
    tickets: [
      {
        id: "LNR-187",
        title: "Console de comandos acionado com ⌘K",
        owner: "Carla",
        tag: "Frontend",
        due: "Hoje",
      },
      {
        id: "LNR-182",
        title: "Sincronização em tempo real com WebSockets",
        owner: "Marta",
        tag: "Realtime",
        due: "Sex",
      },
      {
        id: "LNR-179",
        title: "Aprimorar sistema de design interno",
        owner: "Rafa",
        tag: "Design System",
        due: "2 Nov",
      },
    ],
  },
  {
    title: "Revisão",
    accent: "from-emerald-500/80 to-lime-400/30",
    tickets: [
      {
        id: "LNR-169",
        title: "Testes de regressão no fluxo de billing",
        owner: "Paulo",
        tag: "QA",
        due: "Hoje",
      },
      {
        id: "LNR-166",
        title: "Documentação DevRel com casos reais",
        owner: "Jéssica",
        tag: "Docs",
        due: "Seg",
      },
    ],
  },
];

const quickUpdates = [
  {
    title: "Sprint 14",
    description: "56% concluído • 12 issues abertas",
  },
  {
    title: "Tempo médio de ciclo",
    description: "2.4 dias (↓ 18% vs. anterior)",
  },
  {
    title: "Satisfação do time",
    description: "93% de aprovação na última enquete",
  },
];

const recentActivity = [
  {
    author: "Ana Souza",
    action: "moveu",
    target: "LNR-187 Console de comandos",
    time: "há 12 min",
  },
  {
    author: "Carla Santos",
    action: "comentou em",
    target: "LNR-179 Design System",
    time: "há 26 min",
  },
  {
    author: "Marta Lima",
    action: "aprovou PR para",
    target: "LNR-182 Realtime Sync",
    time: "há 1h",
  },
  {
    author: "Equipe CS",
    action: "sinalizou",
    target: "Novo feedback de clientes enterprise",
    time: "há 2h",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-transparent">
      <aside className="relative hidden min-h-screen w-[268px] border-r border-white/5 bg-black/40 px-5 py-6 backdrop-blur-xl lg:flex lg:flex-col">
        <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 p-4 text-sm font-medium shadow-sm shadow-black/50">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 text-white shadow-lg shadow-indigo-500/30">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-400">
              Plataforma
            </p>
            <p className="text-base font-semibold text-slate-100">Aurora Labs</p>
          </div>
        </div>

        <nav className="mt-8 space-y-6 text-sm text-slate-300">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Navegação
            </p>
            <ul className="space-y-1.5">
              {mainNavigation.map((item) => (
                <li key={item.label}>
                  <button
                    className={`group flex w-full items-center justify-between rounded-xl border border-transparent px-3.5 py-2.5 transition-all ${
                      item.active
                        ? "border-white/10 bg-white/10 text-white shadow-inner shadow-indigo-500/10 backdrop-blur"
                        : "hover:border-white/10 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <item.icon
                        size={16}
                        className={`transition-transform ${
                          item.active ? "text-indigo-300" : "text-slate-500 group-hover:text-indigo-200"
                        }`}
                      />
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-300">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Operação
            </p>
            <ul className="space-y-1.5">
              {secondaryNavigation.map((item) => (
                <li key={item.label}>
                  <button className="group flex w-full items-center justify-between rounded-xl border border-transparent px-3.5 py-2.5 text-slate-400 transition-all hover:border-white/10 hover:bg-white/5 hover:text-white">
                    <span className="flex items-center gap-3">
                      <item.icon size={16} className="text-slate-500 group-hover:text-indigo-200" />
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-300">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="mt-auto space-y-4">
          <div className="rounded-xl border border-white/10 bg-black/40 p-5 backdrop-blur">
            <p className="text-sm font-medium text-white">Workflows IA</p>
            <p className="mt-2 text-xs text-slate-400">
              Crie automatizações assistidas por IA para acelerar o seu time.
            </p>
            <button className="mt-4 flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02]">
              <Sparkles size={14} />
              Explorar
            </button>
          </div>
          <button className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10">
            <span className="flex items-center gap-3">
              <Circle size={14} className="text-green-400" />
              Online • Você
            </span>
            <LogOut size={16} className="text-slate-500" />
          </button>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-10 flex flex-wrap items-center gap-4 border-b border-white/10 bg-black/30 px-6 py-4 backdrop-blur-xl">
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-300 shadow-inner shadow-indigo-500/10">
            <Command size={15} className="text-slate-500" />
            <input
              type="search"
              placeholder="Buscar tarefas, pessoas ou comandos..."
              className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
            />
            <kbd className="rounded-md border border-white/10 px-2 py-1 text-[10px] uppercase text-slate-400">
              ⌘K
            </kbd>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-slate-300 transition hover:border-indigo-400/40 hover:text-white">
            <Bell size={18} />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-slate-300 transition hover:border-indigo-400/40 hover:text-white">
            <Github size={18} />
          </button>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/60 bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 text-white shadow-md shadow-indigo-500/40">
            AS
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 py-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white">
                Painel de Controle
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                Acompanhe o pulso das iniciativas do time em tempo real e destrave ações rápidas.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-indigo-400/30 hover:text-white">
                <Users size={16} />
                Convidar
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-400 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02]">
                <Sparkles size={16} />
                Nova Issue
              </button>
            </div>
          </div>

          <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-black/35 p-6 shadow-xl shadow-black/40 backdrop-blur">
              <header className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    Ciclo Atual
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-white">Sprint 14 · Fluxo Linear</h2>
                </div>
                <button className="rounded-xl border border-white/10 px-3 py-2 text-xs font-medium uppercase text-slate-300 transition hover:border-indigo-400/40 hover:text-white">
                  Ver cronograma
                </button>
              </header>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {quickUpdates.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-indigo-400/40 hover:bg-white/10"
                  >
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-xs text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {statusColumns.map((column) => (
                  <div
                    key={column.title}
                    className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-indigo-500/10 backdrop-blur transition hover:border-indigo-400/40 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-white">{column.title}</p>
                      <div
                        className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${column.accent} shadow`}
                      />
                    </div>
                    <div className="space-y-3">
                      {column.tickets.map((ticket) => (
                        <div
                          key={ticket.id}
                          className="group rounded-xl border border-white/5 bg-black/40 p-4 text-sm shadow-sm shadow-black/20 transition hover:border-indigo-400/30 hover:bg-black/30"
                        >
                          <div className="flex items-center justify-between text-xs text-slate-400">
                            <span className="font-mono text-[10px] tracking-widest text-indigo-200">
                              {ticket.id}
                            </span>
                            <span className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-slate-300">
                              {ticket.tag}
                            </span>
                          </div>
                          <p className="mt-2 text-sm font-medium text-white">{ticket.title}</p>
                          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                            <span>Responsável • {ticket.owner}</span>
                            <span className="text-emerald-300">{ticket.due}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="flex flex-col gap-6">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-xl shadow-black/40 backdrop-blur">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-white">Ritual do Time</h3>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    Diário
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-indigo-400/40 hover:bg-white/10">
                    <span>Check-in do ciclo</span>
                    <span className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar size={14} /> 10h • Hoje
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-indigo-400/40 hover:bg-white/10">
                    <span>Debrief lideranças</span>
                    <span className="flex items-center gap-2 text-xs text-slate-500">
                      <Timer size={14} /> 15h • Amanhã
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-indigo-400/40 hover:bg-white/10">
                    <span>Revisão de roadmap</span>
                    <span className="flex items-center gap-2 text-xs text-slate-500">
                      <Users size={14} /> Quinta
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-xl shadow-black/40 backdrop-blur">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-white">Atividade recente</h3>
                  <button className="text-xs text-slate-400 underline-offset-4 transition hover:text-indigo-300 hover:underline">
                    Ver tudo
                  </button>
                </div>
                <ul className="mt-5 space-y-4 text-sm text-slate-300">
                  {recentActivity.map((activity) => (
                    <li key={activity.target} className="flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-indigo-400" />
                      <div>
                        <p>
                          <span className="text-white">{activity.author}</span>{" "}
                          {activity.action}{" "}
                          <span className="text-indigo-200">{activity.target}</span>
                        </p>
                        <p className="text-xs text-slate-500">{activity.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/40 via-slate-900/80 to-slate-950 p-6 shadow-xl shadow-indigo-500/30 backdrop-blur">
                <h3 className="text-sm font-semibold text-white">Status do workspace</h3>
                <p className="mt-2 text-xs text-slate-200">
                  98% das automações ativas • Nenhuma falha crítica detectada nas últimas 24h.
                </p>
                <div className="mt-5 space-y-3 text-xs text-slate-200">
                  <div className="flex items-center justify-between">
                    <span>Deploys contínuos</span>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.25em]">
                      Saudável
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Latência média</span>
                    <span className="font-mono text-[11px] text-emerald-300">230ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tickets críticos</span>
                    <span className="font-mono text-[11px] text-rose-300">0</span>
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}
