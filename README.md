# PortfolioProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

# Getting the project up and running

ng new PortfolioProject --style=scss --routing --skip-install
npm i jquery bootstrap font-awesome --save
npm install
ng serve --open

# Add bootstrap/jquery/font-awesome to angular.json

"styles": [
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.css",
              "node_modules/font-awesome/css/font-awesome.css"
            ],
"scripts": [
              "node_modules/jquery/dist/jquery.js",
              "node_modules/bootstrap/dist/bootstrap.bundle.js"
            ]

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
