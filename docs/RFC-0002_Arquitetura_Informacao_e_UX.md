# RFC-0002: Arquitetura da Informação e Experiência do Usuário (UX)

**Status:** Draft Inicial
**Versão:** 1.0.0
**Classificação:** Documento de Design e Comportamento do Ecossistema Minas 2035

---

# Sumário Executivo

A RFC-0002 mapeia a interface humana da instituição Projeto Minas 2035. Enquanto a RFC-0001 (Arquitetura Institucional) definiu *o que* a instituição é e suas regras, este documento define *como* as pessoas interagem com ela. Projetar a UX de um ecossistema de políticas públicas significa reduzir o atrito cognitivo de temas complexos (como orçamentos, P&D e infraestrutura) sem infantilizar o conteúdo. O foco é desenhar uma jornada que transforme cidadãos em colaboradores ativos através de um design escalável, semântico e guiado por IA.

---

# CAPÍTULO 01: Personas do Ecossistema

Para que a plataforma seja acessível ao cidadão comum e densa o suficiente para um acadêmico, o sistema deve adaptar sua interface (UI Adaptativa) ao perfil do usuário. Definimos as 5 Macro-Personas:

## 1.1. O Cidadão Buscador (Nível 1)
- **Quem é:** Um morador de Minas Gerais que quer entender por que um imposto subiu, por que a estrada de sua cidade não tem asfalto, ou como está a segurança no seu bairro.
- **Motivação:** Acesso à informação rápida, digerível e visual.
- **Necessidades de UX:** Linguagem simples, infográficos, resumos gerados por IA e mapas interativos.
- **Interação:** Consome o "Minas Data" (Observatório) e ouve o "Minas Podcast".

## 1.2. O Colaborador Cívico (Nível 2)
- **Quem é:** Um estudante universitário, líder comunitário ou profissional liberal que já entende um problema local e quer propor uma solução ou ajudar em uma proposta existente.
- **Motivação:** Ser ouvido, impactar a comunidade e ganhar reputação (gamificação cívica).
- **Necessidades de UX:** Fóruns claros, campos de submissão estruturados (para evitar ideias soltas), e clareza sobre o estágio de tramitação de uma ideia.
- **Interação:** Propõe "Issues" (Problemas), vota em ideias, realiza cursos na "Minas Academy" para subir de nível.

## 1.3. O Pesquisador / Especialista (Nível 3)
- **Quem é:** Professores, cientistas de dados, economistas, médicos, advogados. Possuem um selo de verificação de sua expertise.
- **Motivação:** Publicar estudos com impacto real, debater com pares e ajudar a estruturar políticas públicas baseadas em evidências.
- **Necessidades de UX:** Interface limpa, modo noturno (Dark Mode), capacidade de anexar papers, citações ABNT automatizadas, gráficos complexos e versionamento (diff) de textos.
- **Interação:** Redige artigos no "Think Tank", avalia a viabilidade de projetos e atua como "peer reviewer".

## 1.4. O Gestor Público / Legislador (Nível 4)
- **Quem é:** Prefeitos, vereadores, deputados, secretários de estado.
- **Motivação:** Encontrar minutas de leis prontas e embasadas em evidências para aprovar em suas câmaras, ou entender os indicadores de sua região.
- **Necessidades de UX:** Dashboards gerenciais, exportação de projetos de lei em PDF/Word, estudos de impacto financeiro resumidos em 1 página ("One-Pager").
- **Interação:** Consome soluções validadas pelo "Minas Lab" para aplicação no mundo real.

## 1.5. Os Agentes de Inteligência Artificial (Nível 5 - Não humano)
- **Quem é:** LLMs especializados (Agente Economista, Jurista, etc.) que rodam no backend (RAG).
- **Motivação:** Processar o volume massivo de dados do "Minas Data" e dos projetos do "Think Tank".
- **Necessidades de UX (Backend):** APIs bem documentadas, metadados ricos em toda a taxonomia da plataforma.
- **Interação:** Gera resumos para o Cidadão Buscador, sugere jurisprudência para o Pesquisador e alerta sobre conflitos para o Moderador.

---

# CAPÍTULO 02: A Jornada do Usuário (User Journey)

A plataforma possui um sistema de progressão de engajamento (Onboarding Progressivo). O objetivo de UX é converter um visitante eventual em um colaborador ativo.

