# RFC-0003: Design System e Identidade Visual

**Status:** Draft Inicial
**Versão:** 1.0.0
**Classificação:** Especificação Visual e Estética (UI/UX) do Ecossistema Minas 2035

---

# Sumário Executivo

A RFC-0003 define o "Design System" do Projeto Minas 2035, estabelecendo a base visual para que toda a plataforma pareça consistente, confiável e tecnológica. Fugindo da estética burocrática tradicional de sites governamentais (frequentemente pautados por paletas primárias fortes e ausência de respiro visual), esta identidade bebe da fonte de gigantes de tecnologia, hubs de inovação e instituições de pesquisa globais. A diretriz estética é o **"High-Tech Institucional"**: um visual centrado predominantemente no *Dark Mode*, com elementos translúcidos (Glassmorphism), tipografia geométrica afiada e alto contraste direcional.

---

# CAPÍTULO 01: O Conceito da Marca

A marca do Projeto Minas 2035 não é apenas um logotipo, mas um ecossistema visual que precisa ser imediatamente reconhecível em relatórios de PDF, avatares de rede social, dashboards e vídeos.

## 1.1. O Símbolo e a Geometria
- **Símbolo:** A base do logotipo não deve usar o triângulo da bandeira de Minas Gerais de forma clichê. Em vez disso, propõe-se uma desconstrução: o triângulo formado por três pontos (nós/nodes) conectados por linhas finas, remetendo a um **Grafo (Knowledge Graph)** e, simultaneamente, à geografia do estado.
- **O Texto (Wordmark):** "PROJETO MINAS 2035" escrito em caixa alta (uppercase), mas com espaçamento generoso entre as letras (Tracking/Letter-spacing: `1.5px`), transmitindo estabilidade e sofisticação.
- **O Significado do "2035":** O número ganha destaque em *bold* e, preferencialmente, utiliza a cor de destaque (Accent Color), marcando-o não como um "fim", mas como o farol do primeiro grande ciclo de transformação.

## 1.2. Variações da Marca (Responsividade)
- **Primary Logo:** Símbolo à esquerda + Texto à direita (Uso no Header da plataforma).
- **Stacked Logo:** Símbolo centralizado + Texto abaixo (Uso em capas de relatórios e encerramentos de vídeos do Podcast).
- **Icon Only:** Apenas o símbolo do Grafo Triangular (Uso em Favicons, avatares de perfil, e badges de autenticação).

## 1.3. A Voz e o Tom Visual
A estética não deve gritar "eu sou o governo". Deve comunicar "eu sou um centro de inteligência". As bordas não são excessivamente arredondadas (evitando a estética "brincalhona" de redes sociais); utilizam um "Border-Radius" contido (`4px` ou `6px`). As sombras são profundas e alongadas no Light Mode, e baseadas em elevação e brilho difuso no Dark Mode.

---

# CAPÍTULO 02: Paleta de Cores (Design Tokens)

O Projeto Minas 2035 foi concebido como **Dark-Mode First**. Embora suporte o Light Mode para leitura intensiva (como a aba de "Estudos Complexos"), a imersão principal de dados e dashboards ocorre em ambientes escuros, reduzindo a fadiga visual e ressaltando informações importantes (gráficos e alertas).

## 2.1. Cores de Fundo e Superfície (Dark Mode)
Evita-se o preto puro `#000000`. Utilizamos a escala "Slate" (um cinza com subtom levemente azulado/profundo):
- `Surface-0 (Background Global):` `#0B0F19` (Fundo primário absoluto, denso).
- `Surface-1 (Cards e Painéis):` `#111827` (Elevação nível 1).
- `Surface-2 (Hover e Elementos Flutuantes):` `#1F2937` (Elevação nível 2, modais).
- `Border-Subtle:` `#374151` (Linhas divisórias e divisões de conteúdo invisíveis).

## 2.2. A Cor de Destaque (Accent / Brand Color)
A cor de destaque é o **Verde Esmeralda Fluorescente** (Neon Emerald). Ela remete ao progresso, aprovação e tecnologia, além de ser um aceno subliminar ao triângulo da bandeira de Minas (porém modernizado).
- `Brand-Primary:` `#10B981` (Botões de CTA, links em destaque, badging principal).
- `Brand-Hover:` `#059669` (Ao passar o mouse, a cor escurece ligeiramente).
- `Brand-Glow:` `rgba(16, 185, 129, 0.15)` (Usado para criar um efeito de brilho/halo por trás de ícones importantes).

