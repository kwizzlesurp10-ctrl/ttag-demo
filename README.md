# ttag - Text-to-Audio AI Music Generator 🎵

> Generate music and audio from text prompts using state-of-the-art AI models

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI Status](https://github.com/YOUR_USERNAME/ttag-text-to-audio/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/ttag-text-to-audio/actions)
[![npm version](https://badge.fury.io/js/ttag.svg)](https://badge.fury.io/js/ttag)

## 🎯 Features

- **Multiple Model Support**: MusicGen, AudioCraft, Riffusion, and more
- **Fast CLI**: Generate audio from terminal in seconds
- **REST API**: Production-ready API for integrations
- **Streaming Support**: Real-time audio generation
- **Easy Installation**: One-command setup with automatic model downloads
- **Open Source**: MIT licensed, fully transparent

## 🚀 Quick Start

### Installation

```bash
npm install -g ttag
```

### Generate Your First Audio

```bash
ttag generate --prompt "upbeat electronic dance music" --output my-track.mp3
```

## 📋 Requirements

- **Node.js**: 18+ 
- **Python**: 3.9+ (for model execution)
- **GPU**: Recommended for fast generation (CUDA/ROCm supported)
- **Disk Space**: 2GB+ for models and cache

## 🤖 Supported Models

| Model | Quality | Speed | License | GPU Required |
|-------|---------|-------|---------|--------------|
| MusicGen | ⭐⭐⭐⭐ | Fast | MIT | Recommended |
| AudioCraft | ⭐⭐⭐⭐⭐ | Medium | MIT | Yes |
| Riffusion | ⭐⭐⭐ | Fast | Apache 2.0 | Optional |

See [MODELS.md](docs/MODELS.md) for detailed comparison.

## 📚 Documentation

- [Getting Started](docs/GETTING-STARTED.md)
- [Model Comparison](docs/MODELS.md)
- [API Reference](docs/API.md)
- [Contributing](CONTRIBUTING.md)
- [Architecture](docs/ARCHITECTURE.md)

## 🛠️ Development

### Setup

```bash
git clone https://github.com/YOUR_USERNAME/ttag-text-to-audio.git
cd ttag-text-to-audio
npm install
pip install -r requirements.txt
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md).

**Current Status**: 🚧 Alpha - In Active Development

## 📜 License

MIT License - see [LICENSE](LICENSE) file.

## 🙏 Acknowledgments

- Meta AudioCraft Team for MusicGen
- Riffusion for open-source audio model
- The open-source AI audio community

---

**Made with ❤️ by the open-source community**