## 2.1. Fase 1: Descoberta e Consumo (Visitor Journey)
1. **Ponto de Entrada:** O usuário cai em um episódio do "Minas Podcast" pelo YouTube ou uma busca no Google sobre "PIB do Triângulo Mineiro" que o leva ao "Minas Data".
2. **A Experiência (Wow Factor):** Ele encontra um dashboard com um design incrivelmente moderno (glassmorphism sutil, tipografia primorosa) e dados organizados em tempo real. Um pop-up sutil da IA sugere um resumo daquele cenário.
3. **Conversão (Sign-up):** Para interagir com gráficos mais complexos, baixar o relatório completo ou deixar um comentário, o sistema pede a criação de uma conta ("Junte-se à Construção de Minas 2035").

## 2.2. Fase 2: Participação Inicial (Onboarding Journey)
1. **Primeiro Login:** O usuário configura seu perfil informando suas áreas de interesse (ex: Saúde, Inovação, Vale do Rio Doce).
2. **Dashboard Personalizado:** A home do usuário (diferente da home pública) passa a exibir métricas, projetos e cursos exclusivamente daquelas áreas.
3. **A Primeira Contribuição (Micro-interações):** O sistema incentiva ações de baixo atrito, como "Votar se um problema X é relevante" ou "Responder a uma enquete rápida", concedendo os primeiros pontos de reputação.

## 2.3. Fase 3: Capacitação e Engajamento (Academy Journey)
1. **Barreira de Qualidade:** Se o usuário tentar submeter um "Projeto de Lei", o sistema bloqueia e informa gentilmente: *Para garantir projetos embasados, faça o curso rápido 'Como estruturar uma Proposta Baseada em Evidências' (45 min).*
2. **Educação:** Ele assiste às aulas na *Minas Academy* e ganha o *Badge* (Distintivo) de "Colaborador Iniciante".
3. **Submissão Orientada:** O formulário de submissão não é um campo de texto livre. É um _Wizard_ (passo a passo) guiado por IA que exige: Qual o problema? Quais os dados? Como resolver? Quanto custa?

## 2.4. Fase 4: O Status de Especialista (Expert Journey)
1. **Validação:** Um médico envia seu CRM; um pesquisador envia o currículo Lattes. A curadoria valida e a conta ganha o selo verificado (✅ Especialista em Saúde).
2. **Privilégios:** Ele ganha a permissão de criar repositórios de projetos independentes (como um dev no GitHub), revisar projetos de terceiros, e seus comentários aparecem no topo das discussões com destaque visual (borda dourada ou marcação específica).

---

# CAPÍTULO 03: Casos de Uso Core (Use Cases)

A plataforma deve otimizar os caminhos (User Flows) para as ações mais importantes. Detalhamos os fluxos centrais:

## 3.1. Caso de Uso: "Como está a minha cidade?" (Consumo de Dados)
- **Gatilho:** Cidadão quer saber o nível da saúde em Juiz de Fora.
- **Caminho:** `Home -> Observatório -> Selecionar 'Juiz de Fora' no Mapa -> Dashboard Municipal -> Filtro: Saúde`.
- **UX Esperada:** Transições suaves, mapas que não travam, dados carregados progressivamente. A IA resume: *"Juiz de Fora tem boa infraestrutura, mas déficit de leitos pediátricos."* E mostra 3 projetos do *Think Tank* em andamento sobre pediatria na Zona da Mata.

## 3.2. Caso de Uso: "Tive uma ideia para o problema do transporte" (Ideação)
- **Gatilho:** Cidadão quer sugerir um BRT elétrico para a Região Metropolitana de BH.
- **Caminho:** `Home -> Think Tank -> Propor Ideia (Botão Primário) -> Wizard de Criação`.
- **UX Esperada:**
  - *Passo 1:* O sistema pergunta o tema. Ele digita "BRT". A IA vasculha a plataforma e diz: *"Já existem 3 propostas parecidas, quer se juntar a elas ou criar uma nova?"* (Evita duplicação).
  - *Passo 2:* Ele opta por criar uma nova. O sistema exige a inserção de pelo menos uma fonte (link ou PDF) que embase a ideia.
  - *Passo 3:* Ideia publicada com tag `[Em Avaliação]`.

