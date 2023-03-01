# Frontend Vue+TS+PrimeVue Boilerplate

## About
### Main features and stack
- Vue3: An approachable, performant and versatile framework for building web user interfaces. [vuejs.org](https://vuejs.org/)
- TypeScript: Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. [typescriptlang.org](https://www.typescriptlang.org/)
- PrimeVue: Rich set of open source native components for Vue. [primevue.org](https://primevue.org/setup)
- PrimeFlex: Lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well [primefaces.org/primeflex](https://www.primefaces.org/primeflex/)
- Vue i18n: Vue I18n is internationalization plugin for Vue.js [kazupon.github.io/vue-i18n](https://kazupon.github.io/vue-i18n/)
- Vuelidate: Simple, but powerful, lightweight model-based validation for Vue.js 3 [vuelidate-next.netlify.app](https://vuelidate-next.netlify.app/)
- Testing: Jest and Cypress
- Linterns: ESLint and Prettier


## Index

- 🛠 [Project Setup](#project-setup)
- 👁 [General Overview](#general-overview)

  <br>

---

## Project setup

---

```bash
yarn install
```

### Environment variables

If you want to use environment variables modify .env.example contents acordingly and copy to new file named as follows:

```bash
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

For example, to use variables for emulator mode (npm run serve emulator) and ignored by git name it ".dev.emulator.local"

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

<br>

---

## General overview

---

<br>

![alt text]
