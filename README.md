# tv-shows-application

Description:
This app displays top 50 TV shows based on rating and displays TV shows based on genre. An open source API https://www.tvmaze.com/api is used to get data from server.
The shows are displayed along with Image and show Name in alphebetical order of the genre Category that they belong to. Top 50 shows are also displayed and are sorted based on the rating of the show.
A search functionality is implemented which enables users to search for a show based on its name
User can get more information about the show by clicking on show and the details contain: name, poster,language,genres,rating,summary, cast Info etc.
This Application is build using VueJS as frontend Js framework.

## Installations
## Install Vue CLI 
vue cli version used: 5.0.8

```
npm install -g @vue/cli
```
Note: You can check you have the right version with this command:
vue --version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

1) File Naming Convention, 
   Method Naming Convention, 
   Component Naming Convention,
   variable, object declaration : camelCase
   Example : getShowsByKeyword, getShowById etc. 

2) Folder Naming Convention, Components directives in vue : kabab-case
   Example : app-header, <app-header />

3) Coding Standards  
   a. kabab-case:
      folder names, vue component directives, css classes etc.
   b. camelCase:
      vue component file names, js variables, objects, functions etc
   c. PascalCase:
      importing npm packages etc. 


### Project dependencies and devDependencies ---------
1. axios:
   Promise based HTTP client for the browser.
   Please refer https://www.npmjs.com/package/axios for more details:  

2. @vue/cli-plugin-unit-jest:
   Jest as a JS unit testing framework which is used to run unit test.
   Please refer below url for more details:
   https://jestjs.io/
   https://test-utils.vuejs.org/guide/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, 
   coverageThreshold,etc for getting exact code coverage with reports.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
