# Troubleshooting Guide

## Video Not Playing on Vercel

If you're seeing errors when trying to play the video on Vercel, follow this checklist:

### 1. Check Deployment Status

```bash
# View recent deployments
vercel ls

# Check deployment logs
vercel logs <deployment-url>
```

**What to look for:**
- Deployment should show "Ready" status
- No build errors in logs
- All files should be uploaded (check file count)

### 2. Verify File Exists

Open these URLs in your browser (replace `your-project` with your actual Vercel URL):

- `https://your-project.vercel.app/` (should show demo page)
- `https://your-project.vercel.app/demo/luma_chat_demo.mp4` (should download/play video)

**Expected:**
- Demo page loads
- Video file downloads when accessed directly
- File size: 1.7 MB

### 3. Check Browser Console

1. Open the demo page
2. Press `F12` to open Developer Tools
3. Go to **Console** tab
4. Look for errors

**Common errors and fixes:**

| Error | Fix |
|-------|-----|
| `404 Not Found` | File not uploaded - redeploy |
| `CORS error` | Check vercel.json headers |
| `Codec not supported` | Video encoding issue - check VIDEO_FIX_NOTES.md |
| `Network error` | Check internet connection |

### 4. Verify Video Headers

In Developer Tools:
1. Go to **Network** tab
2. Reload the page
3. Click on `luma_chat_demo.mp4`
4. Check **Headers** section

**Required headers:**
```
Content-Type: video/mp4
Accept-Ranges: bytes
Cache-Control: public, max-age=31536000, immutable
```

If headers are missing, check your `vercel.json` configuration.

### 5. Test Video File Locally

Download the video and test it works:

```bash
# Download from GitHub
curl -L https://github.com/VivianFuVivianFu/video1/raw/main/demo/luma_chat_demo.mp4 -o test.mp4

# Check file integrity
ffprobe test.mp4

# Play locally (Windows)
start test.mp4

# Play locally (Mac)
open test.mp4

# Play locally (Linux)
xdg-open test.mp4
```

**Expected output:**
- File size: ~1.7 MB
- Duration: 60 seconds
- Resolution: 720x1280
- Codec: h264

### 6. Common Vercel-Specific Issues

#### Issue: "DEPLOYMENT_NOT_FOUND"

**Solution:**
1. Check deployment URL is correct
2. Project may have been deleted
3. Redeploy from GitHub

#### Issue: "DEPLOYMENT_PAUSED"

**Solution:**
1. Go to Vercel dashboard
2. Find your project
3. Click "Resume" button

#### Issue: File not found (404)

**Solution:**
```bash
# Ensure .gitignore allows demo folder
# Check .gitignore contains:
!demo/
!demo/*.mp4
```

#### Issue: Video buffering/slow loading

**Solution:**
- Check video has FastStart enabled
- Verify file size (should be 1.7 MB)
- Check Vercel region (may need to change)

### 7. Browser Compatibility Check

Test in multiple browsers:

| Browser | How to Test |
|---------|------------|
| Chrome | Open in Chrome, check console |
| Firefox | Open in Firefox, check console |
| Safari | Open in Safari (Mac), check console |
| Edge | Open in Edge, check console |
| Mobile | Open on phone, test playback |

**Known working configurations:**
- ✅ Chrome 120+ (Windows, Mac, Linux)
- ✅ Firefox 120+ (Windows, Mac, Linux)
- ✅ Safari 17+ (Mac, iOS)
- ✅ Edge 120+ (Windows)

### 8. Re-encode Video (Last Resort)

If video still won't play, re-encode with maximum compatibility:

```bash
ffmpeg -i demo/luma_chat_demo.mp4 \
  -vf "scale=720:1280:flags=bicubic,format=yuv420p" \
  -c:v libx264 \
  -pix_fmt yuv420p \
  -profile:v baseline \
  -level 3.0 \
  -crf 23 \
  -preset medium \
  -movflags +faststart \
  -c:a aac \
  -b:a 128k \
  -ar 48000 \
  -ac 2 \
  demo/luma_chat_demo_compat.mp4
```

Then replace the original file and redeploy.

### 9. Vercel Configuration Checklist

Ensure `vercel.json` is correct:

```json
{
  "version": 2,
  "public": true,
  "rewrites": [
    {
      "source": "/",
      "destination": "/index.html"
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

### 10. Force New Deployment

If all else fails:

```bash
# Option 1: Trigger redeploy in Vercel dashboard
# Go to project → Deployments → Latest → ⋯ → Redeploy

# Option 2: Force push a change
git commit --allow-empty -m "Trigger redeploy"
git push
```

## Getting Help

If you're still stuck:

1. **Check Vercel Status:** https://www.vercel-status.com/
2. **Vercel Docs:** https://vercel.com/docs
3. **Video Specs:** See [VIDEO_FIX_NOTES.md](./VIDEO_FIX_NOTES.md)
4. **GitHub Issues:** https://github.com/VivianFuVivianFu/video1/issues

## Diagnostic Information to Collect

When reporting issues, include:

```
1. Vercel deployment URL
2. Browser name and version
3. Operating system
4. Error message from console (F12)
5. Network tab screenshot showing video request
6. Does video download work? (direct URL access)
7. Does video play locally?
```

## Quick Verification Script

Run this to verify everything is correct:

```bash
# Check file exists
ls -lh demo/luma_chat_demo.mp4

# Check video specs
ffprobe -v error -show_format -show_streams demo/luma_chat_demo.mp4 | grep -E "(codec_name|pix_fmt|profile|duration|size)"

# Check .gitignore
cat .gitignore | grep -A2 "demo"

# Check vercel.json
cat vercel.json

# Test video plays locally
npx serve . &
sleep 2
open http://localhost:3000
```

---

**Last Updated:** 2025-11-29