## 2.3. Cores Semânticas (Para Dados e Ações)
Indispensáveis para os dashboards ("Minas Data") e para aprovações de leis:
- **Success (Aprovado / Crescimento Econômico):** Verde `#10B981` (Usa a cor da marca).
- **Warning (Alerta / Atenção aos Dados):** Amarelo Âmbar `#F59E0B`.
- **Danger (Rejeitado / Queda em Indicadores):** Vermelho Carmesim `#EF4444`.
- **Info (Aviso Técnico / Neutro):** Azul Elétrico `#3B82F6` (Ex: Links para documentação).

## 2.4. A Metáfora do "Glassmorphism"
Para painéis flutuantes (como pop-ups do Agente de IA), utilizamos *Glassmorphism*: fundos levemente translúcidos com blur.
- `Glass-Background:` `rgba(17, 24, 39, 0.7)` + `backdrop-filter: blur(12px)`.
- Este recurso garante que mapas ou gráficos complexos ao fundo continuem sugerindo contexto, mesmo quando o usuário lê uma janela sobreposta.

---

# CAPÍTULO 03: Tipografia

O texto é a interface principal de um Think Tank. Precisamos de uma leitura impecável para PDFs de 50 páginas e de grande impacto para números de dashboards.

## 3.1. Fonte Primária (Headlines e Números)
- **Fonte Escolhida:** `Inter` ou `Outfit` (Sans-Serif modernas, neutras e altamente legíveis em telas).
- **Uso:** H1, H2, H3, números de Dashboards (Ex: O PIB, Taxas percentuais).
- **Características:** As geometrias perfeitas dessa fonte tornam os Dashboards muito parecidos com terminais da Bloomberg, transmitindo absoluta seriedade financeira e estatística.

## 3.2. Fonte Secundária (Texto Corrido / Body Text)
- **Fonte Escolhida:** `Inter` (peso regular) para garantir uniformidade, ou uma fonte Serifada moderna como `Merriweather` estritamente para a leitura profunda (dentro do "Estudo Técnico" do Minas Lab), remetendo a papers acadêmicos.
- **Tamanho Base (Base Size):** `16px` para o corpo de texto na Web, garantindo que não force a vista.
- **Line-height (Entrelinha):** `1.6` ou `1.7` para textos longos (projetos de lei, justificativas). Respiro é essencial.

## 3.3. Fonte Monospace (Código e Dados Brutos)
- **Fonte Escolhida:** `Fira Code` ou `JetBrains Mono`.
- **Uso:** IDs de Projeto (ex: `PL-2027-405`), chamadas de API, JSONs exportados, e chaves criptográficas de autenticação.
- **Função:** Quebrar a interface tradicional para sinalizar que o usuário está olhando para dados brutos, reforçando a imagem de "Open Data" (Transparência Radical).

## 3.4. Cores do Texto (High Contrast)
Para manter o contraste ideal (WCAG AA ou AAA) no ambiente escuro:
- `Text-Primary:` `#F9FAFB` (Branco puro/Gelo para títulos).
- `Text-Secondary:` `#9CA3AF` (Cinza médio para descrições secundárias, subtítulos e placeholders).
- `Text-Muted:` `#6B7280` (Para metadados, rodapés e datas de publicação).

---

# CAPÍTULO 04: Sistema de Botões e Inputs (UI Kit)

Os elementos interativos (UI Kit) definem a usabilidade tátil da plataforma. Eles devem ser padronizados globalmente para reduzir o esforço cognitivo.

