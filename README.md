# Nika: React, Webpack & Typescript Starter-Kit
## The Complete Frontend Stack To Fly

`Nika` is a complete frontend stack based on React, Typescript & Webpack.

### Pre-Configured Feautures
1. `React` & `ReactDom` as frontend-stack
2. `Typescript` language
3. `Webpack` as module bundler
4. `Sass` as styles management stack
5. `Eslint`, `Prettier`, `Husky` & `lint-staged` for improve code style
6. `Stylelint` for improve css & sass code style
7. `commitlint` for improve git commit messages style
8. Recommended folder structure for enterprise web apps
9. Built-in Translation system 
10. Powerfull Pre-configured CLI to Generate components, hooks and etc using `generate-react-cli`

## Table of contents
* Generator CLI Documentation

## Genarator CLI Documentation
Nika has a Pre-configured CLI using `generate-react-cli`.
With the help of this cli, you can automatically generate components, pages, layouts, services and hooks with a specified template.

Command Structure:
```Shell
npx generate-react-cli component <name> --type=<type> --path=<path>
```

Basic Examples:
```Shell
# Generate a Button component in components/ directory
npx generate-react-cli component Button

# or
npx generate-react-cli component Button --type=component


# Generate a Login view page in views/ directory
npx generate-react-cli component Login --type=view


# Generate a layout in layouts/ directory
npx generate-react-cli component DashboardLayout --type=layout


# Generate a custom hook in hooks/ directory
npx generate-react-cli component useClickOutside --type=hook


# Generate a service in service/ directory
npx generate-react-cli component CustomRequest --type=service

# Generate a store in store/ directory
npx generate-react-cli component Bears --type=store

```

Generate in custom paths:
```Shell
# Generate a Button component in components/common/ directory
npx generate-react-cli component Button --path=src/components/common

```

