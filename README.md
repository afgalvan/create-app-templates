# create-web-app.

Basic web-app template.

## Requirements.

- [git](https://git-scm.com/downloads) ^2.x.
- [node](https://nodejs.org/en/download/) ^12.18.4
- A node package manager.
  - [yarn](https://classic.yarnpkg.com/en/docs/install/) ^1.x
  - [npm](https://www.npmjs.com/get-npm) ^6.x

---

## To install template manager (create-app).

```
curl -sL https://raw.githubusercontent.com/afgalvan/create-app/main/installer.sh | bash -s [package-manager] [branch]
```

The package-manager argument it's optional, **npm** is configured by default.

### **Create a new alias:**

bash

> ```
> echo "alias create-app=\"~/.config/create-app/create_app.sh\"" >> ~/.bashrc
> ```

zsh

> ```
> echo "alias create-app=\"~/.config/create-app/create_app.sh\"" >> ~/.zshrc
> ```

---

## Manually specific web template download.

### 1. Get the template.

Clone the repository with git by:

```
git clone -b web https://github.com/afgalvan/create-app/.git <new-project-name>
```

or

```
gh repo clone afgalvan/create-app <new-project-name> -- -b web
```

### 2. Create your own project.

Go your project directory:

```
cd <new-project-name>
```

Delete the git folder:

```
rm -rf .git/
```

Initialize a new git project:

- In git ^2.28.0:
  ```
  git init -b main
  ```
- In older versions:
  ```
  git init
  ```
  ```
  git checkout -b main
  ```
