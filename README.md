# create-web-app.
Basic web-app template.

## Requiriments.
* git ^2.x.
* A node package manager.
  - yarn ^1.x
  - npm ^6.x

### 1. Get the template.
Clone the repository with git by:
`git clone https://github.com/afgalvan/create-app.git <new-project-name>`
or
`gh repo clone afgalvan/create-app <new-project-name>`

### 2. Create your own project.
Go your project directory:
`cd <new-project-name>`
Delete the git folder:
`rm -rf .git/`
Initialize a new git project:
* In git ^2.28.0:
  `git init -b main`
* In older versions:
  `git init`
  `git checkout -b main`
