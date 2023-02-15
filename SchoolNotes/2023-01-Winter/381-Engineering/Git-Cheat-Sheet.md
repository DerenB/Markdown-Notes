
# Git Cheatsheet

# Terminal Commands

- Create Directory `mkdir`

# Setting up Git

### Configure the username & password

`git config --global user.name "<your name>"`
`git config --global user.email "<email>"`

### Configure the Editor

- VSCode:
- `git config --global core.editor "code --wait"`

### Generate a SSH key

- `ssh-keygen -t ed25519 -C "<your email>"`
  - Terminal will show: `Generating public/private ed25519 key pair.`
- Terminals Prompts for a file location to save the key:
  - EC2: `/home/ec2-user/.ssh/github_ssh_key`
  - MAC: `<path-to-your-location>/github_ssh_key`
  - Windows: `<path-to-your-location>/github_ssh_key`
- Press Enter twice to skip using a password
- Add SSH key to ssh-agent
  - Start the ssh-agent: `eval "$(ssh-agent -s)"`
  - Add the new key: `ssh-add ~/.ssh/github_ssh_key`
- Add the key to your GitHub account
  - Go to the Github website > account > settings
  - SSH and GPG keys
  - Copy the key located in `github_ssh_key.pub`
- Test the Connection:
  - `ssh -T git@github.com`

# Creating and viewing Repo

- Initialize a directory into a Git repository
  - `git init`
- Change the name of the Main/Master branch
  - `git branch -m main`
  - Changes the name from the default "master" to "main"
- Show the status of the repo
  - `git status`
- Show the history of a repo
  - `git log`

# Adding to a Repo

- Add files to be committed 
  - `git add <FileName>`
- Check the un-staged changes
  - `git diff <FileName>`
- Add all changes in the staging area into one commit
  - `git commit -m "<Commit Message>"`

# Branches

- List Branches in Repo
  - `git branch`
- Create new branch
  - `git branch <branch_name>`
- Switch to Branch
  - `git checkout <branch_name>`
- Delete Branch (safe)
  - `git branch -d <branch_name>`
- Delete Branch (force)
  - `git branch -D <branch_name>`
- Rename Branch
  - `git branch -m <branch_name>`
- List all remote branches 
  - `git branch -a`

# Remote

- List Remotes
  - `git remote`
- Show Origin
  - `git remote show origin`
- Remove remote
  - `git remote rm <remote_name>`
- Push remote to new branch
  - `git push -u origin old_branch:new_branch`

