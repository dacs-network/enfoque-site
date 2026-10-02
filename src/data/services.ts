export interface ServiceItem {
  id: string;
  title: string;
  category: "operacional" | "regulatorio";
  icon: string;
  image: string;
  description: string;
  scope: string[];
}

export const services: ServiceItem[] = [
  {
    id: "transporte-residuos",
    title: "Coleta e Transporte de Resíduos",
    category: "operacional",
    icon: "fa-solid fa-truck-moving",
    image: "/img/servico-transporte-residuo.webp",
    description:
      "Transporte com frota própria e destinação final em locais homologados pela CETESB.",
    scope: [
      "Resíduos Classe I (Perigosos) e Classe II (Não perigosos)",
      "Coleta e transporte de efluentes líquidos industriais",
      "Atendimento a contingências com produtos químicos",
      "Caçambas de 15m³ para descarte industrial e construção civil",
    ],
  },
  {
    id: "consultoria-licenciamento",
    title: "Consultoria e Licenciamento",
    category: "regulatorio",
    icon: "fa-solid fa-file-contract",
    image: "/img/servico-consultoria-ambiental.webp",
    description:
      "Regularização técnica e jurídica perante CETESB, IBAMA e DAEE.",
    scope: [
      "Licenças Prévia (LP), Instalação (LI), Operação (LO) e CDL na CETESB",
      "Solicitação e renovação de CADRI",
      "Cadastro Técnico Federal (CTF) e autorizações no IBAMA",
      "Outorgas de uso e interferência hídrica no DAEE",
    ],
  },
  {
    id: "gerenciamento-residuos",
    title: "Gerenciamento de Resíduos",
    category: "operacional",
    icon: "fa-solid fa-boxes-stacked",
    image: "/img/slides/slide3.webp",
    description:
      "Gestão de fluxo na fonte geradora com controle de manifestos e destinação.",
    scope: [
      "Diagnóstico e classificação conforme normas ABNT",
      "Implantação de procedimentos de coleta e segregação",
      "Rastreabilidade documental completa para auditorias",
    ],
  },
  {
    id: "normas-manuais",
    title: "Planos, Normas e Laudos",
    category: "regulatorio",
    icon: "fa-solid fa-book-bookmark",
    image: "/img/servico-consultoria-ambiental.webp",
    description:
      "Elaboração de estudos técnicos e documentação operacional para conformidade legal.",
    scope: [
      "Plano de Gerenciamento de Resíduos Sólidos (PGRS)",
      "Documentação para transporte rodoviário de produtos perigosos",
      "Pareceres técnicos e estudos de viabilidade ambiental",
    ],
  },
];