## 3.3. Caso de Uso: "Preciso embasar uma lei municipal" (Uso Governamental)
- **Gatilho:** Vereador precisa de um projeto para incentivar startups em sua cidade.
- **Caminho:** `Home -> Buscar "Inovação Startups" -> Filtro: "Projetos de Lei Prontos" -> Acessar Projeto Votado pela Comunidade`.
- **UX Esperada:** Ele acessa a página do Projeto que tem nota altíssima na comunidade e revisão de especialistas. Encontra o botão `[Exportar Minuta .PDF]`. Na impressão, sai a lei estruturada com a marca do "Minas 2035", conferindo autoridade técnica ao vereador.

## 3.4. Caso de Uso: "Escutar e Aprofundar" (Multimídia)
- **Gatilho:** Ouve um corte no Instagram sobre IA nas escolas, originado no Minas Podcast.
- **Caminho:** Clica no link -> Cai na `Página do Episódio Completo`.
- **UX Esperada:** O vídeo toca no topo (semelhante à interface do YouTube/Spotify). Abaixo, uma transcrição clicável (se ele clicar no parágrafo, o vídeo pula para o tempo exato). Ao lado, os arquivos em PDF que os convidados debateram estão prontos para download.

---

# CAPÍTULO 04: Sitemaps Complexos

Diferente de um site institucional de páginas estáticas, o Projeto Minas 2035 opera sob uma arquitetura de arvore profunda (Deep Tree Architecture). A navegação deve permitir que o usuário vá de uma visão "macro" (Estado de Minas) para uma visão "micro" (Escola Específica no Município X) em no máximo 4 cliques.

## 4.1. Estrutura do Header Global (Sticky Menu)
O menu de navegação acompanha o usuário (sticky) e muda seu contexto dependendo de quem está logado.
- **Logo [Minas 2035]** -> Retorna sempre ao Dashboard Executivo (Home Pública) ou Feed Personalizado (Logado).
- **Dados & IA (Observatório)** -> Acesso direto aos mapas interativos e APIs abertas.
- **Políticas Públicas (Think Tank)** -> Projetos, Debates, Desafios.
- **Aprender (Academy)** -> Trilhas de conhecimento, Podcast, Biblioteca.
- **Comunidade (Open)** -> Fóruns, Ranking de Especialistas, Eventos.
- **Botão Primário:** `[Sugerir um Projeto]` (Ação principal de Call to Action - CTA).
- **Perfil do Usuário:** Menu drop-down com Pontuação de Reputação e Notificações.

## 4.2. Breadcrumbs Dinâmicos
Fundamental para não perder o usuário. Exemplo visual:
`🏠 Início / Observatório / Saúde / Mortalidade Infantil / Jequitinhonha`

## 4.3. Navegação Lateral Contextual (Sidebar)
Em páginas densas (como a leitura de um Projeto de Lei), a lateral direita funciona como um índice vivo (TOC - Table of Contents), enquanto a lateral esquerda exibe métricas auxiliares.
- *Esquerda:* Quem são os autores, selos de validação, tags do projeto.
- *Centro:* O texto em si.
- *Direita:* Índice (Problema, Evidências, Custos), Comentários e Projetos Relacionados sugeridos pela IA.

---

# CAPÍTULO 05: Taxonomia, Metadados e Ontologia

Para o Grafo de Conhecimento funcionar, a taxonomia (classificação das coisas) não pode ser livre; ela deve seguir um padrão hierárquico estrito (Ontologia). Isso permite que as IAs cruzem informações de forma semântica.

## 5.1. A Árvore Taxonômica Principal
Todo conteúdo (seja ele um artigo, um áudio ou um projeto de lei) deve ser "tagueado" em três eixos:
1. **Eixo Temático:** Economia > Indústria > Tecnologia > IA.
2. **Eixo Geográfico:** Minas Gerais > Zona da Mata > Juiz de Fora > Bairro Centro.
3. **Eixo de Maturidade (State):** Problema Identificado > Estudo Inicial > Debate Público > Projeto Estruturado > Legislação Pronta.

