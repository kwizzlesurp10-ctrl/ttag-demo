# GitHub Setup Instructions for ttag

Follow these steps to push ttag to GitHub and create your first release.

## Prerequisites

✅ All code committed locally  
✅ Tag v0.1.0-alpha.0 created  
✅ Working tree clean  

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **"New repository"** (or navigate to https://github.com/new)
3. Configure repository:
   - **Repository name**: `ttag-text-to-audio`
   - **Description**: `Text-to-Audio AI Music Generator - Generate music from text using AI models`
   - **Visibility**: ✅ **Public**
   - **DO NOT** initialize with:
     - ❌ README
     - ❌ .gitignore
     - ❌ License
   
   (We already have all of these!)

4. Click **"Create repository"**

## Step 2: Connect Local Repository

Run these commands in order:

```bash
cd /home/sevtech2/ttag-demo

# Add the GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/ttag-text-to-audio.git

# Verify remote is set
git remote -v

# Push main branch
git push -u origin main

# Push the tag
git push origin v0.1.0-alpha.0
```

## Step 3: Create GitHub Release

1. Go to your repository on GitHub
2. Click **"Releases"** in the right sidebar
3. Click **"Create a new release"**
4. Configure release:
   - **Tag**: Select `v0.1.0-alpha.0`
   - **Release title**: `ttag v0.1.0-alpha.0 - Initial Release`
   - **Description**: Copy from `RELEASE_NOTES.md` (see below)
5. Click **"Publish release"**

## Step 4: Configure Repository Settings

### Enable Branch Protection

1. Go to **Settings → Branches**
2. Click **"Add rule"**
3. Configure:
   - **Branch name pattern**: `main`
   - ✅ Require pull request reviews before merging
     - Required approving reviews: `1`
   - ✅ Require status checks to pass before merging
     - Add CI check: `test`
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators

### Enable Features

1. Go to **Settings → General**
2. Enable:
   - ✅ **Issues**
   - ✅ **Discussions**
   - ✅ **Wikis** (optional)

### Add Topics

1. Click **About** section
2. Click **Edit** (gear icon)
3. Add topics:
   - `ai`
   - `music-generation`
   - `text-to-audio`
   - `machine-learning`
   - `python`
   - `typescript`
   - `cli-tool`
   - `huggingface`
   - `musicgen`

## Step 5: Create Release Notes

Create file `RELEASE_NOTES.md`:

```markdown
# ttag v0.1.0-alpha.0 - Initial Release

🎉 First alpha release of **ttag**, the Text-to-Audio AI Music Generator!

## What's Included

- ✅ **Complete TypeScript CLI** - Generate audio from terminal
- ✅ **Model Framework** - Support for MusicGen, AudioCraft, Riffusion
- ✅ **Node.js ↔ Python Bridge** - Seamless integration
- ✅ **Comprehensive Documentation** - Getting started guides and API docs
- ✅ **CI/CD Pipelines** - Automated testing and linting
- ✅ **Open Source Governance** - MIT license, contribution guidelines

## Current Status

**Working:**
- CLI commands (`list-models`, `generate`)
- Environment validation
- Node-Python integration
- Build system

**Requires Setup:**
- Python ML libraries installation
- Model downloads (first run)

## Installation

### Global CLI
```bash
npm install -g ttag
```

### Development
```bash
git clone https://github.com/YOUR_USERNAME/ttag-text-to-audio.git
cd ttag-text-to-audio
npm install
pip install -r requirements.txt
npm run build
```

## Quick Start

```bash
# List available models
ttag list-models

# Generate audio (after setup)
ttag generate -p "ambient techno" -m musicgen -d 30 -o output.mp3
```

## Documentation

- 📖 [README](README.md) - Project overview
- 🚀 [Getting Started](docs/GETTING_STARTED.md) - Quick start guide
- 🤖 [Models](docs/MODELS.md) - Model comparison
- 🏗️ [Architecture](docs/ARCHITECTURE.md) - System design
- 🤝 [Contributing](CONTRIBUTING.md) - How to contribute

## Next Steps

See [NEXT_STEPS.md](NEXT_STEPS.md) for:
- Development roadmap
- Community engagement
- Feature priorities

## Acknowledgments

Built with ❤️ by the open-source community.

Special thanks to:
- Meta for MusicGen/AudioCraft
- Hugging Face for transformers library
- The AI audio community

---

**Note**: This is an alpha release. Focus areas are stability and core functionality before adding features.

Found a bug? Open an [issue](https://github.com/YOUR_USERNAME/ttag-text-to-audio/issues).  
Want to contribute? Read [CONTRIBUTING.md](CONTRIBUTING.md).
```

## Step 6: Post-Push Verification

Verify everything is working:

```bash
# Clone from GitHub in a new location to test
cd /tmp
git clone https://github.com/YOUR_USERNAME/ttag-text-to-audio.git
cd ttag-text-to-audio

# Verify structure
ls -la

# Check tags
git tag -l

# Build
npm install
npm run build

# Test CLI
node dist/cli/src/index.js --help
```

## Troubleshooting

### "Repository not found"
- Check repository name spelling
- Verify it's public
- Confirm GitHub username is correct

### "Authentication failed"
- Set up SSH keys or use HTTPS with token
- `git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/ttag-text-to-audio.git`

### "Tag already exists on remote"
- Only push tags if they don't exist remotely
- Check: `git ls-remote --tags origin`

## Success Checklist

After setup, verify:
- [ ] Code pushed to GitHub
- [ ] Tag visible on GitHub
- [ ] Release created
- [ ] README displays correctly
- [ ] Issues enabled
- [ ] Branch protection configured
- [ ] Topics added
- [ ] Clone and build works

---

**Ready?** Follow these steps in order, and your project will be live on GitHub! 🚀

