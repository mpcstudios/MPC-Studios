This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Tina Cloud Mode

To run the CMS against the cloud datalayer (GitHub for content, Upstash Redis for indexing) instead of the local leveldb, set the following in `.env.local`:

```
TINA_PUBLIC_IS_LOCAL=false
GITHUB_PERSONAL_ACCESS_TOKEN=<GitHub PAT with repo scope>
GITHUB_OWNER=mpcstudios
GITHUB_REPO=MPC-Studios
GITHUB_BRANCH=<branch to write to — e.g. mac, not main>
KV_REST_API_URL=<Upstash Redis REST URL>
KV_REST_API_TOKEN=<Upstash Redis REST token>
NEXTAUTH_SECRET=<see below>
NEXTAUTH_URL=http://localhost:3000
```

Then run `pnpm dev:prod`. Saves in the admin push a commit to `GITHUB_BRANCH` — point it at a scratch branch, **never `main`**.

### NEXTAUTH_SECRET

`NEXTAUTH_SECRET` is used by [NextAuth.js](https://next-auth.js.org) to sign and encrypt session JWTs for the Tina admin login. You generate it yourself — it's not issued by any service.

**Generate one (pick the command for your OS):**

**macOS** (Terminal):

```bash
openssl rand -base64 32
```

**Linux** (bash/zsh):

```bash
openssl rand -base64 32
```

**Windows — PowerShell** (built-in, no extra install):

```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

**Windows — Git Bash / WSL** (if installed):

```bash
openssl rand -base64 32
```

**Fallback — any OS with Node.js:**

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Paste the output as `NEXTAUTH_SECRET`. Rules of thumb:

- **Local dev:** each developer can use their own value, or the team can share a single dev secret — either is fine since everything runs on localhost. The value only needs to stay consistent within a single running instance so session cookies remain valid.
- **Production (Vercel):** generate a **separate, unique** secret and store it in the Vercel project's environment variables. Never reuse the dev secret.
- **Never commit** either value to git. `.env.local` is gitignored by Next.js default — keep it that way.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
