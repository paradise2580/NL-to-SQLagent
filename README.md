<div align="center">

# 🗣️ Chat To Your Database

### _Transform Natural Language into SQL Queries with AI_

[![Next.js](https://img.shields.io/badge/Next.js-13.5.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10.0.0-red?style=for-the-badge&logo=nestjs)](https://nestjs.com/)
[![LangChain](https://img.shields.io/badge/LangChain-0.0.195-green?style=for-the-badge)](https://langchain.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker)](https://www.docker.com/)

_Democratize database access through natural language conversations powered by AI_


<img width="1918" height="924" alt="image" src="https://github.com/user-attachments/assets/f11fb3ee-6406-4de4-a800-b6dd56758345" />


</div>

---

## 🌟 Overview

**Chat To Your Database** is an innovative AI-powered platform that revolutionizes how users interact with databases. By leveraging LangChain SQL Agents and high-performance language models (Groq and OpenAI), it enables anyone to query, analyze, and manipulate databases using simple natural language - no SQL knowledge required!

Whether you're a data analyst seeking insights, a developer debugging queries, or a business user exploring data, our platform makes database operations accessible to everyone.

## ✨ Key Features

### 🤖 **AI-Powered Query Generation**
- Convert natural language questions into optimized SQL queries
- Support for complex joins, aggregations, and nested queries
- Intelligent error handling and query suggestions

### 🔄 **Multi-Database Support**
- **SQLite**: Perfect for development and small applications
- **PostgreSQL**: Enterprise-grade relational database support
- **MongoDB**: NoSQL document database integration

### 🎯 **Smart Query Operations**
- Automatic SQL query generation from natural language
- Query optimization and performance analysis
- SQL dialect translation between different databases
- Real-time query execution and results

### 📊 **Rich Data Visualization**
- Interactive table displays with sorting and filtering
- Export results in multiple formats
- Query history tracking and management
- Real-time execution monitoring

### 🔐 **Enterprise Security**
- JWT-based authentication system
- Secure database connection management
- User session management
- Query history and audit trails

### 🚀 **Developer Experience**
- Docker containerized deployment
- RESTful API architecture
- Comprehensive error handling
- Easy local development setup

## 🏗️ Architecture

```mermaid
graph TB
    A[🌐 Frontend - Next.js] --> B[🚪 API Gateway - NestJS]
    B --> C[🤖 LangChain SQL Agent]
    C --> D1[🧠 OpenAI GPT Models]
    C --> D2[⚡ Groq LLMs]
    B --> E[🔐 JWT Auth Service]
    B --> F[(🐘 SingleStore)]
    B --> G[(💾 SQLite)]
    B --> H[(🍃 MongoDB)]
    B --> I[📝 Query History Service]
    
    style A fill:#0ea5e9,stroke:#0284c7,stroke-width:2px,color:#ffffff
    style B fill:#dc2626,stroke:#b91c1c,stroke-width:2px,color:#ffffff
    style C fill:#10b981,stroke:#059669,stroke-width:2px,color:#ffffff
    style D1 fill:#7c3aed,stroke:#6d28d9,stroke-width:2px,color:#ffffff
    style D2 fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#000000
    style E fill:#374151,stroke:#1f2937,stroke-width:2px,color:#ffffff
    style F fill:#2563eb,stroke:#1d4ed8,stroke-width:2px,color:#ffffff
    style G fill:#64748b,stroke:#475569,stroke-width:2px,color:#ffffff
    style H fill:#16a34a,stroke:#15803d,stroke-width:2px,color:#ffffff
    style I fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#ffffff
```

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 13.5.6** - React framework with App Router
- **TypeScript 5.0+** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Flowbite React** - Component library
- **Material-UI** - Advanced UI components
- **NextAuth.js** - Authentication solution

### **Backend**
- **NestJS 10.0** - Scalable Node.js framework
- **TypeORM** - Database ORM with TypeScript support
- **Passport.js** - Authentication middleware
- **JWT** - Secure token-based authentication
- **Swagger** - API documentation

### **AI & Data Processing**
- **LangChain 0.0.195** - AI agent framework
- **Groq API** - High-performance inference (Primary)
- **OpenAI API** - Large language model integration (Optional)
- **SQL Agent** - Specialized database interaction agent

### **Databases**
- **PostgreSQL** - Primary relational database
- **SQLite 3** - Embedded database support
- **MongoDB** - Document database for sessions and logs

### **DevOps & Infrastructure**
- **Docker & Docker Compose** - Containerized deployment
- **pgAdmin** - PostgreSQL administration interface
- **ESLint & Prettier** - Code quality tools

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or higher
- **Docker** and **Docker Compose**
- **AI API Key** (Choose one or both):
  - **Groq API Key** ([Get yours here](https://console.groq.com/keys)) - **Recommended for speed**
  - **OpenAI API Key** (Optional - [Get yours here](https://platform.openai.com/api-keys))

### 1. Clone the Repository
```bash
git clone https://github.com/paradise2580/Chat-To-Your-Database.git
cd Chat-To-Your-Database
```

### 2. Environment Setup
Create a `.env` file in the root directory:

```env
# Authentication
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_URL=http://localhost:3000
JWT_SECRET=your-jwt-secret-here

# AI API Keys (At least one required)
GROQ_API_KEY=gsk-your-groq-api-key-here
OPENAI_API_KEY=sk-your-openai-api-key-here  # Optional

# Database Configuration
DB_TYPE=postgres
DB_HOST=postgres
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=postgres
PG_HOST=postgres
PG_USER=postgres
PG_PASSWORD=postgres
PG_DB=postgres
PG_PORT=5432

# PostgreSQL Docker Setup
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=postgres

# pgAdmin Configuration
PGADMIN_DEFAULT_EMAIL=admin@pgadmin.com
PGADMIN_DEFAULT_PASSWORD=admin

# MongoDB Configuration
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=pass12345
MONGO_URL=mongodb://root:pass12345@mongodb:27017/chatwithdb?authSource=admin

# Application Configuration
PORT=5001
```

### 3. Docker Deployment (Recommended)
```bash
# Build and start all services
docker-compose build --no-cache
docker-compose up -d

# Verify services are running
docker-compose ps
```

### 4. Manual Installation

#### Backend Setup
```bash
cd nest_api
npm install
npm run start:dev
```

#### Frontend Setup
```bash
cd client
npm install
npm run dev
```

### 5. Access the Application
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5001](http://localhost:5001)
- **pgAdmin**: [http://localhost:5050](http://localhost:5050)
- **API Documentation**: [http://localhost:5001/api/docs](http://localhost:5001/api/docs)

## 📖 Usage Guide

### Getting Started with Your First Query

1. **Sign Up/Login**: Create an account or sign in at the homepage
2. **Navigate to Chat**: Go to the `/chat` page to start querying
3. **Connect Database**: The system connects to your configured database automatically
4. **Start Asking**: Begin asking questions about your data in natural language

### Example Queries

```
💬 "Show me all customers from New York"
💬 "What are the top 5 best-selling products?"
💬 "Find the total sales for last month"
💬 "Which employees have the highest performance?"
💬 "Create a summary of orders by category"
💬 "Show me products with low inventory"
```

### Database Setup

#### Loading Sample Data (SQLite)
The application includes the Northwind sample database:
```bash
cd client
npm run seed  # Loads sample data
```

#### Using PostgreSQL
1. Access pgAdmin at `localhost:5050`
2. Login with credentials from your `.env` file
3. Create a new server connection to `postgres:5432`
4. Import your database or use the provided sample data

## 🎯 Advanced Features

### Query History & Analytics
- All queries stored with timestamps and performance metrics
- View and rerun previous successful queries
- Export query history for analysis

### Multi-Model AI Support
- **Groq**: High-speed inference for rapid responses (Primary recommendation)
- **OpenAI GPT**: Advanced reasoning and complex queries (Optional alternative)
- Flexible model configuration - use either or both APIs

### Security Features
- JWT-based authentication
- Secure database connections
- Query validation and sanitization
- User session management

## 🔧 Development

### Project Structure
```
Chat-To-Your-Database/
├── client/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/           # App router pages
│   │   ├── components/    # Reusable React components
│   │   ├── lib/          # Utility functions
│   │   └── interfaces/   # TypeScript definitions
│   └── package.json
├── nest_api/              # NestJS backend application
│   ├── src/
│   │   ├── ai/           # AI service and LangChain integration
│   │   ├── auth/         # Authentication module
│   │   ├── user/         # User management
│   │   └── main.ts       # Application entry point
│   ├── docker-compose.yaml
│   └── package.json
└── README.md
```

### Running Tests
```bash
# Backend tests
cd nest_api
npm run test
npm run test:e2e

# Frontend tests
cd client
npm test
```

### Code Quality
```bash
# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
```

## 🐳 Docker Services

The application uses Docker Compose with the following services:

- **nestapp**: NestJS API server (Port: 5001)
- **client**: Next.js frontend (Port: 3000)
- **postgres**: PostgreSQL database (Port: 5432)
- **pgadmin**: Database administration (Port: 5050)
- **mongodb**: Document database (Port: 27017)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Areas for Contribution
- 🌐 Additional database support (MySQL, Oracle, etc.)
- 🎨 UI/UX improvements and themes
- 📊 Advanced data visualization features
- 🔒 Enhanced security features
- 🌍 Internationalization support
- 📱 Mobile responsiveness improvements

### Contribution Guidelines
- Follow existing code style and conventions
- Write comprehensive tests for new features
- Update documentation for API changes
- Ensure all tests pass before submitting

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for providing powerful language models
- **Groq** for high-performance AI inference
- **LangChain** for the incredible SQL agent framework
- **Vercel** for Next.js and deployment solutions
- **NestJS** community for the robust backend framework

## 📞 Support & Community

- 🐛 **Issues**: [GitHub Issues](https://github.com/paradise2580/Chat-To-Your-Database/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/paradise2580/Chat-To-Your-Database/discussions)
- 📧 **Email**: Contact *anshivya20072005@gmail.com* for any questions or support.

---

<div align="center">

**⭐ If you find this project helpful, please consider giving it a star on GitHub! ⭐**

Made with ❤️ by Anshivya Nagpal (https://github.com/paradise2580/NL-to-SQLagent.git)

</div>
