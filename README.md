
# ReactTS Starter

A React code base under Typescript and SCSS style sheet to quickly start a 
React sunglasses application, with preinstalled UI libraries such as: 
[PrimeReact](https://www.primefaces.org/primereact/), 
[PrimeFlex](https://www.primefaces.org/primeflex/), 
[ReactToastify](https://www.npmjs.com/package/react-toastify). 
The folder structure is very easy to understand and makes it easy to integrate 
functionality (clean code approach). Easy installation and deployment 
(under Docker).


## Installation

- Install my-project with npx

```bash
  npx @mandanyaina/reactts-starter <my-project>
  cd my-project/
```

- Download from git

```bash
  git pull https://github.com/MandaNyAina/reactts-starter
  mv -r reactts-starter <my-project>
  cd my-project/
```
## Running with docker

```bash
  cd my-project/
  docker-compose run app npm start
```
## Running Tests

To run tests of format and lint, run the following command

```bash
  npm run format
  npm run checkform
  npm run lint
```

To run tests of format and lint, run the following command

```bash
  npm run test
```

## Environment Variables

To run this project, you will need to add the following environment 
variables to your .env file

`APP_NAME` = name of your project


## Authors

- [@MandaNyAina](https://github.com/MandaNyAina)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Badges


[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

