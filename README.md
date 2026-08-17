# Angular 17 + NgRx Study 🚀

Projeto didático para estudar NgRx 17 com Angular 17.

## Tecnologias

- Angular 17
- NgRx 17
- RxJS 7
- TypeScript
- Docker
- LocalStorage

## Rodar com Docker

```bash
docker compose up --build
```

Acesse:

http://localhost:4200

## Rodar comandos dentro do container

```bash
docker compose exec angular sh
```

Depois:

```bash
npm run dev
```

## Fluxo principal

```text
Componente
   ↓
store.dispatch(Action)
   ↓
Effect
   ↓
switchMap
   ↓
"API" / LocalStorage
   ↓
Success Action
   ↓
Reducer
   ↓
Store
   ↓
Selector
   ↓
Componente
```

## Exercícios

1. Crie `updateUser`.
2. Crie `updateUserSuccess`.
3. Adicione `selectedUserId` no state.
4. Crie um selector para buscar um usuário por ID.
5. Crie uma action `clearUsers`.
6. Crie um Effect usando `exhaustMap`.
7. Troque o LocalStorage por uma API HTTP.
8. Adicione tratamento de erro com `catchError`.
9. Adicione `loading`, `error` e `success` ao state.
10. Abra o Redux DevTools e acompanhe cada Action.

## Pergunta-chave

Sempre que olhar para o código, tente responder:

> Quem disparou a Action?
> Quem ouviu a Action?
> O Effect chamou o quê?
> Qual Action voltou?
> O Reducer mudou o quê?
> Qual Selector entregou o quê para a tela?
