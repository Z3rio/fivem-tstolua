# FiveM Ts -> Lua Template

This is a template resource for using typescript to lua within FiveM.

You can write your resource in typescript, for it to later be built into lua

## Prerequisites

- [Node](https://nodejs.org/en)
- Basic typescript & coding knowledge
- A FiveM server to run the result on

## Technologies Used

- Vue (Default UI)
- Typescript

## Issues, suggestions, etcetera

If you encounter an issue with our template, simply open an issue
[here](https://github.com/Z3rio/fivem-tstolua/issues)

## Contribution

We gladly accept all contributions, contributing can be done via forking this
repo and then creating an PR.

## Setup

To set this up, simply run `npm install` in the root of this repository, aswell
as the `ui` folder. That will install all the node_modules for you.

### Production

Building for production can be done using `npm run build`.

Using it in the root folder would build all the `client`/`server`/`shared`
scripts,

Whilst using it in the `ui` folder would build the actual ui files.

### Development

Setting up a "dev server" / listener can be done by using `npm run dev`.

Using this command in the root folder will run a dev-server for the actual
`client`/`server`/`shared` files.

Using this in the `ui` folder will create a local dev-server for the ui, just
make sure to change the `ui_page`
