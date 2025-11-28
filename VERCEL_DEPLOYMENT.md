# Vercel Deployment Guide

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/VivianFuVivianFu/video1)

## Manual Deployment Steps

### 1. Connect Repository to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"Add New Project"**
4. Import `VivianFuVivianFu/video1` repository
5. Click **"Deploy"**

### 2. Configuration (Automatic)

The `vercel.json` file is already configured with:

```json
{
  "version": 2,
  "public": true,
  "rewrites": [
    {
      "source": "/",
      "destination": "/public/index.html"
    }
  ],
  "headers": [
    {
      "source": "/demo/(.*)",
      "headers": [
        {
          "key": "Content-Type",
          "value": "video/mp4"
        },
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        },
        {
          "key": "Accept-Ranges",
          "value": "bytes"
        }
      ]
    }
  ]
}
```

### 3. Verify Deployment

After deployment completes:

1. Visit your Vercel URL (e.g., `https://video1.vercel.app`)
2. The video should load and play automatically
3. Check browser console for any errors (F12)

## Project Structure for Vercel

```
├── index.html              # Main demo page
├── public/
│   └── index.html         # Alternative demo page
├── demo/
│   └── luma_chat_demo.mp4 # Video file (1.7 MB)
├── vercel.json            # Vercel configuration
└── [other files]
```

## Video File Details

- **Path:** `/demo/luma_chat_demo.mp4`
- **Size:** 1.7 MB
- **Format:** H.264 Main profile, level 3.1
- **Audio:** AAC 128kbps, 48kHz stereo
- **Optimizations:** FastStart enabled for streaming

## Troubleshooting

### Video doesn't load

1. **Check file path:** Ensure the video is at `/demo/luma_chat_demo.mp4`
2. **Check browser console:** Press F12 and look for errors
3. **Verify headers:** Video should be served with `Content-Type: video/mp4`
4. **Test locally:** Run `npx serve .` to test locally first

### Video loads but won't play

1. **Check codec compatibility:** The video uses H.264 Main profile (universally supported)
2. **Check browser:** Update to latest version
3. **Check network:** Ensure good internet connection
4. **Check file:** Download the file directly to verify it's not corrupted

### 404 Error

1. **Verify deployment:** Check that all files were uploaded
2. **Check vercel.json:** Ensure configuration is correct
3. **Rebuild:** Trigger a new deployment in Vercel dashboard

## Testing Locally

Before deploying, test locally:

```bash
# Install serve
npm install -g serve

# Serve the directory
serve .

# Open browser to http://localhost:3000
```

## Environment Variables

No environment variables are required for this static deployment.

## Custom Domain (Optional)

To add a custom domain:

1. Go to your Vercel project settings
2. Navigate to **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimization

The deployment is already optimized with:

- ✅ **Video FastStart:** Moov atom at beginning for instant streaming
- ✅ **Caching Headers:** 1-year cache for video file
- ✅ **Range Requests:** Enabled for video seeking
- ✅ **Compression:** Automatic gzip/brotli for HTML/CSS/JS
- ✅ **CDN:** Vercel Edge Network for global delivery

## Monitoring

After deployment, monitor:

1. **Vercel Analytics:** Check page views and performance
2. **Browser Console:** Monitor for JavaScript errors
3. **Network Tab:** Verify video loads with correct headers

## Expected URLs

After deployment, you'll have:

- **Main page:** `https://your-project.vercel.app/`
- **Video file:** `https://your-project.vercel.app/demo/luma_chat_demo.mp4`
- **Alt page:** `https://your-project.vercel.app/public/index.html`

## Support

If you encounter issues:

1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review [VIDEO_FIX_NOTES.md](./VIDEO_FIX_NOTES.md) for codec info
3. Check browser compatibility in [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

---

**Last Updated:** 2025-11-29
**Status:** ✅ Ready for deployment
