#!/bin/bash

# Retrieve current branch name
branch_name=$(git rev-parse --abbrev-ref HEAD)

# Prompt for commit message
read -p "Enter commit message: " commit_message

# Add changes
git add .

# Commit changes with the provided message
git commit -m "$commit_message" &

# Push changes to the remote repository
git push origin $branch_name

# Pull changes to the remote repository
git pull origin $branch_name       