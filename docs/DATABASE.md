# Database Schema Documentation
### Say No To Sohams

## Overview

NoHam uses PostgreSQL as the primary database with Prisma as the ORM. This document outlines the database schema, relationships, and key considerations.

## Database Schema

### Users Table
Stores user account information and authentication data.

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String?  // Hashed password for email/password auth
  image     String?  // Profile image URL
  plan      Plan     @default(FREE)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // OAuth accounts
  accounts  Account[]
  sessions  Session[]
  
  // User data
  scans     Scan[]
  uploads   Upload[]
  
  @@map("users")
}

enum Plan {
  FREE
  PRO
  ENTERPRISE
}
```

### Accounts Table
Stores OAuth provider information for users.

```prisma
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@unique([provider, providerAccountId])
  @@map("accounts")
}
```

### Sessions Table
Manages user sessions for NextAuth.

```prisma
model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@map("sessions")
}
```

### Uploads Table
Tracks uploaded resume files.

```prisma
model Upload {
  id        String     @id @default(cuid())
  filename  String
  size      Int
  mimeType  String
  path      String
  status    UploadStatus @default(UPLOADED)
  createdAt DateTime   @default(now())
  userId    String
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  scans Scan[]
  
  @@map("uploads")
}

enum UploadStatus {
  UPLOADED
  PROCESSING
  PARSED
  ERROR
}
```

### Scans Table
Main table for candidate scans and trust score results.

```prisma
model Scan {
  id            String     @id @default(cuid())
  candidateName String
  position      String?
  githubUsername String?
  trustScore    Int?       // 0-100 scale
  status        ScanStatus @default(PENDING)
  createdAt     DateTime   @default(now())
  completedAt   DateTime?
  userId        String
  uploadId      String
  
  user          User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  upload        Upload      @relation(fields: [uploadId], references: [id], onDelete: Cascade)
  resumeData    ResumeData?
  githubData    GitHubData?
  redFlags      RedFlag[]
  reports       Report[]
  
  @@map("scans")
}

enum ScanStatus {
  PENDING
  PROCESSING
  COMPLETED
  ERROR
}
```

### ResumeData Table
Stores parsed resume information.

```prisma
model ResumeData {
  id          String   @id @default(cuid())
  scanId      String   @unique
  personalInfo Json    // Name, email, phone, etc.
  experience  Json     // Array of job experiences
  education   Json     // Array of education records
  skills      String[] // Array of skills
  timeline    Json     // Timeline analysis results
  createdAt   DateTime @default(now())
  
  scan Scan @relation(fields: [scanId], references: [id], onDelete: Cascade)
  
  @@map("resume_data")
}
```

### GitHubData Table
Stores GitHub activity analysis results.

```prisma
model GitHubData {
  id          String   @id @default(cuid())
  scanId      String   @unique
  username    String
  profile     Json     // GitHub profile information
  activity    Json     // Activity analysis results
  repositories Json    // Repository data
  createdAt   DateTime @default(now())
  
  scan Scan @relation(fields: [scanId], references: [id], onDelete: Cascade)
  
  @@map("github_data")
}
```

### RedFlags Table
Stores identified red flags for each scan.

```prisma
model RedFlag {
  id          String       @id @default(cuid())
  scanId      String
  category    FlagCategory
  severity    FlagSeverity
  title       String
  description String
  impact      String
  recommendation String
  createdAt   DateTime     @default(now())
  
  scan Scan @relation(fields: [scanId], references: [id], onDelete: Cascade)
  
  @@map("red_flags")
}

enum FlagCategory {
  TIMELINE
  GITHUB
  CONSISTENCY
  EXPERIENCE
  EDUCATION
  SKILLS
}

enum FlagSeverity {
  LOW
  MEDIUM
  HIGH
  CRITICAL
}
```

### Reports Table
Tracks generated reports for scans.

```prisma
model Report {
  id        String     @id @default(cuid())
  scanId    String
  format    ReportFormat
  filename  String
  path      String
  createdAt DateTime   @default(now())
  
  scan Scan @relation(fields: [scanId], references: [id], onDelete: Cascade)
  
  @@map("reports")
}

