# RFC-0004 Arquitetura Técnica

## Capítulo 01 – Paradigma de Desenvolvimento

**Objetivo**: Definir o modelo de construção, manutenção e evolução da plataforma “Projeto Minas 2035”.

- **Progressive Web App (PWA)** – Aplicação web responsiva que funciona offline, pode ser instalada como app nativa e aproveita recursos de cache via Service Workers.
- **Vanilla HTML5 / CSS3 / JavaScript (ES2022)** – Código puro, sem dependência de frameworks front‑end (React, Vue, Angular).  Isso garante:
  - Baixo overhead de bundle;
  - Facilidade de auditoria e manutenção a longo prazo;
  - Compatibilidade máxima com navegadores atuais.
- **Arquitetura de Módulos** – Cada área funcional (ex.: “Visão 2035”, “Dashboard de Dados”, “Biblioteca de Estudos”) é implementada como módulo JavaScript independente, exportando funções e estilos via ES‑Modules.
- **Separação de Responsabilidades** – HTML estático contém a estrutura; CSS contém o Design System (variáveis HSL, tipografia, micro‑interações); JS lida apenas com lógica de navegação, carregamento dinâmico de conteúdo e integração com APIs.

### Estratégia de Evolução
1. **Fase 1 – MVP PWA** – Implementação completa usando apenas HTML/CSS/JS.  Deploy em serviço estático (ex.: Azure Static Web Apps, Netlify, Vercel).
2. **Fase 2 – Camada de Serviços** – Introduzir API RESTful (FastAPI ou Node.js) para conteúdo dinâmico e gerenciamento de usuários.
3. **Fase 3 – Migração Opcional** – Caso a complexidade cresça, migrar gradualmente para Next.js (React) mantendo os módulos independentes como micro‑front‑ends.

---

## Capítulo 02 – Stack Tecnológica

| Camada | Tecnologia | Justificativa |
|--------|------------|----------------|
| **Frontend** | HTML5, CSS3 (custom properties, Flexbox, Grid), JavaScript (ES2022) | Alinhado ao paradigma “vanilla”, baixa curva de aprendizado, ótima performance. |
| **Build / Bundling** | Vite (modo ES‑Modules) – opcional para desenvolvimento local, **sem** bundling em produção (servir arquivos estáticos). |
| **State Management** | `Response` objects + `URLSearchParams` + `IndexedDB` (para cache offline). |
| **Styling** | Design System baseado em tokens HSL (dark‑mode first), Glassmorphism, micro‑interactions via CSS `@keyframes`. |
| **API Layer** | FastAPI (Python) ou Express (Node.js) – escolha baseada na equipe; ambos suportam OpenAPI/Swagger para documentação. |
| **Banco de Dados** | PostgreSQL (relacional) + Elasticsearch (busca full‑text) – permite consultas semânticas futuras. |
| **Infraestrutura Cloud** | Azure (App Service + Static Web Apps) ou AWS (S3 + CloudFront) – ambos oferecem CDN global, SSL automático e integração CI/CD. |
| **CI/CD** | GitHub Actions – linting, testes unitários (Jest para JS, Pytest para Python), deploy automático ao merge na branch `main`. |
| **Observabilidade** | Sentry (frontend), Grafana + Prometheus (backend). |
| **Segurança** | CSP, Subresource Integrity, OWASP headers, OAuth2/OpenID Connect via Azure AD B2C ou Auth0. |

---

## Capítulo 03 – Topologia de Cloud & Deploy

```
┌─────────────────────┐      ┌───────────────────────┐
│  Azure Static Web   │←───►│  CDN (Azure Front Door)│
│   (HTML/CSS/JS)    │      └─────────────┬─────────┘
└─────────────────────┘                    │
          ▲                                   │
          │                                   │
          │                                   ▼
┌─────────────────────┐      ┌───────────────────────┐
│   FastAPI Service   │←───►│  Azure App Service      │
│    (Python)        │      │  (REST API)            │
└─────────────────────┘      └───────────────────────┘
          ▲                                   ▲
          │                                   │
          │                                   │
          ▼                                   ▼
   PostgreSQL (Azure      Elasticsearch (Azure)   
   Database)            (Search Service)       
```

- **Camada estática** – arquivos HTML/CSS/JS são armazenados em um bucket de storage público com CDN front‑end para latência mínima.
- **Camada de API** – FastAPI roda em um App Service (container ou plano de consumo).  Expondo endpoints JSON para:
  - Busca de conteúdo (texto, vídeos, visualizações);
  - Autenticação/Autorização (RBAC);
  - Integração com IA (future RAG).
- **Persistência** – PostgreSQL como fonte de verdade; Elasticsearch para indexação e pesquisa semântica.
- **Escalabilidade** – Auto‑scale do App Service; CDN garante escalabilidade horizontal de entrega de ativos.
- **Resiliência** – Backup automatizado diário, deployment slots para zero‑downtime.

