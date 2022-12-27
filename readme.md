# Kompas Web Components

Kompas Web Components is frontend reusable component for Harian Kompas project.

## Installation
To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/pt-kompas-media-nusantara/kompas-web-components.git
cd kompas-web-component
```
Use 
* Node.js version 14
* NPM version 6 
* [Stencil.js](https://stenciljs.com/docs/introduction) version ^2.5.2

Then run [npm](hhttps://github.com/ionic-team/stencil-component-starter) install to install Kompas Web Component.

```bash
npm install
```

## Usage

Run:

```bash
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

To publish to NPM
```bash
npm run build
npm login
npm publish --access public --otp=<code>
```
For detailed explanation on how things work, check out [Stencil.js](https://stenciljs.com/docs/introduction) docs.

## Implement Component to Another Project

on kompas-web-component run:
```bash
cd kompas-web-component
npm start build
npm link
```


on your project run:

```bash
cd project-folder
npm link @kompasid/kompas-web-compoenent
```


## How to develop

* Create component that want to build on /src/components
* Use .ts format (We use TypeScript for functionality)
* Declare every components, states and props (if exist) and run npm run build before npm start to create readme in component directory automatically
* We use Tailwind CSS v2 for styling component, check out [Tailwind CSS](https://v2.tailwindcss.com/docs) docs.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)