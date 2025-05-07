# Brinque-Brinde


---

## Índice

- [Tecnologias](#tecnologias)
- [Arquitetura de Pastas](#arquitetura-de-pastas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Clone](#instalação-e-clone)
- [Uso](#uso)
- [Contribuindo](#contribuindo)
  - [Atualização do README](#atualização-do-readme)
  - [Fluxo de Pull Request](#fluxo-de-pull-request)
  - [Revisão de Código](#revisão-de-código)
- [Licença](#licença)

---

## Tecnologias

- **HTML5**
- **CSS3** (estruturado em `css/components` e `css/pages`)
- **JavaScript** (ES6 Modules)
- **JSON** (dados de mock em `data/mock-data.json`)

---

## Arquitetura de Pastas

```plaintext
brinque-brinde/
├── pages/                # todas as telas HTML
│   └── home.html         # exemplo de página
├── components/           # pedaços de HTML reutilizáveis
│   ├── header.html       # cabeçalho
│   └── footer.html       # rodapé
    └── produtc-card.html # marcação exibe e descreve produto
├── assets/               # recursos estáticos
│   └── images/           # imagens
├── css/
│   ├── components/       # estilos de cada componente
│   │   ├── header.css    # estilos do cabeçalho
│   │   └── footer.css    # estilos do rodapé
        └── produtc-card.css    # estilos exibe e descreve produto 
│   └── pages/            # sobrescritas específicas de cada página
│       └── home.css      # estilos exclusivos da home
├── js/
│   ├── lib/              # bibliotecas de terceiros (ex: Axios, Lodash)
│   └── modules/          # código modularizado
│       ├── include.js    # carrega componentes HTML
│       └── pagina.js     # lógica exclusiva de páginas
        └── produtc-card.js  # interatividade para exibir e descrever produto
├── data/                 # mocks em JSON
│   └── mock-data.json
└── README.md             # documentação deste projeto
```

---

## Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- Git ([https://git-scm.com/](https://git-scm.com/))
- Navegador moderno (Chrome, Firefox, Edge, etc.)

---

## Instalação e Clone

1. Abra o terminal e acesse o diretório onde deseja clonar o projeto.

2. Execute o comando:

   ```bash
   git clone https://github.com/Brinque-e-Brinde/BrinqueBrinde.git
   ```

3. Acesse a pasta do projeto:

   ```bash
   cd Brinque-Brinde
   ```

---

## Uso

Após clonar o repositório, basta abrir qualquer arquivo HTML dentro da pasta `pages/` em seu navegador para testar as telas.

Exemplo:

```bash
# No terminal (Linux/Mac)
xdg-open pages/home.html

# No terminal (Windows)
start pages\home.html
```

---

## Contribuindo

Este projeto é feito em time! Para manter as boas práticas, seguir o checklist:

### Atualização do README

Sempre que novas pastas ou arquivos forem adicionados à estrutura de páginas ou componentes, atualize este `README.md` para refletir as mudanças na seção **Arquitetura de Pastas**.

### Fluxo de Pull Request

1. **Fork** do repositório para sua conta.

2. **Clone** o seu fork localmente.

3. Crie um **branch** para sua feature:

   ```bash
   git checkout -b feature/nome-da-feature
   ```

4. Faça suas alterações e **commit** com mensagens descritivas:

   ```bash
   git add .
   git commit -m "Descrição clara do que foi feito"
   ```

5. **Push** para o seu branch:

   ```bash
   git push origin feature/nome-da-feature
   ```

6. Abra um **Pull Request** neste repositório original, descrevendo o que foi implementado.

### Revisão de Código

- Cada PR deve ser revisado por **pelo menos duas pessoas**.
- O merge ficará **bloqueado** até que o PR receba **2 aprovações (accepts)**.
- Revisores devem comentar sobre bugs, inconsistências ou melhorias.
- Qualidade deve ser obrigatório atuar na revisão do PR, e deve verificar se a feature entregue está de acordo com os critérios de aceitação/testes desenvolvidos.
- Após duas aprovações, o PR poderá ser mergeado pelo mantenedor.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

