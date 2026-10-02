export interface CertificationItem {
  id: string;
  name: string;
  authority: string;
  scope: string;
  image: string;
  documents: { title: string; href: string }[];
}

export const certifications: CertificationItem[] = [
  {
    id: "cetesb",
    name: "CETESB",
    authority: "Companhia Ambiental do Estado de São Paulo",
    scope: "Licença de Operação e Certificado de Dispensa de Licença (CDL)",
    image: "/img/logotipos/cetesb.jpg",
    documents: [
      { title: "Certificado de Dispensa (CDL)", href: "/certificados/cetesb/cdl.pdf" },
      { title: "Licença de Operação", href: "/certificados/cetesb/licenca.pdf" },
    ],
  },
  {
    id: "ibama",
    name: "IBAMA",
    authority: "Instituto Brasileiro do Meio Ambiente",
    scope: "Cadastro Técnico Federal (CTF) e Transporte de Produtos Perigosos",
    image: "/img/logotipos/ibama.jpg",
    documents: [
      { title: "Certificado de Regularidade", href: "/certificados/ibama/certificado.pdf" },
      { title: "Autorização Cargas Perigosas", href: "/certificados/ibama/autorizacao.pdf" },
    ],
  },
  {
    id: "antt",
    name: "ANTT",
    authority: "Agência Nacional de Transportes Terrestres",
    scope: "Registro Nacional de Transportadores Rodoviários de Carga (RNTRC)",
    image: "/img/logotipos/antt.jpg",
    documents: [
      { title: "Certificado ANTT", href: "/certificados/antt/antt.pdf" },
      { title: "Comprovante RNTRC", href: "/certificados/antt/rntrc.pdf" },
    ],
  },
  {
    id: "avcb",
    name: "AVCB",
    authority: "Corpo de Bombeiros da PMESP",
    scope: "Auto de Vistoria atestando condições de segurança contra incêndio",
    image: "/img/logotipos/avcb.jpg",
    documents: [
      { title: "Auto de Vistoria (AVCB)", href: "/certificados/avcb/avcb.pdf" },
    ],
  },
  {
    id: "alvara",
    name: "Alvará Municipal",
    authority: "Prefeitura Municipal de Araras",
    scope: "Alvará de Funcionamento e Localização do pátio operacional",
    image: "/img/logotipos/alvara.jpg",
    documents: [
      { title: "Alvará de Funcionamento", href: "/certificados/alvara/alvara.pdf" },
    ],
  },
];
