# Simple Nextjs File Server

This is a simple file server built with Next.js. Its purpose is to let you create static file links and manually upload any files you want to share into the `public` directory.

## Usage

- Manually upload the files you want to share into the `public` directory (or any subdirectory inside it).
- Access your files directly via URL: `http://localhost:3000/your-folder-or-file-name/your-file`
- When deployed to production, access your files via: `https://yourdomain.com/your-folder-or-file-name/your-file`
- If you access an invalid or non-existent path, the system will return a 403 Forbidden error page similar to AWS S3.

## Deploy with Dokploy

You can easily deploy this project to Dokploy:

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket, etc).
2. Go to [https://app.dokploy.com](https://app.dokploy.com) and sign in or sign up.
3. Click "Create Project" and connect your repository (from GitHub or GitLab).
4. Choose the branch you want to deploy.
5. Click "Deploy" and wait for your app to be live.
6. After deployment, configure your custom domain to point to your Dokploy deployment (follow the DNS instructions in Dokploy dashboard).
7. Dokploy will auto-detect Next.js. You can use the default build and start commands:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start` or `npm run start`

For more details, see the [Dokploy documentation](https://docs.dokploy.com/).

## Deploy with Vercel

You can also deploy this project easily to [Vercel](https://vercel.com/):

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket, etc).
2. Go to [https://vercel.com/import](https://vercel.com/import) and import your repository.
3. Follow the setup instructions (Vercel will auto-detect Next.js).
4. Click "Deploy" and wait for your app to be live.
5. (Optional) Configure your custom domain in the Vercel dashboard to point to your deployment.

For more details, see the [Vercel documentation](https://vercel.com/docs).

## Notes
- There is no web upload feature, only manual upload is supported.
- Only static files in the `public` directory are accessible directly.
- All dynamic routes or the homepage will return a 403 Forbidden error.
