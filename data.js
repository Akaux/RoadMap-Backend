
const ROADMAP = [
  {
    id: "internet",
    numero: "01",
    titulo: "Internet",
    resumo: "Como a rede por trás de tudo realmente funciona.",
    lessons: [
      {
        id: "internet-como-funciona",
        titulo: "Como a Internet funciona",
        desc: "Entenda o caminho que um dado percorre entre o seu computador e um servidor do outro lado do mundo: pacotes, roteadores e protocolos.",
        recursos: [
          { nome: "MDN — Como funciona a Internet", url: "https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work" },
          { nome: "roadmap.sh — Internet", url: "https://roadmap.sh/backend" },
          { nome: "freeCodeCamp (YouTube)", url: "https://www.youtube.com/c/Freecodecamp" }
        ]
      },
      {
        id: "internet-http",
        titulo: "HTTP e HTTPS",
        desc: "O protocolo que faz a web conversar: métodos, cabeçalhos, status codes e a camada de segurança do HTTPS.",
        recursos: [
          { nome: "MDN — Visão geral do HTTP", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview" },
          { nome: "HTTP Status Dogs (referência divertida)", url: "https://httpstatusdogs.com/" },
          { nome: "Curso em Vídeo (YouTube)", url: "https://www.youtube.com/c/CursoemVideo" }
        ]
      },
      {
        id: "internet-dns",
        titulo: "DNS e Domínios",
        desc: "Como um nome como 'exemplo.com' se transforma no endereço IP de um servidor.",
        recursos: [
          { nome: "Cloudflare — O que é DNS", url: "https://www.cloudflare.com/pt-br/learning/dns/what-is-dns/" },
          { nome: "MDN — Domain Name System", url: "https://developer.mozilla.org/en-US/docs/Glossary/DNS" }
        ]
      },
      {
        id: "internet-hosting",
        titulo: "Hospedagem (Hosting)",
        desc: "Onde e como uma aplicação backend fica disponível para o mundo: VPS, PaaS e serviços de nuvem.",
        recursos: [
          { nome: "roadmap.sh — Backend", url: "https://roadmap.sh/backend" },
          { nome: "Documentação Render", url: "https://render.com/docs" },
          { nome: "Documentação Railway", url: "https://docs.railway.app/" }
        ]
      }
    ],
    quiz: [
      { q: "O que é responsável por traduzir um nome de domínio em um endereço IP?", opcoes: ["DNS", "HTTP", "TCP", "HTML"], correta: 0 },
      { q: "Qual protocolo adiciona uma camada de criptografia ao HTTP?", opcoes: ["FTP", "HTTPS", "SMTP", "SSH"], correta: 1 },
      { q: "O que são 'pacotes' na comunicação de rede?", opcoes: ["Arquivos de configuração", "Pequenos blocos de dados transmitidos pela rede", "Bibliotecas de código", "Bancos de dados"], correta: 1 },
      { q: "Qual status HTTP indica que um recurso não foi encontrado?", opcoes: ["200", "301", "404", "500"], correta: 2 },
      { q: "O que é um servidor de hospedagem (hosting)?", opcoes: ["Um editor de código", "Uma máquina que mantém sua aplicação acessível na internet", "Um protocolo de e-mail", "Um tipo de banco de dados"], correta: 1 }
    ]
  },
  {
    id: "sistema-operacional",
    numero: "02",
    titulo: "Sistema Operacional & Terminal",
    resumo: "O chão de fábrica onde toda aplicação backend roda.",
    lessons: [
      {
        id: "so-terminal",
        titulo: "Terminal e Linha de Comando",
        desc: "Navegação, manipulação de arquivos e automação de tarefas usando o shell.",
        recursos: [
          { nome: "Curso gratuito — freeCodeCamp: Linux", url: "https://www.freecodecamp.org/news/tag/linux/" },
          { nome: "Explainshell (entenda comandos)", url: "https://explainshell.com/" }
        ]
      },
      {
        id: "so-processos",
        titulo: "Processos e Threads",
        desc: "Como o sistema operacional executa e gerencia múltiplas tarefas ao mesmo tempo.",
        recursos: [
          { nome: "roadmap.sh — Backend", url: "https://roadmap.sh/backend" },
          { nome: "MDN — Concurrency model", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop" }
        ]
      },
      {
        id: "so-memoria",
        titulo: "Gerenciamento de Memória",
        desc: "Stack, heap, alocação e coleta de lixo — o que acontece por trás da sua aplicação.",
        recursos: [
          { nome: "freeCodeCamp — Memory Management", url: "https://www.freecodecamp.org/news/" }
        ]
      },
      {
        id: "so-posix",
        titulo: "Fundamentos POSIX",
        desc: "Permissões de arquivo, usuários, variáveis de ambiente e outros conceitos básicos de sistemas Unix-like.",
        recursos: [
          { nome: "Documentação oficial Ubuntu", url: "https://ubuntu.com/tutorials" },
          { nome: "Linux Journey", url: "https://linuxjourney.com/" }
        ]
      }
    ],
    quiz: [
      { q: "O que é um 'processo' no sistema operacional?", opcoes: ["Um arquivo de texto", "Uma instância de um programa em execução", "Um tipo de banco de dados", "Um protocolo de rede"], correta: 1 },
      { q: "Qual comando lista os arquivos de um diretório no Linux?", opcoes: ["ls", "cd", "rm", "cp"], correta: 0 },
      { q: "O que é uma 'thread'?", opcoes: ["Uma unidade de execução dentro de um processo", "Um tipo de arquivo", "Um servidor web", "Um protocolo de segurança"], correta: 0 },
      { q: "Onde ficam armazenadas variáveis locais de curta duração durante a execução de um programa?", opcoes: ["No heap", "Na stack", "No disco rígido", "No DNS"], correta: 1 },
      { q: "O que uma variável de ambiente costuma armazenar?", opcoes: ["Imagens do sistema", "Configurações usadas por processos, como chaves e caminhos", "Registros do banco de dados", "Pacotes de rede"], correta: 1 }
    ]
  },
  {
    id: "linguagem-backend",
    numero: "03",
    titulo: "Uma Linguagem Backend",
    resumo: "Escolha uma linguagem e domine seus fundamentos.",
    lessons: [
      {
        id: "lang-escolha",
        titulo: "Escolhendo sua Linguagem",
        desc: "Node.js, Python, Java, Go, PHP, Ruby — panorama das opções mais usadas no mercado backend.",
        recursos: [
          { nome: "roadmap.sh — Backend", url: "https://roadmap.sh/backend" },
          { nome: "Rocketseat (conteúdo gratuito)", url: "https://www.youtube.com/c/Rocketseat" }
        ]
      },
      {
        id: "lang-sintaxe",
        titulo: "Sintaxe e Fundamentos",
        desc: "Variáveis, funções, condicionais e laços — a base que se repete em qualquer linguagem.",
        recursos: [
          { nome: "freeCodeCamp — currículo completo", url: "https://www.freecodecamp.org/learn" },
          { nome: "Curso em Vídeo (YouTube)", url: "https://www.youtube.com/c/CursoemVideo" }
        ]
      },
      {
        id: "lang-estruturas",
        titulo: "Estruturas de Dados na Prática",
        desc: "Listas, filas, pilhas, mapas e árvores aplicados a problemas reais de backend.",
        recursos: [
          { nome: "MDN — Estruturas de dados em JS", url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures" },
          { nome: "VisuAlgo (visualização interativa)", url: "https://visualgo.net/" }
        ]
      },
      {
        id: "lang-assincrono",
        titulo: "Programação Assíncrona",
        desc: "Callbacks, promises, async/await e como lidar com operações que não bloqueiam a aplicação.",
        recursos: [
          { nome: "MDN — Async JS", url: "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous" },
          { nome: "Node.js — documentação oficial", url: "https://nodejs.org/en/docs" }
        ]
      }
    ],
    quiz: [
      { q: "Qual das opções abaixo NÃO é uma linguagem comumente usada em backend?", opcoes: ["Python", "Go", "CSS", "Java"], correta: 2 },
      { q: "O que é uma função?", opcoes: ["Um bloco de código reutilizável que executa uma tarefa", "Um tipo de banco de dados", "Um protocolo de rede", "Um arquivo de configuração"], correta: 0 },
      { q: "Qual estrutura de dados segue o princípio 'primeiro a entrar, primeiro a sair' (FIFO)?", opcoes: ["Pilha", "Fila", "Árvore", "Mapa"], correta: 1 },
      { q: "O que 'async/await' ajuda a lidar melhor no código?", opcoes: ["Estilização visual", "Operações assíncronas, como chamadas de rede", "Armazenamento em cache", "Roteamento de URLs"], correta: 1 },
      { q: "O que é uma 'pilha' (stack) como estrutura de dados?", opcoes: ["Uma estrutura FIFO", "Uma estrutura LIFO (último a entrar, primeiro a sair)", "Um tipo de banco relacional", "Um protocolo HTTP"], correta: 1 }
    ]
  },
  {
    id: "git",
    numero: "04",
    titulo: "Controle de Versão (Git)",
    resumo: "Rastreie, organize e colabore no histórico do seu código.",
    lessons: [
      {
        id: "git-fundamentos",
        titulo: "Fundamentos do Git",
        desc: "Repositórios, commits, staging area e o ciclo básico de versionamento.",
        recursos: [
          { nome: "Git — livro oficial (Pro Git, gratuito)", url: "https://git-scm.com/book/pt-br/v2" },
          { nome: "GitHub Docs", url: "https://docs.github.com/pt" }
        ]
      },
      {
        id: "git-branches",
        titulo: "Branches e Merge",
        desc: "Trabalhando com ramificações paralelas de código e unindo o trabalho da equipe.",
        recursos: [
          { nome: "Learn Git Branching (interativo)", url: "https://learngitbranching.js.org/?locale=pt_BR" }
        ]
      },
      {
        id: "git-github",
        titulo: "GitHub e Colaboração",
        desc: "Pull requests, forks, issues e fluxo de trabalho colaborativo em times.",
        recursos: [
          { nome: "GitHub Docs — Colaborando", url: "https://docs.github.com/pt/pull-requests" }
        ]
      },
      {
        id: "git-boas-praticas",
        titulo: "Boas Práticas de Commits",
        desc: "Mensagens claras, commits atômicos e convenções como o Conventional Commits.",
        recursos: [
          { nome: "Conventional Commits", url: "https://www.conventionalcommits.org/pt-br/v1.0.0/" }
        ]
      }
    ],
    quiz: [
      { q: "O que é um 'commit' no Git?", opcoes: ["Um snapshot das mudanças no código em um determinado ponto", "Um tipo de servidor", "Um banco de dados", "Um protocolo de rede"], correta: 0 },
      { q: "Para que serve uma 'branch' (ramificação)?", opcoes: ["Para deletar arquivos", "Para desenvolver funcionalidades isoladamente do código principal", "Para hospedar o site", "Para criptografar senhas"], correta: 1 },
      { q: "O que é um Pull Request?", opcoes: ["Um pedido para revisar e mesclar mudanças de código", "Um tipo de teste automatizado", "Um comando de terminal", "Uma variável de ambiente"], correta: 0 },
      { q: "O que o comando 'git clone' faz?", opcoes: ["Apaga um repositório", "Copia um repositório remoto para a máquina local", "Cria uma nova branch", "Envia um e-mail"], correta: 1 },
      { q: "Por que mensagens de commit claras são importantes?", opcoes: ["Elas não têm importância real", "Facilitam entender o histórico e a colaboração em equipe", "Aumentam a velocidade do servidor", "Reduzem o tamanho do banco de dados"], correta: 1 }
    ]
  },
  {
    id: "sql",
    numero: "05",
    titulo: "Bancos de Dados Relacionais",
    resumo: "Modele, consulte e otimize dados estruturados.",
    lessons: [
      {
        id: "sql-modelagem",
        titulo: "Modelagem de Dados",
        desc: "Entidades, relacionamentos e como desenhar um esquema de banco de dados.",
        recursos: [
          { nome: "PostgreSQL — Documentação oficial", url: "https://www.postgresql.org/docs/" },
          { nome: "roadmap.sh — Backend", url: "https://roadmap.sh/backend" }
        ]
      },
      {
        id: "sql-pratica",
        titulo: "SQL na Prática",
        desc: "SELECT, JOIN, WHERE, GROUP BY — a linguagem que conversa com bancos relacionais.",
        recursos: [
          { nome: "SQLBolt (interativo e gratuito)", url: "https://sqlbolt.com/" },
          { nome: "W3Schools SQL", url: "https://www.w3schools.com/sql/" }
        ]
      },
      {
        id: "sql-normalizacao",
        titulo: "Normalização",
        desc: "Organizando tabelas para reduzir redundância e manter a integridade dos dados.",
        recursos: [
          { nome: "PostgreSQL — Documentação oficial", url: "https://www.postgresql.org/docs/" }
        ]
      },
      {
        id: "sql-indices",
        titulo: "Índices e Performance",
        desc: "Como acelerar consultas em bancos grandes usando índices e boas práticas de query.",
        recursos: [
          { nome: "Use The Index, Luke!", url: "https://use-the-index-luke.com/" }
        ]
      }
    ],
    quiz: [
      { q: "Qual comando SQL é usado para buscar dados de uma tabela?", opcoes: ["INSERT", "SELECT", "DELETE", "CREATE"], correta: 1 },
      { q: "O que é uma 'chave estrangeira' (foreign key)?", opcoes: ["Um índice de texto", "Uma coluna que referencia a chave primária de outra tabela", "Um tipo de senha", "Um comando de backup"], correta: 1 },
      { q: "Qual é o principal objetivo da normalização?", opcoes: ["Aumentar a redundância dos dados", "Reduzir redundância e manter integridade dos dados", "Deixar o banco mais lento", "Remover todas as tabelas"], correta: 1 },
      { q: "Para que serve um índice em uma tabela?", opcoes: ["Para deixar consultas mais lentas", "Para acelerar a busca de dados", "Para apagar registros automaticamente", "Para criptografar a tabela"], correta: 1 },
      { q: "O comando JOIN em SQL é usado para:", opcoes: ["Apagar uma tabela", "Combinar dados de duas ou mais tabelas", "Criar um usuário", "Fazer backup do banco"], correta: 1 }
    ]
  },
  {
    id: "nosql",
    numero: "06",
    titulo: "Bancos de Dados NoSQL",
    resumo: "Dados flexíveis para casos que fogem do modelo relacional.",
    lessons: [
      {
        id: "nosql-vs-relacional",
        titulo: "Documentos vs Relacional",
        desc: "Quando um modelo de documentos ou chave-valor faz mais sentido que tabelas relacionais.",
        recursos: [
          { nome: "MongoDB University (gratuito)", url: "https://learn.mongodb.com/" }
        ]
      },
      {
        id: "nosql-mongo",
        titulo: "MongoDB na Prática",
        desc: "Coleções, documentos e consultas básicas em um dos bancos NoSQL mais populares.",
        recursos: [
          { nome: "Documentação oficial MongoDB", url: "https://www.mongodb.com/docs/" }
        ]
      },
      {
        id: "nosql-keyvalue",
        titulo: "Key-Value Stores",
        desc: "Armazenamento simples e ultrarrápido de pares chave-valor, como Redis e DynamoDB.",
        recursos: [
          { nome: "Redis — documentação oficial", url: "https://redis.io/docs/latest/" }
        ]
      },
      {
        id: "nosql-quando-usar",
        titulo: "Quando Usar NoSQL",
        desc: "Trade-offs entre consistência, escalabilidade e flexibilidade de esquema.",
        recursos: [
          { nome: "roadmap.sh — Backend", url: "https://roadmap.sh/backend" }
        ]
      }
    ],
    quiz: [
      { q: "O que caracteriza um banco de dados NoSQL do tipo 'documento'?", opcoes: ["Armazena dados em tabelas rígidas", "Armazena dados em documentos flexíveis, geralmente JSON", "Só armazena números", "Só funciona offline"], correta: 1 },
      { q: "O MongoDB organiza seus dados em:", opcoes: ["Tabelas e linhas", "Coleções e documentos", "Grafos e nós", "Planilhas"], correta: 1 },
      { q: "Um banco 'chave-valor' como o Redis é indicado principalmente para:", opcoes: ["Relatórios financeiros complexos", "Acesso rápido a dados simples, como cache", "Armazenar vídeos em alta resolução", "Substituir todo banco relacional"], correta: 1 },
      { q: "Uma vantagem comum do NoSQL sobre o modelo relacional é:", opcoes: ["Esquema mais flexível para dados não estruturados", "Sempre ser mais rápido em qualquer cenário", "Eliminar a necessidade de índices", "Não precisar de servidor"], correta: 0 },
      { q: "Quando normalmente vale mais a pena considerar NoSQL?", opcoes: ["Quando os dados são altamente relacionais e exigem transações complexas", "Quando o volume é enorme e o esquema muda com frequência", "Nunca, SQL sempre é melhor", "Apenas em aplicações sem banco de dados"], correta: 1 }
    ]
  },
  {
    id: "apis",
    numero: "07",
    titulo: "APIs e REST",
    resumo: "A ponte de comunicação entre sistemas.",
    lessons: [
      {
        id: "api-fundamentos",
        titulo: "Fundamentos de API",
        desc: "O que é uma API, endpoints, requisições e respostas.",
        recursos: [
          { nome: "MDN — Introdução a APIs Web", url: "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" }
        ]
      },
      {
        id: "api-rest",
        titulo: "Design de API REST",
        desc: "Recursos, verbos HTTP, status codes e convenções de uma API bem desenhada.",
        recursos: [
          { nome: "restfulapi.net (guia gratuito)", url: "https://restfulapi.net/" },
          { nome: "roadmap.sh — Backend", url: "https://roadmap.sh/backend" }
        ]
      },
      {
        id: "api-auth",
        titulo: "Autenticação e Autorização",
        desc: "Sessions, tokens JWT e OAuth — como saber quem está fazendo a requisição e o que ela pode acessar.",
        recursos: [
          { nome: "jwt.io (referência e debugger)", url: "https://jwt.io/introduction" }
        ]
      },
      {
        id: "api-docs",
        titulo: "Documentação de API",
        desc: "Como documentar endpoints de forma clara usando ferramentas como o OpenAPI/Swagger.",
        recursos: [
          { nome: "Swagger / OpenAPI — documentação", url: "https://swagger.io/docs/" }
        ]
      }
    ],
    quiz: [
      { q: "O que significa REST em APIs?", opcoes: ["Um framework específico", "Um estilo arquitetural para sistemas distribuídos", "Uma linguagem de programação", "Um banco de dados"], correta: 1 },
      { q: "Qual verbo HTTP é normalmente usado para criar um novo recurso?", opcoes: ["GET", "POST", "DELETE", "OPTIONS"], correta: 1 },
      { q: "O que é um token JWT usado para?", opcoes: ["Armazenar imagens", "Transmitir informações de autenticação de forma segura", "Estilizar páginas web", "Compactar arquivos"], correta: 1 },
      { q: "Qual status HTTP normalmente indica sucesso na criação de um recurso?", opcoes: ["200", "201", "404", "500"], correta: 1 },
      { q: "Para que serve o Swagger/OpenAPI?", opcoes: ["Para hospedar sites", "Para documentar e descrever APIs de forma padronizada", "Para compilar código", "Para gerenciar banco de dados"], correta: 1 }
    ]
  },
  {
    id: "seguranca",
    numero: "08",
    titulo: "Segurança na Web",
    resumo: "Proteja aplicações e dados de ameaças comuns.",
    lessons: [
      {
        id: "seg-owasp",
        titulo: "OWASP Top 10",
        desc: "As vulnerabilidades mais críticas e comuns em aplicações web, segundo a OWASP.",
        recursos: [
          { nome: "OWASP Top 10 (oficial, gratuito)", url: "https://owasp.org/www-project-top-ten/" }
        ]
      },
      {
        id: "seg-https",
        titulo: "HTTPS e Criptografia",
        desc: "Como certificados TLS/SSL protegem dados em trânsito.",
        recursos: [
          { nome: "Let's Encrypt — como funciona", url: "https://letsencrypt.org/pt-br/how-it-works/" }
        ]
      },
      {
        id: "seg-cors",
        titulo: "CORS",
        desc: "Por que o navegador bloqueia certas requisições entre domínios diferentes, e como liberar isso com segurança.",
        recursos: [
          { nome: "MDN — CORS", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS" }
        ]
      },
      {
        id: "seg-sanitizacao",
        titulo: "Sanitização de Dados",
        desc: "Prevenindo SQL Injection, XSS e outros ataques por meio da validação e limpeza de entradas.",
        recursos: [
          { nome: "OWASP Cheat Sheet Series (gratuito)", url: "https://cheatsheetseries.owasp.org/" }
        ]
      }
    ],
    quiz: [
      { q: "O que é o OWASP Top 10?", opcoes: ["Uma lista das 10 vulnerabilidades mais críticas em aplicações web", "Um framework de backend", "Um tipo de banco de dados", "Uma linguagem de programação"], correta: 0 },
      { q: "O que o HTTPS adiciona ao HTTP?", opcoes: ["Mais velocidade apenas", "Uma camada de criptografia (TLS/SSL)", "Suporte a vídeos", "Cache automático"], correta: 1 },
      { q: "CORS é um mecanismo que controla:", opcoes: ["A velocidade da internet", "Quais origens podem acessar recursos de um servidor", "O tamanho dos arquivos", "A cor da interface"], correta: 1 },
      { q: "SQL Injection é um ataque que explora:", opcoes: ["Falta de sanitização de dados enviados para consultas SQL", "Erros de CSS", "Falhas em imagens", "Problemas de DNS"], correta: 0 },
      { q: "O que é XSS (Cross-Site Scripting)?", opcoes: ["Um protocolo de rede", "Um ataque que injeta scripts maliciosos em páginas vistas por outros usuários", "Um tipo de banco de dados", "Um framework de testes"], correta: 1 }
    ]
  },
  {
    id: "cache",
    numero: "09",
    titulo: "Cache e Performance",
    resumo: "Entregue respostas mais rápidas evitando trabalho repetido.",
    lessons: [
      {
        id: "cache-conceito",
        titulo: "O que é Cache",
        desc: "Armazenando resultados temporários para evitar processamento repetido e acelerar respostas.",
        recursos: [
          { nome: "MDN — HTTP Caching", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Caching" }
        ]
      },
      {
        id: "cache-redis",
        titulo: "Redis na Prática",
        desc: "Usando um banco em memória para cache de dados de alta frequência de acesso.",
        recursos: [
          { nome: "Redis — documentação oficial", url: "https://redis.io/docs/latest/" }
        ]
      },
      {
        id: "cache-cdn",
        titulo: "CDN",
        desc: "Como redes de distribuição de conteúdo aproximam os dados dos usuários finais.",
        recursos: [
          { nome: "Cloudflare — O que é uma CDN", url: "https://www.cloudflare.com/pt-br/learning/cdn/what-is-a-cdn/" }
        ]
      },
      {
        id: "cache-estrategias",
        titulo: "Estratégias de Cache",
        desc: "Cache-aside, write-through e políticas de expiração — escolhendo a estratégia certa.",
        recursos: [
          { nome: "roadmap.sh — Backend", url: "https://roadmap.sh/backend" }
        ]
      }
    ],
    quiz: [
      { q: "Qual o principal benefício de usar cache?", opcoes: ["Aumentar o uso de disco", "Reduzir tempo de resposta evitando reprocessamento", "Deixar o código mais complexo", "Diminuir a segurança"], correta: 1 },
      { q: "O Redis é comumente usado como:", opcoes: ["Editor de texto", "Banco de dados em memória para cache e dados rápidos", "Servidor de e-mail", "Framework de frontend"], correta: 1 },
      { q: "Uma CDN ajuda principalmente a:", opcoes: ["Criptografar senhas", "Aproximar o conteúdo do usuário, reduzindo latência", "Compilar código", "Criar bancos de dados"], correta: 1 },
      { q: "Na estratégia 'cache-aside', quem é responsável por buscar e popular o cache?", opcoes: ["O banco de dados sozinho", "A aplicação, sob demanda", "O navegador do usuário", "O DNS"], correta: 1 },
      { q: "O que acontece quando um item no cache expira?", opcoes: ["Ele fica permanente", "Ele pode ser removido ou precisa ser atualizado na próxima busca", "O servidor trava", "O banco de dados é apagado"], correta: 1 }
    ]
  },
  {
    id: "testes-cicd",
    numero: "10",
    titulo: "Testes e CI/CD",
    resumo: "Garanta qualidade e automatize a entrega do código.",
    lessons: [
      {
        id: "testes-tipos",
        titulo: "Tipos de Teste",
        desc: "Testes unitários, de integração e end-to-end — o que cada um garante.",
        recursos: [
          { nome: "freeCodeCamp — Testing", url: "https://www.freecodecamp.org/news/tag/testing/" }
        ]
      },
      {
        id: "testes-unitarios",
        titulo: "Testes Unitários",
        desc: "Testando pequenas unidades de código isoladamente para prevenir regressões.",
        recursos: [
          { nome: "Jest — documentação oficial", url: "https://jestjs.io/pt-BR/" }
        ]
      },
      {
        id: "testes-ci",
        titulo: "Integração Contínua",
        desc: "Automatizando a execução de testes a cada mudança no código enviada ao repositório.",
        recursos: [
          { nome: "GitHub Actions — documentação", url: "https://docs.github.com/pt/actions" }
        ]
      },
      {
        id: "testes-cd",
        titulo: "Deploy Contínuo",
        desc: "Automatizando a publicação de novas versões da aplicação em produção com segurança.",
        recursos: [
          { nome: "GitHub Actions — documentação", url: "https://docs.github.com/pt/actions" }
        ]
      }
    ],
    quiz: [
      { q: "O que um teste unitário verifica?", opcoes: ["O sistema inteiro de uma vez", "Uma pequena unidade de código isoladamente", "Apenas o design da interface", "A velocidade da internet"], correta: 1 },
      { q: "O que significa CI (Integração Contínua)?", opcoes: ["Compilar apenas uma vez ao ano", "Integrar e testar mudanças de código automaticamente e com frequência", "Um tipo de banco de dados", "Um framework de frontend"], correta: 1 },
      { q: "Qual a vantagem de automatizar testes?", opcoes: ["Aumentar erros manuais", "Detectar problemas mais cedo e com menos esforço humano", "Tornar o deploy mais lento", "Eliminar a necessidade de código"], correta: 1 },
      { q: "O que é Deploy Contínuo (CD)?", opcoes: ["Escrever código sem testar", "Automatizar a publicação de novas versões em produção", "Um tipo de teste manual", "Um banco de dados na nuvem"], correta: 1 },
      { q: "Um teste de integração verifica principalmente:", opcoes: ["Se partes diferentes do sistema funcionam bem juntas", "Apenas o CSS da aplicação", "A velocidade do DNS", "O número de commits"], correta: 0 }
    ]
  },
  {
    id: "arquitetura",
    numero: "11",
    titulo: "Arquitetura e Escalabilidade",
    resumo: "Estruture sistemas que aguentam crescer.",
    lessons: [
      {
        id: "arq-monolito",
        titulo: "Monolito vs Microsserviços",
        desc: "Os trade-offs entre construir uma aplicação única ou dividi-la em serviços independentes.",
        recursos: [
          { nome: "roadmap.sh — Backend", url: "https://roadmap.sh/backend" }
        ]
      },
      {
        id: "arq-brokers",
        titulo: "Message Brokers",
        desc: "Como sistemas se comunicam de forma assíncrona usando filas de mensagens, como RabbitMQ e Kafka.",
        recursos: [
          { nome: "Apache Kafka — documentação", url: "https://kafka.apache.org/documentation/" },
          { nome: "RabbitMQ — tutoriais oficiais", url: "https://www.rabbitmq.com/tutorials" }
        ]
      },
      {
        id: "arq-containers",
        titulo: "Containers e Docker",
        desc: "Empacotando aplicações com todas as suas dependências para rodar de forma consistente em qualquer lugar.",
        recursos: [
          { nome: "Docker — documentação oficial", url: "https://docs.docker.com/get-started/" }
        ]
      },
      {
        id: "arq-load-balancing",
        titulo: "Load Balancing",
        desc: "Distribuindo requisições entre múltiplos servidores para melhorar disponibilidade e desempenho.",
        recursos: [
          { nome: "Cloudflare — O que é Load Balancing", url: "https://www.cloudflare.com/pt-br/learning/performance/what-is-load-balancing/" }
        ]
      }
    ],
    quiz: [
      { q: "Qual a principal característica de uma arquitetura monolítica?", opcoes: ["Serviços totalmente independentes", "Toda a aplicação roda como uma única unidade", "Não tem banco de dados", "Só funciona na nuvem"], correta: 1 },
      { q: "Para que serve um message broker como o Kafka ou RabbitMQ?", opcoes: ["Estilizar páginas web", "Permitir comunicação assíncrona entre sistemas via mensagens/filas", "Compilar código-fonte", "Armazenar imagens"], correta: 1 },
      { q: "O que o Docker permite fazer?", opcoes: ["Empacotar uma aplicação e suas dependências em um container portátil", "Substituir o sistema operacional", "Eliminar a necessidade de testes", "Criar bancos de dados automaticamente"], correta: 0 },
      { q: "Qual o objetivo do load balancing?", opcoes: ["Concentrar toda a carga em um único servidor", "Distribuir requisições entre vários servidores", "Apagar dados antigos", "Criptografar senhas"], correta: 1 },
      { q: "Uma vantagem dos microsserviços é:", opcoes: ["Times podem desenvolver e escalar serviços de forma independente", "Sempre são mais simples que um monolito", "Eliminam a necessidade de rede", "Não precisam de monitoramento"], correta: 0 }
    ]
  }
];
