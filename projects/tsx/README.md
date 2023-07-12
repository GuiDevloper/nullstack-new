# nullstack-tsx

A Nullstack template using TSX and ESLint + Prettier (and configured to use Babel at StackBlitz)

![Nullstack Logo](https://raw.githubusercontent.com/nullstack/nullstack/master/nullstack.png)

## Details good to know

- StackBlitz doesn't support ESLint nor VSCode extensions, only their Prettier and it's configurations, to change them take a look at **package.json** `prettier` key
- Run `npm run lint` to perform ESLint formatting, but Prettier will always try to keep the code according to their configs
- **.vscode/snippets.json** brings the same snippets that [Nullstack VSCode extension](https://marketplace.visualstudio.com/items?itemName=ChristianMortaro.vscode-nullstack) for convenience
- StackBlitz has a curious behavior of disappearing with the **.env** file, remaining other ways to set variables, e.g: [`nullstack stack --name`](https://github.com/nullstack/nullstack/blob/master/scripts/index.js#L100), **package.json**'s [`stackblitz.env`](https://developer.stackblitz.com/platform/webcontainers/project-config#env) key, etc
- The project is configured at **package.json**'s [`stackblitz.startCommand`](https://developer.stackblitz.com/platform/webcontainers/project-config#startcommand) to run [`nullstack-adapt-babel`](https://github.com/GuiDevloper/nullstack-adapters/tree/main/nullstack-adapt-babel) at StackBlitz load just because they doesn't support Nullstack SWC binaries

## Running this project locally when downloading

Install the dependencies: `npm install`

Rename the **.env.example** file to **.env**

Run the app in development mode: `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn more

[Read Nullstack documentation](https://nullstack.app/documentation)