## 5.2. Metadados Obrigatórios (Schemas)
Um "Projeto de Lei", no banco de dados, possui campos fixos e inegociáveis para garantir a padronização científica:
- `id_projeto`: Hash único.
- `autores`: Array com os IDs dos usuários criadores.
- `revisores_oficiais`: Array de Especialistas certificados que validaram o texto.
- `evidencias`: Links obrigatórios para bases acadêmicas (Scielo, PubMed, etc). Sem isso, o sistema rejeita a submissão.
- `custo_estimado`: Valor financeiro aproximado (em R$).
- `impacto_esperado`: Métrica-alvo (ex: Reduzir a evasão escolar em 3%).

## 5.3. Folksonomia Controlada (Tags de Usuário)
Usuários podem adicionar tags próprias (`#urgente`, `#mineração`), mas o algoritmo prioriza as tags oficiais da Taxonomia. Isso cria flexibilidade sem destruir a organização do banco de dados.

---

# CAPÍTULO 06: Fluxos de Autenticação e Permissões (RBAC)

O Role-Based Access Control (RBAC) do Projeto Minas 2035 é desenhado para prevenir ataques de bots políticos (Astroturfing) e garantir que decisões complexas tenham o peso adequado. Não é uma rede social onde "cada CPF é um voto com o mesmo peso"; é uma rede de inteligência coletiva ponderada por reputação.

## 6.1. O Sistema de Permissões Gradual
- **Guest (Não-logado):** Apenas leitura. Pode ouvir podcasts, ler artigos e baixar dados agregados (PDFs/CSVs).
- **Cidadão Logado Nível 1:** Autenticação via Google/Gov.br. Pode comentar (sujeito à moderação da IA) e dar *Upvotes* (curtidas).
- **Cidadão Logado Nível 2 (Academy):** Passou em cursos de certificação. Pode criar *Issues* (novos problemas no fórum) e iniciar a submissão de Projetos Simples.
- **Especialista (Verificado):** Identidade profissional validada. Seu *Upvote* vale 5x mais (Voto Ponderado). Tem acesso aos dados brutos via API. Pode liderar revisões.
- **Moderador (Curador):** Aponta violações de metodologia, aprova projetos para a fase de votação final, e bane usuários nocivos.
- **Admin/Conselho:** Acesso irrestrito às chaves de API, configuração dos Agentes LLM, e gestão do banco de dados.

## 6.2. Autenticação e Prevenção de Bots
Para criar uma conta, o sistema sugere fortementente o login unificado via **Gov.br** ou validação de e-mail corporativo/universitário (`@ufmg.br`, `@usp.br`). Isso reduz drasticamente a criação de contas fakes durante períodos de polarização eleitoral.

## 6.3. O Fator Reputação (Trust Score)
O Trust Score do usuário é visível ao lado do seu nome. Se um usuário submete projetos que frequentemente são barrados por falta de fontes, seu Trust Score cai. Se ele revisa projetos e adiciona fontes valiosas, seu Score sobe, e seus conteúdos ganham prioridade no algoritmo da Home.

---

# CAPÍTULO 07: A "Home" (Dashboard Executivo Público)

O *Wireframe Textual* abaixo mapeia os componentes estruturais da Página Inicial para o visitante não-logado. A ideia é gerar impacto imediato através de dados ao vivo (Live Data).

## 7.1. Hero Section (Topo da Página)
- **Visual:** Fundo escuro (Dark Mode por padrão) com um modelo 3D estilizado do mapa de Minas Gerais gerado em partículas de luz.
- **Headline (H1):** "Bem-vindo ao Futuro de Minas Gerais."
- **Sub-headline (H2):** "O laboratório de inteligência coletiva que projeta o estado para 2035. Dados. Evidências. Participação."
- **Call to Action (Primário):** Botão verde brilhante `[Explorar o Observatório]`.
- **Call to Action (Secundário):** `[Entenda o Projeto]`.

## 7.2. Seção "Minas em Tempo Real" (Widgets de Dados)
Quatro cartões (Cards) grandes com números atualizados automaticamente:
1. **[PIB Estadual (Estimado)]** + Gráfico de linha (trendline) dos últimos 5 anos.
2. **[Projetos em Tramitação]** -> "142 ideias baseadas em evidências em debate."
3. **[Especialistas Ativos]** -> "450 doutores e pesquisadores contribuindo."
4. **[Taxa de Desemprego]** + Comparativo rápido (↑ ou ↓ em relação ao trimestre anterior).

