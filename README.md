# NoHam - Trust Layer for Remote Hiring

<div align="center">
  <img src="logo.png" alt="Noham Logo" width="120" height="120">
  
  <h3>Say No To Sohams</h3>
  
  ![NoHam Logo](https://img.shields.io/badge/NoHam-Trust%20Layer-blue)
  ![License](https://img.shields.io/badge/license-MIT-green)
  ![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
</div>

> **NoHam** is a trust-layer tool that helps founders detect hiring risks by scanning resumes and GitHub activity to surface behavioral red flags and generate Trust Scores for remote candidates.

## 🎯 Problem Statement

Remote hiring has become the default, but trust infrastructure hasn't kept up. Founders lack HR resources for thorough vetting, leading to costly bad hires that damage team morale, burn budgets, and compromise sensitive projects.

## ✨ Features

### MVP (Version 1.0)
- **Resume Upload & Parsing** - AI-powered extraction of timeline data and job details
- **Timeline Overlap Detection** - Identifies suspicious date patterns and missing information
- **GitHub Activity Scanner** - Analyzes last 30 days of contributions and activity patterns
- **Trust Score Generation** - 0-100 scale rating based on multiple risk factors
- **Red Flag Report UI** - Clear, actionable insights with explanations
- **PDF/HTML Export** - Professional reports for sharing and record-keeping

### Roadmap (Future Versions)
- **NoHam Verified Badge** - Developer reputation system
- **API Integration** - Connect with popular ATS and hiring platforms
- **Advanced Analytics** - Deeper insights and trend analysis
- **Team Collaboration** - Multi-user accounts and shared reports

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **AI/ML**: OpenAI GPT-4 API
- **File Processing**: React Dropzone, PDF.js
- **Integrations**: GitHub API, Octokit
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL database
- OpenAI API key
- GitHub OAuth app credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/relobeid/Noham.git
cd Noham

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Set up the database
npx prisma migrate dev
npx prisma generate

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
Noham/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Next.js pages and API routes
│   ├── lib/                # Utility functions and configurations
│   ├── types/              # TypeScript type definitions
│   └── styles/             # Global styles and Tailwind config
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
├── docs/                   # Additional documentation
└── tests/                  # Test files
```

## 🔧 Configuration

### Environment Variables

```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/noham"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OpenAI
OPENAI_API_KEY="your-openai-api-key"

# GitHub
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Optional: Email (for notifications)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

## 📊 API Documentation

### Core Endpoints

- `POST /api/scan` - Create a new candidate scan
- `GET /api/scan/[id]` - Retrieve scan results
- `POST /api/resume/parse` - Parse uploaded resume
- `GET /api/github/activity` - Fetch GitHub activity data
- `GET /api/reports/[id]` - Generate report (PDF/HTML)

For detailed API documentation, see [docs/API.md](docs/API.md).

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Deploy to Other Platforms

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for deployment guides for Railway, Heroku, and other platforms.

## 🔒 Privacy & Security

NoHam is designed with privacy-first principles:

- **No Data Storage**: Resume content is processed and discarded
- **Opt-in Only**: All features require explicit user consent
- **Transparent Scoring**: Trust scores come with full explanations
- **GDPR Compliant**: Built with European privacy regulations in mind

## 📈 Business Model

- **Freemium**: 5 free scans per month
- **Pro**: $29/month for unlimited scans + advanced features
- **Enterprise**: Custom pricing for teams and integrations

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](docs/CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the need for better remote hiring trust infrastructure
- Built with love by founders, for founders
- Special thanks to the open-source community

## 📞 Support

- **Documentation**: [docs/](docs/)
- **Issues**: [GitHub Issues](https://github.com/relobeid/Noham/issues)

---

**NoHam** - Say No To Sohams. Because hiring remotely shouldn't feel like a gamble.

[🌐 Website](https://noham.dev) • [📧 Contact](mailto:hello@noham.dev) • [🐦 Twitter](https://twitter.com/nohamapp)
