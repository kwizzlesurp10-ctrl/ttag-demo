# Getting Started with ttag

Quick start guide to generating your first audio.

## Prerequisites

1. **Node.js** 18+ installed
2. **Python** 3.9+ installed
3. **Git** for cloning

Optional:
- NVIDIA GPU with CUDA for faster generation
- 8GB+ VRAM for large models

## Installation

### Global Install (Recommended)

```bash
npm install -g ttag
```

### Development Install

```bash
git clone https://github.com/YOUR_USERNAME/ttag-text-to-audio.git
cd ttag-text-to-audio
npm install
pip install -r requirements.txt
```

## First Generation

### Using the CLI

```bash
ttag generate --prompt "upbeat electronic music" --output my-first-track.mp3
```

### Options

- `--prompt` or `-p`: Text description of audio
- `--model` or `-m`: Model to use (musicgen, audiocraft, riffusion)
- `--duration` or `-d`: Length in seconds (default: 30)
- `--output` or `-o`: Output file path

## Examples

### Electronic Music

```bash
ttag generate -p "ambient techno with deep bass" -m musicgen
```

### Classical

```bash
ttag generate -p "epic orchestral battle theme" -m audiocraft -d 45
```

### Short Sound Effect

```bash
ttag generate -p "raindrops on window" -d 10 -o rain.mp3
```

## Using the API

### Start Server

```bash
ttag server --port 3000
```

### Generate via HTTP

```bash
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "jazz piano improvisation",
    "model": "musicgen",
    "duration": 30
  }' \
  --output jazz.mp3
```

## Troubleshooting

### "Python not found"

Ensure Python 3.9+ is in your PATH:
```bash
python3 --version
```

### GPU Issues

Test GPU availability:
```bash
python3 -c "import torch; print(torch.cuda.is_available())"
```

### Out of Memory

Use smaller model:
```bash
ttag generate -p "your prompt" -m musicgen-300m
```

### Slow Generation

Enable GPU or use smaller model. Check [MODELS.md](MODELS.md) for speed comparisons.

## Next Steps

- Read [MODELS.md](MODELS.md) to choose the right model
- Explore [API.md](API.md) for programmatic usage
- Check [ARCHITECTURE.md](ARCHITECTURE.md) to understand the system
- Join community discussions

Happy generating! 🎵

