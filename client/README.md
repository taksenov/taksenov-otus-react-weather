# Клиент приложение We//ther

## Клиент

```
create-react-app
typescript

react: lazy+hooks+classes
react-router-dom
redux
redux-saga
```

## Разработка

### Основа

- Клиент

  Используется **create-react-app**

### Скрипты

- Клиент

  Используется **yarn**

  Запуск сервера:

```
cd ./client
yarn start        // девелопер сервер
yarn start-prod   // девелопер сервер, с переменными окружения для продакшена
yarn start-dev    // девелопер сервер

yarn build        // билд на девелоп
yarn build-prod   // билд на продакшен
yarn build-dev    // билд на девелоп
```

На ветвление сборок влияет переменная окружения `REACT_APP_STAGE` которая
прописана в каждом сценарии: для продакшена это `REACT_APP_STAGE=production` для
девелопмент билда это `REACT_APP_STAGE=development`

**Особое внимание!** если собрать билд командой `yarn build`, то он соберется с
настройками для девелопмента. Соответсвенно такой билд на продакшене
использовать нельзя. В общем билд для продакшена собирать только командой
`yarn build-prod`.

### Верстка в проекте

- Для верстки проекта используется препроцессор Sass(SCSS). Используется подход
  реализующий CSS-modules. Все файлы стилей должны именоваться согласно
  документации: `*.module.scss`. Структура файлов SCSS должна быть следующей:

```scss
// MenuItem

// Variables
// =========

// Selectors
// =========

// MediaQueries
// ============
```

### Commits

- Разработка: для унификации текста коммитов взяты теги из библиотеки
  [commitizen](http://commitizen.github.io/cz-cli/)

```
feat:         A new feature
fix:          A bug fix
docs:         Documentation only changes
style:        Changes that do not affect the meaning of the code
              (white-space, formatting, missing semi-colons, etc)
prettier:     ---//---
code-style:   ---//---
refactor:     A code change that neither fixes a bug or adds a feature
perf:         A code change that improves performance
test:         Adding tests, update tests, etc
chore:        Changes to the build process or auxiliary tools and libs
db:           Actions with Mongo DataBase
```

- В будущем можно попробовать автоматизировать чейндж логи и версионирование
  через данную библиотеку.
- В процессе разработки можно дополнять теги коммитов.

### Pre-commit hook with Husky

У нас в проект добавлен Pre-commit hook, при выполнении команды:

`git commit -m 'Some commit info'`

Произойдет следующее: `husky` заглянет внутрь файла: `./huskyrc.js` и выполнит
из него команды:

```js
npm run qa:unit
```

_Возможны ситуации_ когда нужно быстро закинуть что-то в коммит или на коммит
нужно отправить функционал не требующий создания билда: как правило это ситуации
с мерджем из `MRKT-nnn-dev -> MRKT-nnn`. тогда можно использовать команду
игнорирующую запуск пре-коммит хука:

`git commit -n -m 'Some commit info'`
