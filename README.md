# Devhub – My Git & GitHub Learning Project 🚀

This repository is my personal journey of learning **Git, GitHub, and GitHub Actions** from scratch.  
I started as a complete beginner, and through this project I learned how to use Git effectively, push code to GitHub, and automate tasks with GitHub Actions.

---

## 📚 What This Project Is About

- Learning **Git basics**: commits, branches, merging, resolving conflicts  
- Understanding how to connect a local repo with **GitHub**  
- Writing my first piece of **JavaScript application code** (`login.js`)  
- Setting up my first **GitHub Actions workflow** (`greetings.yml`)  
- Automating my project so that **every push triggers GitHub Actions**  

This project is not just code — it’s the record of how I started learning version control and DevOps concepts.

---

## 📂 Folder Structure

Here’s how the project is organized:

```
Devhub/
├── auth-service/
│ └── login.js # JavaScript code for login + OTP
│
├── .github/
│ └── workflows/
│ └── greetings.yml # GitHub Actions workflow to run login.js
│
├── test/
│ └── test-actions.txt # File used to trigger workflows on push
│
└── README.md # Project documentation (this file)
```

---

## 🟢 My Learning Journey (Step by Step)

### 1. Git Basics
- Learned how to create a repository with `git init`
- Made my first commits
- Created branches (like `feature/auth-login`)
- Experienced my first **merge conflict** in `login.js`
- Resolved conflicts using VS Code

### 2. Pushing Code to GitHub
- Connected my local repo to a GitHub remote
- Pushed code to GitHub (`git push origin main`)
- Understood the difference between **main** and **master** branches

### 3. Application Code (`login.js`)
- Created a simple JavaScript file to simulate:
  - **Login validation** (check username & password)
  - **Password reset feature** (generate OTP)
- Ran the code locally with Node.js
- Saw real outputs like:
  - ✅ Login successful!
  - ❌ Invalid username or password.
  - 🔐 OTP generated

### 4. GitHub Actions (`greetings.yml`)
- Learned what **workflows** are
- Created my first workflow in `.github/workflows/`
- Used triggers (`on: [push]`) to run jobs automatically
- Configured it to use Node.js and run my `login.js` file
- Saw the output directly in the **Actions tab** on GitHub

### 5. End-to-End Understanding
- Now I know how to go from writing code → saving it with Git → pushing it to GitHub → automating it with GitHub Actions

---

## ✅ Key Learnings

- **Git**: commits, branches, merge conflicts, remotes  
- **GitHub**: pushing, syncing, managing branches  
- **GitHub Actions**: workflows, triggers, jobs, steps  
- **JavaScript basics**: writing a login system + OTP generator  
- **CI/CD concept**: every push can automatically run checks or code

---

## 🔮 Next Steps

- Add unit tests for `login.js`
- Automate tests with GitHub Actions
- Expand features (registration, password change)
- Learn how to deploy using GitHub Actions

---

## 🎯 Conclusion

This project marks the **beginning of my Git & GitHub journey**.  
I started with zero knowledge, learned how to manage code with Git, pushed it to GitHub, built a simple app in JavaScript, and set up my very first GitHub Actions workflow.  

Now I understand how developers work collaboratively and automate their projects in the real world.
