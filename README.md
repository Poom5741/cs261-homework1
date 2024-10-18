# 🖥️ Node.js Web App with Docker 🐳

Welcome to your **Node.js Web App**! This project is built with Node.js, Express, and Docker for seamless containerization. The frontend is styled with **Bootstrap** and powered by **JavaScript**. 🚀

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Docker Setup](#docker-setup)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## 📖 Project Overview

This is a simple **Node.js** web application that includes:

- A **Login Page** and **Dashboard** with Bootstrap styling.
- A basic **Node.js/Express** backend for handling authentication.
- Full **Docker** support for running the app inside containers.

The application listens on **port 80** by default, so no need to specify a port when running the app in the browser.

## ✨ Features

- **User Login**: Secure login with role selection.
- **Dashboard**: Displays user information after successful login.
- **Docker Integration**: Easy setup with Docker, ensuring a consistent environment.
- **Bootstrap UI**: Styled with Bootstrap for a responsive design.

## 🛠️ Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Docker](https://www.docker.com/) (for containerization)
- [Git](https://git-scm.com/) (for version control)

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

Install dependencies:

```bash
npm install
```

### Create an `.env` File

Create a `.env` file at the root of your project and add any necessary environment variables.

```bash
# .env
PORT=80
APPLICATION_KEY= tu rest api token for each project
```

## 🚀 Running the Project

### Local Setup

Run the following command to start the app locally:

```bash
npm start
```

Visit the app in your browser at:

```bash
http://localhost
```

### Docker Setup

Alternatively, you can run the project using **Docker**.

1. **Build the Docker image**:

   ```bash
   docker build -t my-node-app .
   ```

2. **Run the Docker container**:

   ```bash
   docker run -p 80:80 my-node-app
   ```

The app will now be running at [http://localhost](http://localhost).

#### Docker Compose

You can also use Docker Compose for easier setup:

1. **Run with Docker Compose**:

   ```bash
   docker-compose up --build
   ```

2. Access the app at [http://localhost](http://localhost).

## 🗂️ File Structure

```bash
.
├── frontend
│   ├── dashboard.html    # Dashboard page (HTML)
│   ├── dashboard.js      # Dashboard logic (JS)
│   ├── index.html        # Login page (HTML)
│   ├── script.js         # Frontend logic for login (JS)
│   └── styles.css        # Styles (CSS)
├── node_modules          # Project dependencies
├── package.json          # Node.js dependencies and scripts
├── package-lock.json     # Dependency lock file
├── server.js             # Main server-side script (Express)
├── Dockerfile            # Dockerfile to containerize the app
├── docker-compose.yml    # Docker Compose setup
└── .gitignore            # Git ignore file
```

## 👨‍💻 Contributing

Contributions are welcome! Here’s how you can contribute:

1. **Fork the repo** and create your branch from `master`.
2. **Commit your changes**.
3. Open a **pull request** and describe what you've done.

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

### Key Sections:

- **Project Overview**: Explains the purpose of the project and its key technologies.
- **Features**: Highlights the main features of your app.
- **Installation and Running**: Explains how to clone the repository, install dependencies, and run the app locally or with Docker.
- **File Structure**: Outlines the key files and directories in the project.
- **Contributing**: Instructions on how to contribute to the project.

### How to Use:

1. **Create a README.md** file in your project root.
2. **Copy and paste** the above content into your `README.md` file.
3. **Customize** it as needed, such as adding your repository URL in the clone command and adjusting any sections.

This README should provide a professional and informative overview of your project. Let me know if you need further customization!
