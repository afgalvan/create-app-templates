# create-node-app

Basic node api template.

## Requirements

- [git](https://git-scm.com/downloads) ^2.x
- [node](https://nodejs.org/en/download/) ^14.x
- A node package manager.
  - [yarn](https://classic.yarnpkg.com/en/docs/install/) ^1.x
  - [npm](https://www.npmjs.com/get-npm) ^6.x
- [Docker](https://www.docker.com/get-started)

---

## To install template manager (create-app)

```bash
curl -sL https://raw.githubusercontent.com/afgalvan/create-app/main/installer.sh | bash -s [package-manager] [branch]
```

The package-manager argument it's optional, **npm** is configured by default.

### Create a new alias

bash

> ```bash
> echo "alias create-app=\"~/.config/create-app/create_app.sh\"" >> ~/.bashrc
> ```

zsh

> ```zsh
> echo "alias create-app=\"~/.config/create-app/create_app.sh\"" >> ~/.zshrc
> ```
