# Model Comparison Guide

Complete guide to supported text-to-audio models in ttag.

## Overview

ttag supports multiple AI models for audio generation, each with different strengths.

## Models

### MusicGen (Meta)

**Best For**: Quick prototypes, demos, general music generation

| Attribute | Value |
|-----------|-------|
| Quality | ⭐⭐⭐⭐ (4/5) |
| Speed | Fast (30s track in ~10s on GPU) |
| License | MIT |
| GPU Required | Recommended, CPU possible |
| Model Size | 300M, 1.5B, 3.3B |
| Max Duration | 30 seconds |
| Pros | Fast, good quality, open source, easy setup |
| Cons | Limited control, shorter outputs |

**Installation**:
```bash
pip install transformers torch torchaudio
```

**Usage**:
```bash
ttag generate --model musicgen --prompt "ambient techno"
```

---

### AudioCraft (Meta)

**Best For**: Production-quality output, professional music

| Attribute | Value |
|-----------|-------|
| Quality | ⭐⭐⭐⭐⭐ (5/5) |
| Speed | Medium (30s track in ~30s on GPU) |
| License | MIT |
| GPU Required | Yes |
| Model Size | Large (multi-GB) |
| Max Duration | 45 seconds |
| Pros | Highest quality, long outputs, better coherence |
| Cons | Slower, requires more VRAM |

**Installation**:
```bash
pip install audiocraft
```

**Usage**:
```bash
ttag generate --model audiocraft --prompt "epic orchestral"
```

---

### Riffusion

**Best For**: Quick experiments, edge deployment

| Attribute | Value |
|-----------|-------|
| Quality | ⭐⭐⭐ (3/5) |
| Speed | Fast |
| License | Apache 2.0 |
| GPU Required | Optional, works on CPU |
| Model Size | Small (~1GB) |
| Max Duration | 30 seconds |
| Pros | CPU-friendly, lightweight, fast setup |
| Cons | Lower quality than modern models |

**Installation**:
```bash
pip install diffusers transformers
```

**Usage**:
```bash
ttag generate --model riffusion --prompt "jazz piano"
```

---

## Recommendations

### Choose by Use Case

- **🎵 Prototyping**: Use **MusicGen 300M** (fastest, good enough quality)
- **🎬 Production**: Use **AudioCraft** (best quality)
- **💻 Edge/Cost**: Use **Riffusion** (CPU-friendly)

### Choose by Hardware

- **High-end GPU (12GB+)**: AudioCraft
- **Mid-range GPU (8GB)**: MusicGen
- **CPU-only**: Riffusion

## Future Models

Planned integrations:
- Stable Audio 2.0
- MusicLM (Google)
- Audiobox (Meta)

See roadmap for updates.

