#!/bin/bash

# Function to display a spinner while commands are executing
spinner() {
    local pid=$1
    local delay=0.15
    local spinstr='|/-\'
    while ps -p $pid > /dev/null; do
        local temp=${spinstr#?}
        printf "\e[1;34m[%c]\e[0m " "$spinstr"  # Blue color for spinner
        local spinstr=$temp${spinstr%"$temp"}
        sleep $delay
        printf "\b\b\b\b\b\b"
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

# Display the spinner while the commit is in progress
spinner $!

# Push changes to the remote repository
git push origin $branch_name    

# Pull changes to the remote repository
git push origin $branch_name       