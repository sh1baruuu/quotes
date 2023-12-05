#!/bin/bash

# Function to display a spinning indicator while commands are executing
spinner() {
    local pid=$1
    local delay=0.15
    local spinstr='|/-\'
    while ps -p $pid > /dev/null; do
        for ((i=0; i<${#spinstr}; i++)); do
            printf "\e[1;36m[%c]\e[0m " "${spinstr:i:1}"  # Cyan color for spinner
            sleep $delay
            printf "\b\b\b\b\b\b"
        done
    done
    printf "    \b\b\b\b"
}

# Retrieve current branch name
branch_name=$(git rev-parse --abbrev-ref HEAD)

# Prompt for commit message
read -p "Enter commit message: " commit_message

# Add changes
git add .

# Commit changes with the provided message
git commit -m "$commit_message" &

# Display the spinning indicator while the commit is in progress
spinner $!

# Push changes to the remote repository
git push origin $branch_name

# Pull changes to the remote repository
git pull origin $branch_name       