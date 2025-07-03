# NoHam API Documentation
### Say No To Sohams

## Overview

The NoHam API provides endpoints for resume analysis, GitHub integration, and trust score generation. All API endpoints require authentication unless otherwise noted.

## Base URL
```
Development: http://localhost:3000/api
Production: https://noham.dev/api
```

## Authentication

NoHam uses JWT tokens for API authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Rate Limits

- **Scans**: 10 per hour for free users, 100 per hour for pro users
- **Uploads**: 50 per day for free users, unlimited for pro users
- **GitHub API**: 5000 requests per hour (shared with GitHub's limit)

## Error Responses

All endpoints return errors in the following format:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The request is invalid",
    "details": "Resume file is required"
  }
}
```

## Endpoints

### Authentication

#### POST /api/auth/register
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123",
  "name": "John Doe"
}
```

**Response:**
```json
{
  "user": {
    "id": "clp123...",
    "email": "user@example.com",
    "name": "John Doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### POST /api/auth/login
Authenticate user and return JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "user": {
    "id": "clp123...",
    "email": "user@example.com",
    "name": "John Doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Resume Analysis

#### POST /api/resume/upload
Upload and parse a resume file.

**Request:**
- Content-Type: `multipart/form-data`
- File: Resume file (PDF, DOCX, DOC)
- Max size: 10MB

**Response:**
```json
{
  "uploadId": "clp123...",
  "filename": "john_doe_resume.pdf",
  "size": 1024576,
  "status": "uploaded"
}
```

#### POST /api/resume/parse
Parse an uploaded resume and extract structured data.

**Request Body:**
```json
{
  "uploadId": "clp123..."
}
```

**Response:**
```json
{
  "resumeData": {
    "personalInfo": {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1-555-123-4567"
    },
    "experience": [
      {
        "company": "Tech Corp",
        "position": "Senior Developer",
        "startDate": "2022-01-15",
        "endDate": "2023-12-31",
        "description": "Led development of React applications"
      }
    ],
    "education": [
      {
        "institution": "University of Tech",
        "degree": "Computer Science",
        "graduationDate": "2021-05-15"
      }
    ],
    "skills": ["React", "Node.js", "TypeScript"]
  },
  "timeline": {
    "gaps": [
      {
        "start": "2021-06-01",
        "end": "2021-12-31",
        "duration": "6 months"
      }
    ],
    "overlaps": [
      {
        "jobs": ["Tech Corp", "Startup Inc"],
        "period": "2022-01-15 to 2022-03-15",
        "duration": "2 months"
      }
    ]
  }
}
```

### GitHub Integration

#### POST /api/github/connect
Connect user's GitHub account via OAuth.

**Request Body:**
```json
{
  "code": "github_oauth_code",
  "state": "random_state_string"
}
```

**Response:**
```json
{
  "connected": true,
  "username": "johndoe",
  "profile": {
    "name": "John Doe",
    "bio": "Full-stack developer",
    "company": "Tech Corp",
    "location": "San Francisco",
    "publicRepos": 25,
    "followers": 150,
    "following": 75
  }
}
```

#### GET /api/github/activity
Get user's GitHub activity analysis.

**Query Parameters:**
- `username`: GitHub username (required)
- `days`: Number of days to analyze (default: 30)

**Response:**
```json
{
  "activity": {
    "totalCommits": 127,
    "activeDays": 18,
    "averageCommitsPerDay": 4.2,
    "longestStreak": 7,
    "languages": {
      "JavaScript": 45,
      "TypeScript": 30,
      "Python": 25
    },
    "repositories": [
      {
        "name": "awesome-project",
        "commits": 45,
        "lastCommit": "2023-12-15T10:30:00Z",
        "languages": ["JavaScript", "CSS"]
      }
    ]
  },
  "flags": [
    {
      "type": "low_activity",
      "severity": "medium",
      "description": "Only 3 commits in the last 30 days"
    }
  ]
}
```

### Trust Score

#### POST /api/scan
Create a new candidate scan and generate trust score.

**Request Body:**
```json
{
  "resumeId": "clp123...",
  "githubUsername": "johndoe",
  "candidateName": "John Doe",
  "position": "Senior Developer"
}
```

**Response:**
```json
{
  "scanId": "clp456...",
  "status": "processing",
  "estimatedTime": 30
}
```

#### GET /api/scan/[scanId]
Get scan results and trust score.

**Response:**
```json
{
  "scan": {
    "id": "clp456...",
    "status": "completed",
    "createdAt": "2023-12-15T10:30:00Z",
    "completedAt": "2023-12-15T10:30:45Z",
    "candidate": {
      "name": "John Doe",
      "position": "Senior Developer"
    },
    "trustScore": {
      "overall": 78,
      "breakdown": {
        "timeline": 85,
        "github": 72,
        "consistency": 77
      },
      "explanation": "Good overall profile with minor timeline gaps"
    },
    "redFlags": [
      {
        "category": "timeline",
        "severity": "low",
        "title": "Employment Gap",
        "description": "6-month gap between university and first job",
        "impact": "Low - common for new graduates",
        "recommendation": "Ask about gap during interview"
      },
      {
        "category": "github",
        "severity": "medium",
        "title": "Low Recent Activity",
        "description": "Only 3 commits in the last 30 days",
        "impact": "Medium - may indicate focus on other projects",
        "recommendation": "Verify current project involvement"
      }
    ]
  }
}
```

### Reports

#### GET /api/reports/[scanId]
Generate a downloadable report.

**Query Parameters:**
- `format`: "pdf" or "html" (default: "pdf")
- `include`: comma-separated list of sections to include

**Response:**
- PDF: Binary file download
- HTML: HTML report content

### User Management

#### GET /api/user/profile
Get current user's profile and usage statistics.

**Response:**
```json
{
  "user": {
    "id": "clp123...",
    "email": "user@example.com",
    "name": "John Doe",
    "plan": "pro",
    "createdAt": "2023-11-01T10:00:00Z"
  },
  "usage": {
    "scansThisMonth": 15,
    "scansLimit": 100,
    "storageUsed": 1024576,
    "storageLimit": 10485760
  },
  "settings": {
    "emailNotifications": true,
    "dataRetention": 30
  }
}
```

#### PUT /api/user/profile
Update user profile.

**Request Body:**
```json
{
  "name": "John Smith",
  "settings": {
    "emailNotifications": false,
    "dataRetention": 60
  }
}
```

## Webhooks

NoHam can send webhooks for important events:

### Scan Completed
```json
{
  "event": "scan.completed",
  "data": {
    "scanId": "clp456...",
    "trustScore": 78,
    "redFlags": 2
  }
}
```

### Usage Limit Reached
```json
{
  "event": "usage.limit_reached",
  "data": {
    "userId": "clp123...",
    "limit": "scans_per_month",
    "current": 100
  }
}
```

## SDKs

### JavaScript/Node.js

```javascript
import NoHam from '@noham/sdk';

