# Contributing to NoHam
### Say No To Sohams

Thank you for your interest in contributing to NoHam! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Templates](#issue-templates)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)

## 🤝 Code of Conduct

NoHam is committed to providing a welcoming and inclusive environment for all contributors. We expect all participants to adhere to our code of conduct:

- **Be respectful** and inclusive in all interactions
- **Be collaborative** and help others learn and grow
- **Be constructive** with feedback and criticism
- **Be patient** with new contributors and questions
- **Be professional** in all communications

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Git for version control
- A GitHub account
- Basic knowledge of TypeScript, React, and Next.js

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork the repo on GitHub, then clone your fork
   git clone https://github.com/relobeid/Noham.git
   cd Noham
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   npx prisma db seed  # Optional: seed with test data
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Visit [http://localhost:3000](http://localhost:3000)** to see the application

## 🔧 Contributing Guidelines

### Types of Contributions

We welcome several types of contributions:

- **🐛 Bug Reports**: Help us identify and fix issues
- **✨ Feature Requests**: Suggest new functionality
- **🔧 Code Contributions**: Submit bug fixes or new features
- **📚 Documentation**: Improve or add documentation
- **🎨 Design**: UI/UX improvements and suggestions
- **🧪 Testing**: Add or improve test coverage

### Before Contributing

1. **Check existing issues** to avoid duplicates
2. **Create an issue** for significant changes to discuss approach
3. **Fork the repository** and create a feature branch
4. **Follow coding standards** outlined below
5. **Write tests** for new functionality
6. **Update documentation** as needed

## 📝 Pull Request Process

### Creating a Pull Request

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**
   - Follow coding standards
   - Add tests for new functionality
   - Update documentation

3. **Test your changes**
   ```bash
   npm run test
   npm run type-check
   npm run lint
   ```

4. **Commit with descriptive messages**
   ```bash
   git add .
   git commit -m "feat: add trust score calculation algorithm"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a pull request**
   - Use the PR template
   - Provide clear description of changes
   - Link related issues
   - Include screenshots for UI changes

### PR Guidelines

- **Keep PRs focused**: One feature or fix per PR
- **Write clear titles**: Use conventional commit format
- **Provide context**: Explain the problem and solution
- **Include tests**: Ensure new code is tested
- **Update docs**: Keep documentation current
- **Be responsive**: Address feedback promptly

### Commit Message Format

We use [Conventional Commits](https://conventionalcommits.org/) format:

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(auth): add GitHub OAuth integration
fix(parser): handle malformed resume dates
docs(api): update endpoint documentation
test(scanner): add unit tests for trust score calculation
```

## 📋 Issue Templates

### Bug Report Template

```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happened.

**Environment**
- OS: [e.g., macOS, Windows]
- Browser: [e.g., Chrome, Firefox]
- Version: [e.g., 1.0.0]

**Additional Context**
Screenshots, logs, or other relevant information.
```

### Feature Request Template

```markdown
**Feature Description**
A clear description of the feature you'd like to see.

**Problem Statement**
What problem does this feature solve?

**Proposed Solution**
How would you like this feature to work?

**Alternatives Considered**
Other solutions you've considered.

**Additional Context**
Any other context, mockups, or examples.
```

## 🎨 Coding Standards

### TypeScript Guidelines

- **Use TypeScript**: All new code must be TypeScript
- **Strict typing**: Enable strict mode in tsconfig.json
- **Type definitions**: Create types for all data structures
- **Interface naming**: Use PascalCase (e.g., `UserProfile`)
- **Enum naming**: Use PascalCase (e.g., `ScanStatus`)

### React/Next.js Guidelines

- **Functional components**: Use function components with hooks
- **Custom hooks**: Extract reusable logic into custom hooks
- **Component naming**: Use PascalCase (e.g., `TrustScoreCard`)
- **File naming**: Use kebab-case for files (e.g., `trust-score-card.tsx`)
- **Props interfaces**: Define interfaces for all component props

### Styling Guidelines

- **Tailwind CSS**: Use Tailwind for styling
- **Component variants**: Use class-variance-authority for variants
- **Responsive design**: Mobile-first approach
- **Consistent spacing**: Use Tailwind spacing scale
- **Dark mode**: Support both light and dark themes

### Code Organization

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI primitives
│   ├── forms/          # Form-related components
│   └── charts/         # Data visualization components
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   ├── auth/          # Authentication pages
│   └── dashboard/     # Dashboard pages
├── lib/               # Utility functions
│   ├── auth/          # Authentication utilities
│   ├── db/            # Database utilities
│   └── utils/         # General utilities
├── types/             # TypeScript type definitions
├── hooks/             # Custom React hooks
└── styles/            # Global styles
```

## 🧪 Testing

### Testing Requirements

- **Unit tests**: Required for all utility functions
- **Integration tests**: Required for API endpoints
- **Component tests**: Required for complex components
- **E2E tests**: Optional but encouraged

### Testing Tools

- **Jest**: Unit and integration testing
- **React Testing Library**: Component testing
- **Playwright**: End-to-end testing (future)

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

```typescript
// Example test file: trust-score.test.ts
import { calculateTrustScore } from '../lib/trust-score';

describe('calculateTrustScore', () => {
  it('should calculate correct score for valid data', () => {
    const mockData = {
      timeline: { score: 85, issues: [] },
      github: { score: 72, issues: [] },
      consistency: { score: 90, issues: [] }
    };

    const result = calculateTrustScore(mockData);

    expect(result.overall).toBe(82);
    expect(result.breakdown).toEqual({
      timeline: 85,
      github: 72,
      consistency: 90
    });
  });
});
```

## 📚 Documentation

### Documentation Requirements

- **API endpoints**: Document all API routes
- **Components**: Add JSDoc comments for props
- **Utilities**: Document function parameters and return values
- **README updates**: Keep README current with changes

### Documentation Style

```typescript
/**
 * Calculates trust score based on resume and GitHub data
 * @param resumeData - Parsed resume information
 * @param githubData - GitHub activity analysis
 * @returns Trust score object with overall score and breakdown
 */
export function calculateTrustScore(
  resumeData: ResumeData,
  githubData: GitHubData
): TrustScore {
  // Implementation
}
```

## 🔄 Release Process

### Version Management

- **Semantic versioning**: Follow semver (MAJOR.MINOR.PATCH)
- **Release notes**: Document all changes
- **Migration guides**: Provide upgrade instructions

### Release Schedule

- **Patch releases**: Weekly (bug fixes)
- **Minor releases**: Monthly (new features)
- **Major releases**: Quarterly (breaking changes)

## 🆘 Getting Help

### Resources

- **Documentation**: [docs/](docs/)
- **Discord**: [NoHam Community](https://discord.gg/noham)
- **GitHub Issues**: Use for bug reports and feature requests
- **Email**: contribute@noham.dev

### Mentorship

New contributors can request mentorship:

1. **Comment on issues** marked with `good-first-issue`
2. **Join our Discord** and ask in #contributors channel
3. **Attend office hours** (monthly contributor calls)

## 🏆 Recognition

We recognize contributors through:

- **Contributor wall** on our website
- **GitHub recognition** in release notes
- **Swag packages** for significant contributions
- **Early access** to new features

## ❓ FAQ

### Q: How do I get my first contribution merged?
A: Start with issues labeled `good-first-issue`, follow the guidelines, and ask for help when needed.

### Q: Can I work on multiple issues simultaneously?
A: Yes, but focus on completing one before starting another to avoid conflicts.

### Q: How long does review take?
A: We aim to review PRs within 48 hours on weekdays.

### Q: What if my PR isn't accepted?
A: We'll provide feedback and work with you to improve it, or explain why it doesn't fit our roadmap.

---

Thank you for contributing to NoHam! Together, we're building better trust infrastructure for remote hiring. 🚀 