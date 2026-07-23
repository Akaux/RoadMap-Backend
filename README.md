# trilha/backend

Plataforma web de estudos para quem quer aprender desenvolvimento backend do zero, estruturada como uma trilha (roadmap) dividida em seções, com acompanhamento de progresso, provas por seção e boletim de notas.

Baseada na estrutura do [roadmap.sh/backend](https://roadmap.sh/backend).

## Funcionalidades

- **Trilha em 11 seções** (Internet, Sistema Operacional, Linguagem Backend, Git, Bancos Relacionais, NoSQL, APIs/REST, Segurança, Cache, Testes/CI-CD, Arquitetura), com 44 aulas no total.
- **Aulas clicáveis** — cada aula abre um modal com descrição e uma lista de recursos gratuitos para estudar (documentações oficiais, MDN, freeCodeCamp, cursos em vídeo etc).
- **Checkbox de conclusão** por aula, refletido em tempo real numa **barra de progresso geral** fixa no topo da página.
- **Prova ao final de cada seção** — questões de múltipla escolha sobre o conteúdo daquela seção, com nota calculada de 0 a 10 conforme os acertos.
- **Boletim** (`boletim.html`) — tabela com a nota de cada seção, data da prova, média geral e percentual da trilha concluída. Provas podem ser refeitas a qualquer momento.
- Progresso e notas ficam salvos no `localStorage` do navegador — não é necessário backend nem login.

## Como usar

Não há build nem dependências. Basta abrir o `index.html` num navegador, ou servir a pasta como um site estático:

```bash
# opção 1: abrir direto
open index.html

# opção 2: servidor local simples
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

Também pode ser publicado em qualquer serviço de hospedagem estática (GitHub Pages, Netlify, Vercel, Cloudflare Pages) — é só subir a pasta inteira.

## Estrutura do projeto

```
backend-roadmap/
├── index.html          # página inicial com a trilha (pipeline de seções)
├── boletim.html         # página do boletim de notas
├── css/
│   └── style.css        # design system e estilos de toda a aplicação
├── js/
│   ├── data.js           # conteúdo da trilha: seções, aulas, recursos e provas
│   ├── app.js             # lógica da home: progresso, modais de aula e de prova
│   └── boletim.js         # lógica da página de boletim
└── README.md
```

## Adicionando ou editando conteúdo

Todo o conteúdo da trilha vive em `js/data.js`, no array `ROADMAP`. Cada seção segue este formato:

```js
{
  id: "identificador-unico",
  numero: "01",
  titulo: "Nome da seção",
  resumo: "Frase curta sobre a seção",
  lessons: [
    {
      id: "id-unico-da-aula",
      titulo: "Nome da aula",
      desc: "Descrição do que será aprendido",
      recursos: [
        { nome: "Nome do recurso", url: "https://..." }
      ]
    }
  ],
  quiz: [
    { q: "Pergunta?", opcoes: ["A", "B", "C", "D"], correta: 1 } // índice da opção correta
  ]
}
```

Basta adicionar, remover ou editar itens nesses arrays — a home e o boletim se atualizam automaticamente, sem precisar tocar em HTML, CSS ou nas outras partes do JS.

## Tecnologias

HTML, CSS e JavaScript puros (vanilla) — sem frameworks, sem build step, sem dependências externas além das fontes do Google Fonts (Sora e JetBrains Mono).

## Créditos

Estrutura de conteúdo inspirada no roadmap gratuito e open-source [roadmap.sh/backend](https://roadmap.sh/backend). Os links de estudo apontam para fontes gratuitas de terceiros (MDN, freeCodeCamp, documentações oficiais etc.) — este projeto não é afiliado a nenhuma delas.
