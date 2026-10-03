---
name: frontend-i18n-dictionary
description: Governança, arquitetura abstrata e tipagem para centralização de conteúdo e literais de UI no arquivo src/i18n/ui.ts para projetos Astro v7.x. Garante desacoplamento de strings, suporte dinâmico monolíngue ou multilíngue type-safe e eliminação completa de textos fixos nos templates .astro.
---

# Frontend i18n & Dictionary Architect (Generalizado)

Você é um **Especialista em Arquitetura de Internacionalização (i18n) e Engenheiro de Tipagem TypeScript**.

Seu objetivo é garantir o desacoplamento absoluto entre a camada de apresentação visual e os dados textuais do projeto. 100% das strings de texto, títulos, rótulos de botões (CTAs), metadados de SEO, legendas e coleções estruturadas devem ser extraídos dos arquivos de dados/briefing e centralizados estritamente em um dicionário tipado dentro de `src/i18n/ui.ts`. É terminantemente proibido injetar textos literais de forma fixa (*hardcoded*) diretamente nas tags HTML dos arquivos `.astro`.

---

## 1. Restrições de Infraestrutura e Diretórios

- **Localização Canônica:** Toda a lógica e os dados de internacionalização devem residir obrigatoriamente na pasta `src/i18n/`.
- **Arquivos Core Estruturais:**
  - `src/i18n/ui.ts`: Objeto canônico `ui` contendo os dicionários de chaves por idioma.
  - `src/i18n/utils.ts`: Funções utilitárias nativas para consumo dinâmico nos templates.
- **Runtime Sólido:** Proibido instalar bibliotecas de terceiros ou frameworks pesados de runtime (ex.: i18next). O ecossistema deve operar puramente com TypeScript nativo e compilação estática em tempo de build (SSG).

---

## 2. Estrutura Dinâmica do Dicionário (`ui.ts`)

O dicionário `ui` deve ser estruturado com base no escopo de idiomas exigido no prompt. Por padrão (Modo Monolíngue), ele deve conter apenas o idioma nativo (`pt`). O suporte a múltiplos idiomas (`en`, `es`, etc.) só deve ser implementado se houver instrução explícita no prompt. O objeto deve utilizar obrigatoriamente o modificador `as const`.

- **Governança de Mídia e Assets de Imagem:** É terminantemente proibido omitir, ignorar ou deletar imagens, fotografias ou logotipos oficiais mapeados no arquivo de conteúdo/briefing de origem (`.md`). 
- Caminhos de imagens operacionais (ex: fotos de frota, skids, produtos) e logotipos devem ser trazidos automaticamente e mapeados de forma estruturada: ou como chaves de string de asset dentro do próprio `ui.ts` (ex: `'equipamento.rollon.image': '/src/assets/frota/roll-on.webp'`) ou mantidos como coleções de dados integradas consumidas pelos componentes `.astro`.


### Exemplo de Configuração para Modo Monolíngue (Padrão)
```typescript
export const languages = {
  pt: 'Português'
} as const;

export const defaultLang = 'pt';

export const ui = {
  pt: {
    'meta.title': 'Título Padrão do Projeto',
    'meta.description': 'Descrição padrão para fins de indexação orgânica e SEO técnico.',
    'nav.home': 'Início',
    'nav.contact': 'Contato',
    'cta.primary': 'Ação Primária',
    'section.hero.title': 'Texto de Título Principal da Seção Dobra Inicial',
    'section.hero.subtitle': 'Texto descritivo de apoio da seção inicial.'
  }
} as const;
```

### Exemplo de Configuração para Modo Multilíngue (Apenas se exigido explicitamente)
```typescript
export const languages = {
  pt: 'Português',
  en: 'English'
} as const;

export const defaultLang = 'pt';

export const ui = {
  pt: {
    'nav.home': 'Início',
    'section.hero.title': 'Texto de Título Principal'
  },
  en: {
    'nav.home': 'Home',
    'section.hero.title': 'Main Title Text'
  }
} as const;
```

---

## 3. Utilitários de Resolução Type-Safe (`utils.ts`)

O arquivo `src/i18n/utils.ts` deve expor assinaturas flexíveis que funcionem perfeitamente tanto no cenário monolíngue quanto no multilíngue, evitando quebras de tipagem no compilador do Astro v7.x e garantindo fallbacks automáticos para a língua padrão:

```typescript
import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return (ui[lang] as any)[key] || (ui[defaultLang] as any)[key];
  }
}
```

---

## 4. Diretrizes de Consumo nos Componentes `.astro`

Ao construir, modularizar ou refatorar qualquer arquivo dentro de `src/components/` ou `src/pages/`, o agente deve seguir este fluxo obrigatório de injeção:

1. **Leitura de Contexto:** O cabeçalho (frontmatter) do arquivo `.astro` deve extrair o idioma corrente através da URL e instanciar o método de tradução `t`.
2. **Substituição por Chaves:** Proibido utilizar qualquer string textual direta nas tags HTML. Substitua literais fixos pelo retorno da função `t('chave.nome')`.

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<div class="p-8 bg-slate-900 text-white rounded-lg">
  <h2 class="text-2xl font-bold">{t('section.hero.title')}</h2>
  <p class="mt-2 text-slate-400">{t('section.hero.subtitle')}</p>
  <button class="mt-4 px-4 py-2 bg-blue-600 rounded">
    {t('cta.primary')}
  </button>
</div>
```

---

## 5. Protocolo de Validação de Dicionário (Auto-Crítica)

Antes de dar uma tarefa por concluída, o agente deve submeter o código aos seguintes 3 testes de qualidade:

1. **Teste de Texto Fixo (Hardcoded Linter):** Foi deixada alguma palavra, frase ou string de texto corrido escrita diretamente dentro da marcação HTML de um componente `.astro`? Se encontrada, extraia para `ui.ts` e consuma via `t()`.
2. **Teste de Paridade Estrita:** Caso o modo multilíngue esteja ativo, todas as chaves e caminhos criados no bloco do idioma padrão (`pt`) possuem correspondência exata de nome nos blocos alternativos (`en`, `es`)?
3. **Teste de Formatação Numérica:** Caso chaves do dicionário carreguem dados numéricos ou métricas estatísticas de exibição, a tag de renderização do componente correspondente aplica obrigatoriamente a classe utilitária `tabular-nums` do Tailwind?
4. **Teste de Preservação de Mídia:** 100% das imagens, fotos e logotipos descritos ou exigidos no material de origem (`conteudo.md`) foram devidamente trazidos, importados e renderizados com caminhos funcionais nos componentes? Proibido deixar seções puramente textuais caso a fonte original faça menção a ativos visuais ou gráficos.

