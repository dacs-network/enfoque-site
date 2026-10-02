# Paleta de Cores - Enfoque Ambiental

Documentação exclusiva da paleta de cores extraída dos estilos CSS (`css/estilos.css` e `js/menu/menu.css`) do site arquivado.

---

## 1. Cores Principais / Institucionais

| Amostra | Nome da Cor | Hexadecimal | RGB / RGBA | Onde é aplicada no site |
| :---: | :--- | :--- | :--- | :--- |
| ![#003300](https://via.placeholder.com/20/003300/000000?text=+) | **Verde Floresta Profundo** | `#003300` (`#030`) | `rgb(0, 51, 0)`<br>`rgba(0, 51, 0, 0.9)` | Fundo dos cards principais (`.homeBox`, `.contentBox`), rodapé (`.footer`) e borda inferior do slider de imagens. |
| ![#006400](https://via.placeholder.com/20/006400/000000?text=+) | **Verde Escuro Ação (Darkgreen)** | `#006400` | `rgb(0, 100, 0)` | Fundo dos botões de ação (`.button`) e botões de orçamento (`.buttonOrcamento`). |

---

## 2. Cores do Menu de Navegação (`#cssmenu`)

| Amostra | Nome da Cor | Hexadecimal | RGB | Onde é aplicada no site |
| :---: | :--- | :--- | :--- | :--- |
| ![#98c571](https://via.placeholder.com/20/98c571/000000?text=+) | **Verde Folha Médio** | `#98c571` | `rgb(152, 197, 113)` | Borda externa da barra de menu (`border: 1px solid #98c571`). |
| ![#a6d37e](https://via.placeholder.com/20/a6d37e/000000?text=+) | **Verde Folha Claro** | `#a6d37e` | `rgb(166, 211, 126)` | Base inferior do gradiente de fundo do menu (`linear-gradient(to top)`). |
| ![#c2e0a8](https://via.placeholder.com/20/c2e0a8/000000?text=+) | **Verde Pastel Claro** | `#c2e0a8` | `rgb(194, 224, 168)` | Topo do gradiente de fundo do menu (`linear-gradient(to top)`). |
| ![#bfdba7](https://via.placeholder.com/20/bfdba7/000000?text=+) | **Verde Pastel Suave** | `#bfdba7` | `rgb(191, 219, 167)` | Cor sólida de fundo (fallback) do menu. |
| ![#aacf8a](https://via.placeholder.com/20/aacf8a/000000?text=+) | **Verde Sombra Interna** | `#aacf8a` | `rgb(170, 207, 138)` | Sombra interna inferior do menu (`inset 0 -2px 0px #aacf8a`). |
| ![#d4e7c4](https://via.placeholder.com/20/d4e7c4/000000?text=+) | **Verde Brilho Interno** | `#d4e7c4` | `rgb(212, 231, 196)` | Sombra interna superior do menu (`inset 0 1px 0 #d4e7c4`). |

---

## 3. Cores de Tipografia e Texto

| Amostra | Nome da Cor | Hexadecimal | RGB | Onde é aplicada no site |
| :---: | :--- | :--- | :--- | :--- |
| ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/000000?text=+) | **Branco Puro** | `#FFFFFF` (`#FFF`) | `rgb(255, 255, 255)` | Texto dos títulos H3 e H4, parágrafos e listas dentro das caixas verdes (`.homeBox`, `.contentBox`), texto dos botões e texto do rodapé (`.footer p`). |
| ![#FCFEFB](https://via.placeholder.com/20/FCFEFB/000000?text=+) | **Branco Suave Esverdeado** | `#FCFEFB` | `rgb(252, 254, 251)` | Texto dos links normais/inativos da barra de navegação (`#cssmenu > ul > li > a`). |
| ![#444444](https://via.placeholder.com/20/444444/000000?text=+) | **Cinza Grafite Escuro** | `#444444` | `rgb(68, 68, 68)` | Texto do link da página ativa e do estado hover no menu (`#cssmenu li.active > a`, `#cssmenu li:hover > a`). |
| ![#000000](https://via.placeholder.com/20/000000?text=+) | **Preto Puro** | `#000000` (`#000`) | `rgb(0, 0, 0)` | Títulos H3 em caixas brancas (`.subContentBox h3`). |

---

## 4. Cores de Fundo, Superfícies e Bordas Neutras

| Amostra | Nome da Cor | Hexadecimal | RGB / RGBA | Onde é aplicada no site |
| :---: | :--- | :--- | :--- | :--- |
| ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/000000?text=+) | **Branco Superfície** | `#FFFFFF` | `rgb(255, 255, 255)` | Fundo do cabeçalho (`.header`), caixas de subconteúdo (`.subContentBox`), contêiner de contato (`.contactInfo`, `.contactBox`) e bordas dos botões (`1px solid white`). |
| ![#FFFFFF](https://via.placeholder.com/20/FFFFFF/000000?text=+) | **Branco Translúcido** | — | `rgba(255, 255, 255, 0.2)` | Fundo com 20% de opacidade da área principal de conteúdo (`.content`). |
| ![#CCCCCC](https://via.placeholder.com/20/CCCCCC/000000?text=+) | **Cinza Claro Divisória** | `#CCCCCC` (`#CCC`) | `rgb(204, 204, 204)` | Divisórias verticais entre caixas de contato (`.contactBox { border-right: 1px solid #CCC; }`). |
| ![#F5F5F5](https://via.placeholder.com/20/F5F5F5/000000?text=+) | **Whitesmoke** | `#F5F5F5` | `rgb(245, 245, 245)` | Linha divisória inferior dos títulos das seções (`.contentBox h4 { border-bottom: 1px groove whitesmoke; }`). |
| ![#DDDDDD](https://via.placeholder.com/20/DDDDDD/000000?text=+) | **Cinza Gradiente** | `#DDDDDD` | `rgb(221, 221, 221)` | Cor superior do gradiente da navegação alternativa (`.nav`). |