### Pipeline de Deploy
1. **Push** → GitHub Actions Lint/Tests.
2. **Build** (Vite dev server) → artefatos estáticos.
3. **Deploy**:
   - Artefatos → Azure Static Web Apps.
   - Container (Docker) → Azure App Service.
4. **Smoke Test** → Sentry alerts.

---

*Este documento será complementado nas próximas iterações com detalhes de segurança, CI/CD avançado e estratégia de migração para Next.js.*
## Capítulo 04 – Arquitetura do Frontend

- **Modelo**: Aplicação híbrida – SSR (Server‑Side Rendering) para páginas públicas críticas usando Next.js (React) e SPA (Single‑Page Application) para dashboards internos.
- **Roteamento**: HTML5 History API + Next.js router; fallback a rotas estáticas para PWA.
- **Gerenciamento de Estado**: Store baseada em `Response` objects, `URLSearchParams` e IndexedDB para persistência offline; para o SPA interno, utilizamos contexto React (`useContext`) combinado com `useReducer`.
- **Autenticação**: Azure AD B2C/OpenID Connect; tokens JWT armazenados em HttpOnly cookies.
- **Acessibilidade**: WCAG 2.2 compliance, foco visível, contraste adequado, atributos ARIA.
- **Performance**: Critical CSS inlining, lazy‑loading de imagens, prefetch de módulos ES‑Modules, Service Workers para cache.

## Capítulo 05 – Arquitetura do Backend

- **Framework**: FastAPI (Python) rodando em contêineres Docker, orchestrado por Azure App Service (ou AKS para escala avançada).
- **Camadas**: DDD – Domain, Application, Infrastructure; cada domínio (ex.: Educação, Saúde, Economia) expõe serviços RESTful.
- **Persistência**: PostgreSQL + SQLAlchemy ORM; migrações via Alembic.
- **Cache**: Redis para respostas frequentes e sessão.
- **Segurança**: OAuth2 + JWT, scopes por RBAC, rate‑limiting via Azure API Management.
- **Escalabilidade**: Auto‑scale de instâncias, *horizontal pod autoscaler* se AKS, cold‑start reduzido com planos de consumo.
- **Observabilidade**: OpenTelemetry, logs estruturados enviados ao Azure Monitor; métricas via Prometheus.

## Capítulo 06 – Barramento de Eventos

- **Message Broker**: Azure Service Bus (alternativa RabbitMQ) para comunicação assíncrona entre micro‑serviços.
- **Padrões**: Event‑Driven Architecture, eventos de domínio (`UserCreated`, `DataIngested`), tópicos de publicação/assinatura.
- **Processamento**: Workers Python (`celery` com Redis broker) ou Azure Functions para tarefas leves (ex.: notificação por e‑mail, geração de relatórios).
- **Garantia de Entrega**: At‑least‑once com deduplicação de idempotência.

## Capítulo 07 – Gateway de APIs e GraphQL

- **Gateway**: Azure API Management expõe endpoints REST e GraphQL.
- **GraphQL Layer**: Implementado com `strawberry‑graphql` sobre FastAPI, permitindo consultas seletivas para dashboards.
- **Rate Limiting & Throttling**: Políticas baseadas em plano de uso (cidadão, pesquisador, administrador).
- **Documentação**: OpenAPI + GraphQL introspection, UI Swagger + GraphiQL.

## Capítulo 08 – Segurança de Aplicação

- **Zero Trust**: Verificação de identidade em cada request, micro‑segurança por recurso.
- **Headers**: CSP, Referrer‑Policy, X‑Content‑Type‑Options, HSTS.
- **Criptografia**: TLS 1.3 em trânsito, Transparent Data Encryption (TDE) no PostgreSQL, criptografia de dados sensíveis no app.
- **LGPD / GDPR**: Consentimento de cookies, anonimização de dados pessoais, logs de auditoria.
- **Teste de Segurança**: SAST (Bandit, SonarQube) e DAST (OWASP ZAP) integrados ao pipeline CI/CD.

## Capítulo 09 – Estratégia de CI/CD

- **Pipeline**: GitHub Actions com stages – lint → unit tests → integration tests → build (Vite) → Docker image → deploy (Azure Static Web Apps + Azure App Service).
- **Qualidade**: ESLint + Prettier para JS/TS, Flake8 + MyPy para Python.
- **Testes**: Jest + Testing Library (frontend), Pytest + Async fixtures (backend).
- **Deploy**: Canary releases via Azure Deployment Slots; aprovação manual opcional.
- **Monitoramento Pós‑Deploy**: Smoke tests automáticos, alertas Sentry, métricas de performance.

*Próximos passos*: detalhar diagramas de sequência, definir contratos de API e planejar migração incremental para Next.js nos módulos críticos.*
