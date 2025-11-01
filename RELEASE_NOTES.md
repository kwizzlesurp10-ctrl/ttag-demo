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

See [NEXT_STEPS.md](NEXT_STEPS.md) for development roadmap and community engagement.

## Acknowledgments

Built with ❤️ by the open-source community.

Special thanks to Meta for MusicGen/AudioCraft and Hugging Face for transformers library.

---

**Note**: This is an alpha release. Focus areas are stability and core functionality.

Found a bug? Open an issue.  
Want to contribute? Read [CONTRIBUTING.md](CONTRIBUTING.md).
