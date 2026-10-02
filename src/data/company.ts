export const company = {
  name: "Enfoque Ambiental",
  tagline: "Consultoria, Transporte e Engenharia Ambiental",
  description:
    "Há mais de 10 anos auxiliando empresas a solucionar demandas ambientais através de coleta, transporte especializado de resíduos e consultoria técnica junto aos órgãos reguladores.",
  address: {
    street: "Rua Ruperto Malaman, 380",
    district: "Distrito Industrial",
    city: "Araras",
    state: "SP",
    zip: "13602-104",
  },
  phones: [
    { display: "(19) 3541-7975", raw: "1935417975" },
    { display: "(19) 3321-9111", raw: "1933219111" },
  ],
  email: "contato@enfoqueambiental.com.br",
  licenses: ["CETESB", "IBAMA", "ANTT", "AVCB"],
} as const;