enum ReportFormat {
  PDF
  HTML
}
```

## Database Relationships

### User → Scans (One-to-Many)
- Each user can have multiple scans
- Scans are deleted when user is deleted (CASCADE)

### User → Uploads (One-to-Many)
- Each user can upload multiple resumes
- Uploads are deleted when user is deleted (CASCADE)

### Scan → ResumeData (One-to-One)
- Each scan has one resume data record
- Resume data is deleted when scan is deleted (CASCADE)

### Scan → GitHubData (One-to-One)
- Each scan can have one GitHub data record
- GitHub data is deleted when scan is deleted (CASCADE)

### Scan → RedFlags (One-to-Many)
- Each scan can have multiple red flags
- Red flags are deleted when scan is deleted (CASCADE)

### Scan → Reports (One-to-Many)
- Each scan can have multiple reports (PDF, HTML)
- Reports are deleted when scan is deleted (CASCADE)

## Indexes

### Performance Indexes
```sql
-- User email lookup
CREATE INDEX idx_users_email ON users(email);

-- Scan lookups
CREATE INDEX idx_scans_user_id ON scans(user_id);
CREATE INDEX idx_scans_created_at ON scans(created_at);
CREATE INDEX idx_scans_status ON scans(status);

-- Red flag lookups
CREATE INDEX idx_red_flags_scan_id ON red_flags(scan_id);
CREATE INDEX idx_red_flags_severity ON red_flags(severity);

-- Upload lookups
CREATE INDEX idx_uploads_user_id ON uploads(user_id);
CREATE INDEX idx_uploads_status ON uploads(status);
```

## Data Retention

### Automatic Cleanup
- **Completed scans**: Retained for 12 months
- **Failed scans**: Retained for 1 month
- **Uploaded files**: Deleted after scan completion
- **Generated reports**: Retained for 6 months

### GDPR Compliance
- Users can request data deletion
- All related data is cascaded on user deletion
- Audit log maintained for compliance

## Migration Strategy

### Initial Migration
```bash
# Create database
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

# Seed initial data
npx prisma db seed
```

### Future Migrations
```bash
# Create new migration
npx prisma migrate dev --name add_new_feature

# Deploy to production
npx prisma migrate deploy
```

## Backup Strategy

### Automated Backups
- Daily full backups at 2 AM UTC
- Point-in-time recovery available
- Backups retained for 30 days

### Manual Backup
```bash
# Create backup
pg_dump -h localhost -U username -d noham_prod > backup.sql

# Restore backup
psql -h localhost -U username -d noham_prod < backup.sql
```

## Environment-Specific Configurations

### Development
```env
DATABASE_URL="postgresql://noham_dev:password@localhost:5432/noham_dev"
```

### Testing
```env
DATABASE_URL="postgresql://noham_test:password@localhost:5432/noham_test"
```

### Production
```env
DATABASE_URL="postgresql://user:password@host:5432/noham_prod?ssl=true"
```

## Query Examples

### Get user's recent scans
```sql
SELECT s.id, s.candidate_name, s.trust_score, s.status, s.created_at
FROM scans s
WHERE s.user_id = $1
ORDER BY s.created_at DESC
LIMIT 10;
```

### Get scan with red flags
```sql
SELECT s.*, rf.category, rf.severity, rf.title, rf.description
FROM scans s
LEFT JOIN red_flags rf ON s.id = rf.scan_id
WHERE s.id = $1;
```

### Get usage statistics
```sql
SELECT 
  COUNT(*) as total_scans,
  COUNT(CASE WHEN status = 'COMPLETED' THEN 1 END) as completed_scans,
  AVG(trust_score) as avg_trust_score
FROM scans
WHERE user_id = $1
  AND created_at >= NOW() - INTERVAL '30 days';
```

## Performance Considerations

### Connection Pooling
- Use connection pooling for production
- Recommended: 10-20 connections per instance

### Query Optimization
- Use appropriate indexes
- Avoid N+1 query problems
- Use pagination for large result sets

### Caching Strategy
- Cache frequently accessed data
- Use Redis for session storage
- Implement query result caching

## Security Considerations

### Data Encryption
- Encrypt sensitive data at rest
- Use SSL/TLS for connections
- Hash passwords with bcrypt

### Access Control
- Row-level security for multi-tenant data
- API key-based access for integrations
- Regular security audits

### Compliance
- GDPR compliance for EU users
- SOC 2 Type II certification
- Regular penetration testing 