# Projeto de avaliação técnica - Portabilis tecnologia

> Aplicação VueJS + Typescript + Vite + TailwindCSS + NodeJS + JSON Server + PokéAPI

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* NodeJS 14 LTS em https://github.com/nodesource/distributions/blob/master/README.md
* JSON Server em https://yarnpkg.com/package/json-server
* Git em https://git-scm.com/
* Você tem uma máquina Linux (Gosto de distros ubuntu <3)

## 🚀 Instalando

Para instalar, clone o repositório e instale as dependências:
```
git clone https://github.com/jarielfloriano/frontend-portabilis.git
cd frontend-portabilis
yarn 
```

## ☕ Usando

Para uso local, utilize::
```
yarn run dev
```

Abra uma outra aba do terminal, para executar nosso json-server. (ele deve ser instalado como global: yarn global add json-server)
```
json-server --watch server.json --port 3001
```

Pronto! Nosso projeto já está executando, e pode ser acessado em:
```
http://localhost:3000
```

## 📝 Licença

MIT
