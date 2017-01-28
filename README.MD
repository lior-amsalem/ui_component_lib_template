# Template for anyone who wants to build their own UI component library in React
Easy and fast base library for ui components - clone the project and create your own ui component library!

## How to start? / create your first UI component library?
1. Clone the project locally.
2. Pick a name for your UI component library.
3. Run `Yarn Install` (or just `yarn`).
4. search within the code for `<your_lib_name>` and replace it with your library name.
5. Run `Yarn start` - this will be our development mode.
6. Craete a folder inside `src` (or duplicate one of the folders).
7. Go to `http://localhost:5566/dev/ComponentName` (change `ComponentName` to your new component).

## How to develop new component?
1. First clone the project locally.
2. Run `Yarn Install` (or just `yarn`).
3. Run `Yarn start` - this will be our development mode.
4. Craete a folder inside `src` (or duplicate one of the folders).
5. Go to `http://localhost:5566/dev/ComponentName` (change `ComponentName` to your new component).

or
- run `yarn storybook` and go to `http://localhost:6006/`.

## How to install it in your project?
1. Install with `npm install <your_lib_name> --save`.
2. Import to your "js" file: `import { Component } from '<your_lib_name>';`.
3. In your project's code, use like that: `<Component/>`.

## How to develop a component directly into my own project/repository?
1. Go to `<your_lib_name>` folder.
2. run `npm link`.
3. Go to the project where you want to use the component - and write `npm link <your_lib_name>`.
4. Run `yarn build:watch` - now each time you change your component it should automaticlly update inside your own project.
npm link creates a symlink inside your project's `node_modules` folder to your local `<your_lib_name>` library and each time you update `<your_lib_name>` locally you update it within the project you work on.

[Npm link - read more](https://docs.npmjs.com/cli/link)

[Npm link - for developers](https://docs.npmjs.com/misc/developers#link-packages)

## Todo
- Work with webpack 2 and tree shaking.
- Inside `index.js` load the `ComponentsList` across all components for easy and fast access (as dropdown with a small icon on the top right).

## How o Write Story
[Writing Story](https://getstorybook.io/docs/react-storybook/basics/writing-stories)

## How to install Yarn?
[Install Yarn](https://yarnpkg.com/en/docs/install)