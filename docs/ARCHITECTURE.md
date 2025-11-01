# Architecture Overview

ttag's system architecture and design decisions.

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     User Interface                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │     CLI      │  │  REST API    │  │  Web UI      │ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘ │
└─────────┼──────────────────┼──────────────────┼─────────┘
          │                  │                  │
          └──────────────────┴──────────────────┘
                             │
                   ┌─────────▼─────────┐
                   │   Model Bridge    │
                   │   (TypeScript)    │
                   └─────────┬─────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
    ┌─────▼──────┐    ┌──────▼──────┐   ┌──────▼──────┐
    │ MusicGen   │    │ AudioCraft  │   │  Riffusion  │
    │  Runner    │    │   Runner    │   │   Runner    │
    │ (Python)   │    │  (Python)   │   │  (Python)   │
    └────────────┘    └─────────────┘   └─────────────┘
```

## Components

### 1. CLI (`cli/src/`)

Command-line interface built with Commander.js.

**Commands**:
- `ttag generate` - Generate audio from text
- `ttag list-models` - Show available models
- `ttag server` - Start API server

### 2. API (`api/src/`)

REST API using Express.

**Endpoints**:
- `POST /api/generate` - Generate audio
- `GET /api/models` - List models
- `GET /api/health` - Health check

### 3. Model Bridge

TypeScript layer bridging Node.js and Python models.

**Responsibilities**:
- Spawn Python processes
- Handle IPC communication
- Manage model lifecycle
- Cache models

### 4. Model Runners (`models/python/runners/`)

Python scripts wrapping AI models.

**Architecture**:
```python
class BaseRunner:
    def load_model()
    def generate(prompt, **options)
    def stream(prompt, **options)
```

## Data Flow

```
User Input
    ↓
CLI/API validates input
    ↓
Model Bridge selects runner
    ↓
Python process spawns
    ↓
Model loads (first time only)
    ↓
Generation executes
    ↓
Audio bytes returned
    ↓
CLI saves file / API returns stream
```

## Storage

- **Models**: Hugging Face cache (`~/.cache/huggingface/`)
- **Generated Audio**: User-specified output directory
- **Config**: `~/.ttag/config.yaml`

## Scalability Considerations

### Current Design

- **Single-threaded** execution per request
- **Model loading** on first use, kept in memory
- **No queue system** in CLI

### Future Enhancements

- Background job queue (Bull/Agenda)
- Model GPU memory management
- Distributed processing
- WebSocket streaming

## Security

- **Input validation** on all commands
- **Sandboxed** Python execution
- **No arbitrary code** execution
- **Rate limiting** on API

## Dependencies

### Node.js Stack
- `commander` - CLI parsing
- `express` - Web framework
- `axios` - HTTP client
- `chalk` - Terminal colors

### Python Stack
- `torch` - Deep learning
- `transformers` - Model library
- `accelerate` - GPU acceleration
- `librosa` - Audio processing

## Configuration

Users can configure:
- Model defaults
- GPU/CPU preference
- Output directories
- Cache settings
- API keys

See `docs/CONFIGURATION.md` for details.

