# Environment Variables Template

Copy this content to `.env.local` and fill in your values:

```bash
# ====================================
# Database Configuration
# ====================================
DATABASE_URL="postgresql://username:password@localhost:5432/noham_dev"

# ====================================
# Next.js Configuration
# ====================================
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-nextauth-secret-key-here"

# ====================================
# OpenAI Configuration
# ====================================
OPENAI_API_KEY="sk-your-openai-api-key-here"

# ====================================
# GitHub OAuth Configuration
# ====================================
GITHUB_CLIENT_ID="your-github-oauth-client-id"
GITHUB_CLIENT_SECRET="your-github-oauth-client-secret"

# ====================================
# Optional: Google OAuth
# ====================================
GOOGLE_CLIENT_ID="your-google-oauth-client-id"
GOOGLE_CLIENT_SECRET="your-google-oauth-client-secret"

# ====================================
# Optional: Email Configuration
# ====================================
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# ====================================
# Feature Flags (for development)
# ====================================
MOCK_OPENAI="false"  # set to true for testing without API calls
MOCK_GITHUB="false"  # set to true for testing without GitHub API
DEBUG="true"
```

## How to get API keys:

### OpenAI API Key
1. Go to [platform.openai.com](https://platform.openai.com)
2. Create an account or sign in
3. Navigate to API Keys section
4. Create a new secret key

### GitHub OAuth App
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - Application name: "NoHam Development"
   - Homepage URL: "http://localhost:3000"
   - Authorization callback URL: "http://localhost:3000/api/auth/callback/github"
4. Copy Client ID and Client Secret

### Database Setup
For local development:
```bash
# Install PostgreSQL
brew install postgresql  # macOS
# or
sudo apt install postgresql postgresql-contrib  # Ubuntu

# Start PostgreSQL service
brew services start postgresql  # macOS
# or
sudo systemctl start postgresql  # Ubuntu

# Create database
createdb noham_dev
```

For production, consider using:
- [Supabase](https://supabase.com) (PostgreSQL hosting)
- [PlanetScale](https://planetscale.com) (MySQL, requires schema changes)
- [Railway](https://railway.app) (PostgreSQL hosting) 