# Notas do Claude sobre este projeto

Este arquivo documenta as decisões tomadas na construção do site, para quem (humano ou IA) for dar manutenção ou pedir para uma IA continuar o trabalho depois.

## O que foi pedido

Um site completo (HTML/CSS/JS puro) de ensino de programação com:
- uma trilha baseada em um roadmap famoso — usei o **roadmap.sh/backend** como base;
- seções para organizar o conteúdo;
- aulas clicáveis com sugestões de onde estudar de graça;
- checkbox de aula concluída refletindo numa barra de progresso geral no topo;
- prova ao final de cada seção, gerando uma nota pelos acertos;
- um "boletim escolar" salvando essas notas.

## Decisões de conteúdo

- Escolhi **11 seções / 44 aulas / 55 perguntas de prova** como recorte do roadmap.sh/backend — cobre os blocos centrais (Internet, SO, uma linguagem, Git, SQL, NoSQL, APIs, Segurança, Cache, Testes/CI-CD, Arquitetura) sem virar uma enciclopédia difícil de manter.
- Os recursos linkados em cada aula são fontes gratuitas reais e estáveis (MDN, freeCodeCamp, documentações oficiais de Postgres/Redis/Docker/Kafka/RabbitMQ/MongoDB, OWASP, GitHub Docs etc.), priorizando conteúdo em português quando existia uma opção sólida.
- As perguntas de prova são originais, escritas para verificar entendimento conceitual básico de cada seção — não foram copiadas de nenhuma fonte.

## Decisões de design

Segui a diretriz de fugir dos "três clichês" de design gerado por IA (creme+terracota, quase-preto+neon único, jornal com hairlines). A direção escolhida:

- **Conceito visual**: a trilha é desenhada como uma **esteira de pipeline/CI** — um trilho vertical pontilhado com nós circulares que preenchem de âmbar (em progresso) para verde-sinal (concluído) conforme o usuário avança. Faz sentido para o assunto: CI/CD, pipelines e "status de build" são vocabulário do próprio roadmap de backend.
- **Paleta**: fundo tinta-noturna (`#0b0e14`/`#10141d`), âmbar `#e3a33f` para "em progresso", verde-sinal `#3ecf8e` para "concluído", coral `#e2665f` só para erro/resposta errada na prova. Dois acentos com papéis semânticos distintos, em vez de um único acento decorativo.
- **Tipografia**: `JetBrains Mono` para tudo que é "dado" (contadores, labels, eyebrows, números de seção) e `Sora` para títulos e corpo — separando visualmente "interface técnica" de "conteúdo para ler".
- **Sem localStorage em artifacts**: como isso é um site de arquivos reais (não um artifact React/HTML renderizado no chat), o uso de `localStorage` é apropriado e foi usado deliberadamente para persistir progresso e notas sem precisar de backend.

## Arquitetura do código

- `js/data.js` é a única fonte de verdade do conteúdo (`ROADMAP`). Nada de conteúdo está hardcoded em HTML.
- `js/app.js` cuida da home: renderiza o pipeline a partir de `ROADMAP` + `localStorage`, controla os dois modais (aula e prova) e recalcula a barra de progresso a cada mudança.
- `js/boletim.js` é independente de `app.js` (a página do boletim não precisa de toda a lógica de modais) e só lê `localStorage` + `ROADMAP` para montar a tabela e os cards de resumo.
- Chaves do `localStorage`: `trilhaBackend.progress.v1` (aulas concluídas) e `trilhaBackend.grades.v1` (notas por seção). O sufixo `.v1` foi colocado de propósito — se o formato dos dados salvos mudar no futuro, é mais seguro trocar para `.v2` do que tentar migrar dados antigos silenciosamente.

## Possíveis próximos passos (não implementados)

- Botão para "resetar progresso" (hoje só dá para fazer isso limpando o `localStorage` manualmente).
- Exportar o boletim em PDF.
- Mais seções do roadmap.sh/backend (GraphQL, WebSockets, Search Engines) caso o usuário queira expandir o conteúdo — o formato em `data.js` já foi pensado para isso ser só uma questão de adicionar objetos no array.