## 7.3. Seção "Radar do Think Tank"
- **Título:** "Ideias que estão moldando o futuro hoje."
- **Layout:** Carrossel horizontal de Cards de Projetos (estilo Netflix).
- **Conteúdo do Card:** 
  - Tag superior: `[Fase: Draft de Lei]`
  - Título: *Implementação de IA na Gestão Hospitalar do SUS MG*.
  - Autoria: *"Por Dr. Rafael M. (+ 4 colaboradores)"*.
  - Progresso: Barra verde de viabilidade financeira (85%).

## 7.4. Seção "Mídia e Academy"
- Esquerda: O último episódio do Minas Podcast incorporado em um player nativo moderno. Botões secundários: "Ler Transcrição" ou "Baixar Resumo IA".
- Direita: Ranking dos cursos mais feitos da semana na Academy (Ex: *Fundamentos de Orçamento Público - 14k inscritos*).

---

# CAPÍTULO 08: Tela do Projeto (A "Wikipedia" de um Problema/Solução)

A interface de um Projeto é o núcleo do ecossistema. Inspirada no GitHub (para versionamento) e na Wikipedia (para leitura enciclopédica), é desenhada para evitar a desinformação.

## 8.1. Cabeçalho do Projeto
- **Status Badge:** Um rótulo claro no topo (ex: `[Em Avaliação Técnica]`, `[Aprovado pela Comunidade]`, `[Minuta Legislativa]`).
- **Título da Issue/Projeto:** Fonte grande e serifada (trazendo autoridade).
- **Métricas Rápidas:**
  - Upvotes / Downvotes (visíveis apenas após o voto para evitar efeito manada).
  - Número de *Forks* (Quantas pessoas derivaram esta ideia).
  - Verificação de Fontes (Score da IA: "Este texto possui 95% de embasamento bibliográfico").

## 8.2. O Corpo (Content Area)
Dividido em abas (Tabs) estilo GitHub:
- **Aba 1: Resumo Executivo (Visão Padrão)**
  - O Problema (1 parágrafo).
  - A Solução Proposta (1 parágrafo).
  - Custos e Viabilidade (Gráfico de pizza ou barras).
- **Aba 2: O Estudo Completo (Para Especialistas)**
  - O texto acadêmico detalhado, com citações dinâmicas. Ao passar o mouse sobre um `[1]`, a referência bibliográfica aparece em um popover.
- **Aba 3: Histórico de Versões (Changelog)**
  - Quem editou o quê, com *Diffs* (marcação de texto adicionado em verde, removido em vermelho).
- **Aba 4: Debate Científico (Fórum)**
  - Fórum de comentários, mas estritamente moderado. Comentários de usuários com o selo "Especialista" ficam fixados no topo.

## 8.3. Sidebar de Contexto (Direita)
- **Impacto Regional:** Um minimapa destacando quais cidades serão mais afetadas.
- **Documentos Anexos:** PDFs de auditoria, planilhas orçamentárias (arquivos brutos).
- **Apoie o Projeto:** Botão para assinar digitalmente a proposta (similar ao e-Cidadania do Senado, mas com verificação robusta).

---

# CAPÍTULO 09: Dashboard Pessoal (Gamificação e Reputação)

Para o usuário logado, o Dashboard Pessoal substitui a Home Pública. Funciona como um currículo cívico do usuário.

## 9.1. O Perfil do "Cidadão 2035"
- **Header:** Foto do usuário, Selos (Badges) conquistados e a barra de progressão do "Trust Score" (ex: Nível 3 - 2.450 XP).
- **Estatísticas Cívicas:**
  - Quantas propostas apoiou.
  - Quantos comentários técnicos realizou.
  - Horas de curso completadas na Academy.

## 9.2. Feed de Projetos Personalizado (O "Para Você")
- Baseado no machine learning dos interesses do usuário (ex: Se ele consome muito sobre Agronegócio, a IA traz propostas rurais).
- Mistura de sugestões: *"Um novo projeto sobre silvicultura precisa de revisão. Você tem expertise nessa área, gostaria de ler?"*

## 9.3. Gestão de Contribuições (Os Repositórios)
- **Meus Projetos:** Tabela com status em tempo real das propostas que o usuário iniciou. Exibe aprovações, comentários novos e se o projeto foi citado por algum podcast.
- **Minha Trilha de Aprendizado:** Mostra os cursos em andamento na Academy e sugere próximos módulos para que ele alcance o Nível 4 (Especialista).
