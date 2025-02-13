# Guide for Contributing to [AgriConnect](https://github.com/ashishnallana/AgriConnect) during hacktoberfest

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

_Pull requests, bug reports, and all other forms of contribution are welcomed and highly encouraged!_ :octocat:

### Contents

- [Steps to Setup](#Steps-to-Setup)
- [Creating an Issue](#Creating-an-Issue)
- [Making Changes](#Making-Changes)
- [Submitting the Pull Request](#Submitting-the-Pull-Request)
- [Writing Commit Messages](#Writing-Commit-Messages)
- [Coding Style](#Coding-Style)

> **This guide serves to set clear expectations for everyone involved with the project so that we can improve it together while also creating a welcoming space for everyone to participate. Following these guidelines will help ensure a positive experience for contributors and maintainers.**

## Steps to Setup

**Fork this repository:** Fork this repo by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

**Clone the repository:** Open a terminal and run the following git command:

```
git clone https://github.com/{ username }/AgriConnect.git
```

where `{username}` is your GitHub username. Here you're copying the contents of your repository in GitHub to your computer.

**Create a branch:** Change to the repository directory on your computer:

```
cd AgriConnect
```

Now create a branch using the `git checkout` command:

```
git checkout -b <new-branch-name>
```

eg- `git checkout newbranch`

**Install necessary packages:** From the root folder you need to install packages for three different folders:

```
cd client
npm i
cd ..
cd npm ml-server
pip install -r requirements.txt
cd ..
cd server
npm i
```

**Create environmental variables:** Create .env file in both server and client directories and add the necessary variables, you can refer to readme for the variables involved

**Run the client and servers:**
You can concurrently run the client and server in server directory using

```
npm i
```

and then open a new terminal and run the ml-server

```
cd ..
cd ml-server
python main.py
```

## Creating an Issue

Before you create a new Issue:

1. Please make sure there is no [open issue](https://github.com/ashishnallana/AgriConnect/issues) yet.
2. If it is a feature request, please share the motivation for the new feature and how you would implement it.
3. Please include links to the corresponding github documentation.

## Making Changes

- Create a topic branch from the main branch.
- Check for unnecessary whitespace / changes with `git diff --check` before committing.
- Keep git commit messages clear and appropriate. Ideally follow commit conventions mentioned below.

## Submitting the Pull Request

- Push your changes to your topic branch on your fork of the repo.
- Submit a pull request from your topic branch to the main branch on the `AgriConnect` repository.
- Be sure to tag any issues your pull request is taking care of / contributing to. \* Adding "Closes #123" to a pull request description will auto close the issue once the pull request is merged in.

## Submitting Pull Requests

We **love** pull requests! Before [forking the repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests) for non-trivial changes, it is usually best to first open an issue to discuss the changes, or discuss your intended approach for solving the problem in the comments for an existing issue.

- **Smaller is better.** Submit **one** pull request per bug fix or feature. A pull request should contain isolated changes pertaining to a single bug fix or feature implementation. **Do not** refactor or reformat code that is unrelated to your change. It is better to **submit many small pull requests** rather than a single large one. Enormous pull requests will take enormous amounts of time to review, or may be rejected altogether.

- **Coordinate bigger changes.** For large and non-trivial changes, open an issue to discuss a strategy with the maintainers. Otherwise, you risk doing a lot of work for nothing!

- **Prioritize understanding over cleverness.** Write code clearly and concisely. Remember that source code usually gets written once and read often. Ensure the code is clear to the reader. The purpose and logic should be obvious to a reasonably skilled developer, otherwise you should add a comment that explains it.

- **Follow existing coding style and conventions.** Keep your code consistent with the style, formatting, and conventions in the rest of the code base. When possible, these will be enforced with a linter. Consistency makes it easier to review and modify in the future.

## Writing Commit Messages

Please [write a great commit message](https://chris.beams.io/posts/git-commit/).

1. Separate subject from body with a blank line
1. Limit the subject line to 50 characters
1. Capitalize the subject line
1. Do not end the subject line with a period
1. Use the imperative mood in the subject line (example: "Fix networking issue")
1. Wrap the body at about 72 characters
1. Use the body to explain **why**, _not what and how_ (the code shows that!)
1. If applicable, prefix the title with the relevant component name. (examples: "[Docs] Fix typo", "[Profile] Fix missing avatar")

## Coding Style

Consistency is the most important. Following the existing style, formatting, and naming conventions of the file you are modifying and of the overall project. Failure to do so will result in a prolonged review process that has to focus on updating the superficial aspects of your code, rather than improving its functionality and performance.

For example, if all private properties are prefixed with an underscore `_`, then new ones you add should be prefixed in the same way. Or, if methods are named using camelcase, like `thisIsMyNewMethod`, then do not diverge from that by writing `this_is_my_new_method`. You get the idea. If in doubt, please ask or search the codebase for something similar.

When possible, style and format will be enforced with a linter.
