# Frontend Vue+Vite+TS+PrimeVue Boilerplate

## About

This boilerplate leverages the power of Vue.js to deliver a highly dynamic and interactive user interface. From real-time data updates to smooth transitions and animations, the platform offers a rich and engaging user experience. TypeScript is used to enhance code readability, maintainability, and scalability, enabling developers to build and maintain high-quality codebases with ease.

It also includes a responsive side menu that is ready to use out of the box. The side menu is designed to work seamlessly with the application's responsive interface, adapting to different screen sizes and resolutions.




### Main features and stack
- **Vue3**: An approachable, performant and versatile framework for building web user interfaces. [vuejs.org](https://vuejs.org/)
- **Vite**: Frontend build tooling that significantly improves the frontend development experience [vitejs.dev](https://vitejs.dev/)
- **TypeScript**: Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. [typescriptlang.org](https://www.typescriptlang.org/)
- **PrimeVue**: Rich set of open source native components for Vue. [primevue.org](https://primevue.org/setup)
- **PrimeFlex**: Lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well [primefaces.org/primeflex](https://www.primefaces.org/primeflex/)
- **Vue i18n**: Vue I18n is internationalization plugin for Vue.js [kazupon.github.io/vue-i18n](https://kazupon.github.io/vue-i18n/)
- **Vuelidate**: Simple, but powerful, lightweight model-based validation for Vue.js 3 [vuelidate-next.netlify.app](https://vuelidate-next.netlify.app/)
- Testing: **Jest** and **Cypress**
- Linterns: **ESLint** and **Prettier**


<br>
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
### Open cypress GUI

```
yarn cypress:open
```
### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

<br>

---

## General overview

---

<br>

![alt text]
