export interface VehicleItem {
  name: string;
  application: string;
  icon: string;
  capacity?: string;
  material: string;
}

export const fleet: VehicleItem[] = [
  {
    name: "Caminhão Roll-On Roll-Off",
    application: "Cargas a granel e caçambas estacionárias",
    icon: "fa-solid fa-truck-ramp-box",
    capacity: "Caçambas de 15m³ a 30m³",
    material: "Resíduos industriais sólidos e entulho",
  },
  {
    name: "Roll-On Roll-Off Romeu e Julieta",
    application: "Alta volumetria em rotas dedicadas",
    icon: "fa-solid fa-truck-moving",
    capacity: "Conjunto articulado duplo",
    material: "Grandes lotes de resíduos sólidos",
  },
  {
    name: "Caminhão Tanque",
    application: "Efluentes industriais e chorume",
    icon: "fa-solid fa-truck-droplet",
    capacity: "Tanque estanque pressurizado",
    material: "Líquidos não corrosivos e efluentes de processo",
  },
  {
    name: "Equipamento Auto Vácuo",
    application: "Sucção técnica de reservatórios e caixas",
    icon: "fa-solid fa-arrow-down-up-across-line",
    capacity: "Bomba de alto vácuo",
    material: "Lamas, lodos e resíduos semissólidos",
  },
  {
    name: "Caminhão Plataforma",
    application: "Cargas fracionadas e tambores homologados",
    icon: "fa-solid fa-layer-group",
    capacity: "Até 40 tambores de 200L",
    material: "Resíduos perigosos Classe I paletizados",
  },
  {
    name: "Caminhão com Hidrojateamento",
    application: "Desobstrução e limpeza em alta pressão",
    icon: "fa-solid fa-water",
    capacity: "Bicos rotativos de alta pressão",
    material: "Redes, caixas de gordura e fossas sépticas",
  },
];