const noham = new NoHam('your-api-key');

// Upload and scan a resume
const scan = await noham.scan({
  resume: './resume.pdf',
  githubUsername: 'johndoe'
});

console.log(scan.trustScore);
```

### Python

```python
from noham import NoHam

client = NoHam('your-api-key')

# Upload and scan a resume
scan = client.scan(
    resume='./resume.pdf',
    github_username='johndoe'
)

print(scan.trust_score)
```

## Error Codes

| Code | Description |
|------|-------------|
| `INVALID_REQUEST` | Request body or parameters are invalid |
| `UNAUTHORIZED` | Authentication required or invalid |
| `FORBIDDEN` | Insufficient permissions |
| `NOT_FOUND` | Resource not found |
| `RATE_LIMITED` | Rate limit exceeded |
| `FILE_TOO_LARGE` | Uploaded file exceeds size limit |
| `INVALID_FILE_TYPE` | Unsupported file format |
| `OPENAI_ERROR` | OpenAI API error |
| `GITHUB_ERROR` | GitHub API error |
| `INTERNAL_ERROR` | Internal server error |

## Support

For API support, contact:
- Email: api@noham.dev
- Discord: [NoHam Developer Community](https://discord.gg/noham-dev)
- Documentation: [docs.noham.dev](https://docs.noham.dev) 