## 4.1. Botões (Buttons)
Os botões seguem a regra do "Border-Radius Contido" (`4px`), transmitindo estabilidade e precisão técnica.
- **Primary CTA:** Fundo preenchido em `Brand-Primary` (#10B981). Texto em `Surface-0` (escuro). Usado apenas uma vez por tela (Ex: `[Sugerir Projeto]`, `[Login]`).
- **Secondary / Outline:** Fundo transparente, borda fina (1px) em `Border-Subtle` ou `Text-Secondary`. Texto claro. Usado para ações alternativas (Ex: `[Baixar PDF]`, `[Cancelar]`).
- **Ghost Button:** Sem fundo e sem borda. Apenas texto com efeito de hover. Usado para navegação auxiliar (Ex: `[Ver Mais]`).
- **Danger Button:** Fundo ou outline vermelho (`Danger`), para ações destrutivas (Ex: `[Excluir Proposta]`). Exige duplo clique ou confirmação.

## 4.2. Formulários e Inputs
Especialmente críticos no Wizard de submissão de Projetos:
- **Estilo Base:** Campos de input sem bordas visíveis (`border: none`), porém com o fundo em `Surface-1`. Ao serem focados (Active State), recebem um "ring" (anel) luminescente na cor `Brand-Primary`, guiando os olhos do usuário.
- **Labels:** Sempre acima do input (Top-Aligned), em `Text-Secondary`, tamanho `14px`, `font-weight: 500`.
- **Validação Inline:** Mensagens de erro aparecem imediatamente ao digitar, em cor vermelha sutil, não em *popups* agressivos.
- **Drag & Drop:** Áreas para anexar PDFs (Papers/Evidências) possuem bordas tracejadas com ícone de upload claro.

---

# CAPÍTULO 05: Cards e Data Visualization

Como o Projeto Minas 2035 trafega um volume massivo de conhecimento, os Cards são a unidade básica de empacotamento de conteúdo.

## 5.1. O "Project Card" (Cartão de Projeto)
Um bloco visual que resume uma proposta de lei ou estudo:
- **Background:** `Surface-1`.
- **Sombra (Drop Shadow):** Muito sutil no Dark Mode (`0 4px 6px rgba(0,0,0,0.4)`).
- **Conteúdo Interno:**
  - *Topo:* Tag indicando o estágio (Ex: `Em Debate`, com dot verde ao lado).
  - *Meio:* Título forte (H3) em até 2 linhas.
  - *Rodapé:* Micro-avatares dos autores (empilhados) e número de upvotes/comentários com ícones de `16px`.

## 5.2. Data Visualization (Gráficos)
Para manter o ar *Premium* e evitar a aparência padrão de bibliotecas como Chart.js:
- **Estilo de Linhas:** Gráficos de linha devem possuir um preenchimento com gradiente de baixo para cima (fade to transparent) até a linha da curva. A curva em si usa cores sólidas e saturadas (Brand, Danger ou Success).
- **Gráficos de Barras (Bar Charts):** Bordas ligeiramente arredondadas no topo (`border-top-radius: 4px`), sem grades de fundo (gridlines verticais ocultas, apenas horizontais muito sutis).
- **Mapas de Calor (Choropleth Maps):** O mapa de Minas Gerais será gerado via SVG. Regiões com densidade baixa de dados ficam em `Surface-1`, e regiões de alta densidade assumem variações de opacidade da `Brand-Primary`.

---

# CAPÍTULO 06: Badges e Selos de Reputação

No ambiente de um Think Tank, a reputação intelectual é o ativo mais valioso de um usuário. Os selos (Badges) devem ser visualmente cobiçados.

## 6.1. O Sistema de Badges (Verificação)
Aparecem ao lado do nome do usuário em fóruns e autoria de textos:
- **✅ Verificado Padrão:** Um check azul profundo para contas Gov.br ou e-mails institucionais genéricos.
- **🛡️ Especialista / Pesquisador:** Escudo com gradiente metálico (Gold/Silver) para usuários que tiveram diplomas (Mestrado/Doutorado) ou registros profissionais validados pela curadoria. Dá peso aos votos deste perfil.
- **🏛️ Gestor Público Oficial:** Selo restrito a prefeitos, vereadores, secretários e deputados no exercício do mandato.

## 6.2. Status de Projetos (Pills / Labels)
Pequenos "comprimidos" (Pills) coloridos usados no topo dos conteúdos para classificação rápida:
- `[Draft]` (Rascunho): Fundo cinza (`Surface-2`), texto branco.
- `[Em Revisão]`: Fundo amarelado semi-transparente, texto `Warning`.
- `[Pronto para Votação]`: Fundo azulado semi-transparente, texto `Info`.
- `[Lei Base]`: Fundo `Brand-Glow`, texto `Brand-Primary` com um sutil ícone de estrela.

---

# CAPÍTULO 07: Micro-interações e Animações

O design dinâmico requer que a interface pareça "viva" e responsiva aos toques do usuário, reduzindo a ansiedade de espera de carregamento e provendo feedback imediato.

## 7.1. Transições de Estado (Hover e Click)
- **Hover Transitions:** Todas as mudanças de cor ou elevação (como passar o mouse sobre um *Project Card*) devem ocorrer em `200ms ease-in-out`. Não deve haver "pulos" duros.
- **Click Feedback (Ripple Effect):** Ao clicar em um Botão Primário, uma leve onda de propagação (ripple) na cor branca (`opacity 0.2`) sinaliza o clique.
- **Upvote Animation:** Quando um usuário vota positivamente em uma proposta, a seta muda de cinza para verde, executa um micro-salto no eixo Y (cima) e emite confetes em partículas verdes (sutil, durando `300ms`), recompensando o engajamento.

## 7.2. Carregamento Progressivo (Skeleton Screens)
- **Evitar Spinners:** Em vez da clássica "rodinha" de carregamento (spinner), a plataforma utilizará *Skeleton Screens*. Enquanto um dashboard ou texto longo é buscado no banco de dados, caixas cinzas (`Surface-2`) com uma animação suave de pulsação (shimmer effect) ocupam o layout, mantendo a percepção de performance.

## 7.3. Reveal Animations (Rolagem de Tela)
- Conforme o usuário faz *scroll* (rola a página para baixo) no Observatório (Minas Data), os gráficos devem "surgir" de baixo para cima (Fade Up) e as barras se preencherem da esquerda para a direita, dando a impressão de que os dados estão sendo calculados naquele exato momento.

---

# CAPÍTULO 08: Responsividade (Grid System)

A plataforma será desenvolvida em uma abordagem *Mobile-First* para consumo de dados e *Desktop-First* para criação (já que é improvável que um pesquisador redija um Projeto de Lei de 30 páginas pelo celular).

## 8.1. O Grid System (12 Colunas)
- **Desktop (1024px+):** Layout em 12 colunas, permitindo Sidebars complexas (TOC) à direita e Menu Lateral à esquerda, deixando o conteúdo central respirar com margens de `32px`.
- **Tablet (768px - 1023px):** O Grid se condensa para 8 colunas. Sidebars secundárias são empurradas para baixo do conteúdo (stacked) ou escondidas em menus *off-canvas*.
- **Mobile (Até 767px):** Grid de 4 colunas ou coluna única (100% de largura).

## 8.2. Adaptação de Gráficos no Mobile
- Gráficos complexos (como mapas de calor cheios de labels) que não funcionam no mobile se transformam automaticamente em "Data Tables" expansíveis, ou exigem que o usuário vire o celular na horizontal (modo paisagem) via um *prompt* visual: *"Rotate your device to view this chart"*.

---

# CAPÍTULO 09: Acessibilidade e Contraste

O Projeto Minas 2035 é uma instituição com caráter público (ainda que privada/independente), portanto, não deve excluir nenhum cidadão do debate por falhas de UX.

## 9.1. Contraste de Cores (WCAG 2.1 AA)
- Todos os textos, especialmente os de links (`Brand-Primary` `#10B981` contra fundos `Surface-0`), foram calculados para passar na validação de contraste do WCAG. Onde a cor esmeralda não atingir a taxa de `4.5:1` sobre cinza escuro, utilizaremos um verde ligeiramente mais pálido (Mint) exclusivamente para tipografia.

## 9.2. Acessibilidade Cognitiva (Daltonismo)
- Informações de status (Sucesso vs. Falha) NUNCA dependerão exclusivamente da cor. 
- Um gráfico de aprovação econômica que está caindo não fica apenas vermelho; ele também exibe uma seta grande apontando para baixo `(↓ -3.2%)`. Isso garante que daltônicos (Deuteranopia/Protanopia) leiam a informação corretamente.

## 9.3. Leitores de Tela e Navegação por Teclado
- A hierarquia H1, H2, H3 será seguida estritamente no HTML semântico.
- Foco de Teclado (Focus Ring): Ao navegar usando `TAB`, todos os botões e links recebem um anel de foco visível, permitindo a utilização total do *Minas Lab* sem o uso de mouse.
- Suporte a *Aria-labels* em todos os ícones que não possuam texto descritivo ao lado.
