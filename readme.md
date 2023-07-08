# Setup instructions

## Step 1: Cloning the repository

Run the following command to clone the repository

```bash
git clone https://github.com/absum11/school2.git
```

## Step 2: Changing the working directory

Run the following command to change working directory to `school2`

```bash
cd school2
```

## Step 3: Verifying Node version

Run the following command to check your current node version

```bash
node --version
```

make sure it is `v18.12.1` or `v18` or higher. In case you have a different version that does not meet the requirements then follow the below steps

```bash
nvm install 18.12.1
nvm use 18.12.1
```

## Step 4: Setup Bearer

Please follow the steps mentioned in the [Bearer installation guide](https://docs.bearer.com/reference/installation/)

# References

## Prettier

1. [prettier installation node](https://prettier.io/docs/en/install.html)
2. [prettier config options](https://prettier.io/docs/en/options.html)

## Husky

1. [husky with node -getting started](https://typicode.github.io/husky/getting-started.html)

## Commitlint

1. [commitlint install](https://blog.tericcabrel.com/apply-conventional-commit-style-on-your-project-with-commitlint/)

2. [adding commit-msg script husky](https://typicode.github.io/husky/getting-started.html)

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## Eslint

1. [eslint installation](https://eslint.org/docs/latest/use/getting-started)

## Bearer security scanner

1. [bearer scan integration](https://docs.bearer.com/quickstart/)

## Lint-staged

1. [lint-staged integration](https://duncanlew.medium.com/getting-started-with-husky-and-lint-staged-for-pre-commit-hooks-c2764d8c9ae)

## Jest

1. [Jest docs](https://jestjs.io/docs/getting-started)
2. [Jest cheatsheet](https://github.com/sapegin/jest-cheat-sheet)

## Cron

1. [Node cron](https://www.npmjs.com/package/node-cron)
2. [Cron tab guru for understanding cron expressions](https://crontab.guru/)

## Rate limiter

1. [express rate limit](https://www.npmjs.com/package/express-rate-limit)

