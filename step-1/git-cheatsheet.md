# Git Cheatsheet

## Basic

These six commands are enough to get going with git. 
If you are brand new to git just focus on getting comfortable with these
first.


### git status

You can see which changes you have made to the source code 

### git add 

Once you are ready to save changes to git (commit to the changes) you
need to add them to gits registry of changes.

Add a specific file
```
git add new-file.txt
```
Add all the changes you have made
```
git add -A
```

### git commit

To save the changes you have marked as ready. 

```
git commit -m "A message to explain why you made these changes"
```

### git push

To share your changes with your teammates you need to push them 
to github so they can pull them down later. Only changes that have been commited 
will be pushed. 

### git pull 

To get your teammates changes you can pull them down. 

```
git pull --rebase
```

### git log

If you want to see the history of changes in your shell

press 'q' to quit


## More advance commands. 
You definitely should learn these but you don't need them to get started

### git restore (Formarly know as git checkout)

Undo changes you have made to a file

```
git restore file.txt
```

Undo all changes you have made
```
git restore -a
```

### git switch (Formarly know as git checkout)

Change to another branch

```
git switch branch-name
```

Create a new branch and switch to it
```
git switch -b branch-name
```

### git branch 
Show the branch you are on

```
git branch
```

Show all branchs 
```
git branch -a 
```

### git merge 

Get changes from another branch and add them to the branch
you are on.
```
git merge branch-name
```

## Advanced git commands 
For more advanced workflows and productivly these commands are very usefull
but much less often used.

### git rebase 

Get changes from another branch and put them before your current branchs changes

```
git rebase branch-name
```

### git stash 

Undo changes but save them for later.

### git pop

Restore the changes you last stashed 

### git reflog

List the history of git commands you have run

### git reset

Reset git back to a previous moment in history 

```
git reset <commit-sha>
```
### git bisect

Start a binary search between two commit shas to help find which 
commit introduced the bad commit.

```
git bisect <commit-sha> <commit-sha>
```

### git revert 

Undo a specific commits changes

```
git revert <commit-sha>
```
