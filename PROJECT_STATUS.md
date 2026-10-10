# Our Little World ♡

Uma experiência interativa web criada para celebrar a história real de Jones e Cami.

## Visão Geral

This project is a static web experience inspired by cozy indie worlds, pixel-art landscapes, soft particle effects, and a romantic personal narrative. It includes:

- mundo interativo com elementos clicáveis
- progresso salvo em localStorage
- painel de conquistas
- minas de tesouro e coelhinhos fofos
- carta de amor personalizada
- música procedural por Web Audio API
- suporte para modo foto e acessibilidade

## Como rodar localmente

### Opção 1: abrir direto no navegador

- baixe ou clone o repositório
- abra `index.html` no navegador

### Opção 2: servir localmente com Python

```bash
python3 -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Estrutura principal

- `index.html` - estrutura da interface
- `styles.css` - visual e responsividade
- `config.js` - textos, nomes, conquistas e conteúdo do mundo
- `state.js` - persistência no navegador
- `particles.js` - sistema de partículas
- `audio.js` - sintetizador procedural
- `interactions.js` - interações do mundo
- `app.js` - boot e eventos

## Deploy

Você pode publicar facilmente em:

- Vercel
- Netlify
- GitHub Pages

Para Vercel/Netlify, basta empurrar a pasta estática para o serviço e definir a raiz do app como a pasta do projeto.

## Personalização

Os textos principais estão em `config.js` para facilitar ajustes sem mexer no restante do código.

Se quiser deixar ainda mais pessoal, altere:

- `APP_CONFIG.names.hero` e `.heroine`
- `APP_CONFIG.letter.paragraphs`
- `APP_CONFIG.achievements`
- `APP_CONFIG.story.summary`

## Observações

- O áudio só começa após interação do usuário por padrão, por causa das restrições do navegador.
- O progresso é salvo automaticamente em `localStorage`.
- O botão de modo foto esconde os controles e deixa só a paisagem.

## Créditos de inspiração

- Minecraft-inspired worldbuilding
- cozy indies
- UI dreamy e romântica
