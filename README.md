# PaisesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## How to obfuscate production builds of your Angular app

https://surya-dev-journey.hashnode.dev/how-to-obfuscate-production-builds-of-your-angular-app

obfuscating the code makes it less readable for humans but you keep the same functionalities for the machine

![less-readable](https://user-images.githubusercontent.com/55423389/231762692-3dc385af-4b91-428c-8742-c2f0c2a02c2f.PNG)


<hr/>

# Example in a project with angular-cli v11 and node v14 and webpack v4

in this case I use the following commands to install the npm packages
<br/>
npm install -D @angular-builders/custom-webpack@11.1.1
<br/>
npm install --save-dev webpack-better-obfuscator

https://www.npmjs.com/package/@angular-builders/custom-webpack
<br/>
https://www.npmjs.com/package/webpack-better-obfuscator


Next I will show the configuration that I personally use, and in the case of the settings in the custom-webpack file you will find all those that are available in its documentation, do not forget that you must create the custom-webpack.config.js file in the root of the project

## angular.json
![modificar el angular-json](https://user-images.githubusercontent.com/55423389/233411266-08c66406-519e-4941-b943-5801026202c2.PNG)


## custom-webpack.config.js
![custom-webpack](https://user-images.githubusercontent.com/55423389/233251204-4f32c5c8-2bb0-4313-8208-6b58ce5a4d45.png)


