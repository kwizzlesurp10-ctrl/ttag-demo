#!/usr/bin/env python3
"""
CLI entry point for Python model runners.
Routes to appropriate runner based on model name.
"""
import argparse
import sys
import os

# Add current directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))


def main():
    parser = argparse.ArgumentParser(description='ttag model runner')
    parser.add_argument('model', help='Model name (musicgen, audiocraft, riffusion)')
    parser.add_argument('--prompt', required=True, help='Text prompt')
    parser.add_argument('--duration', type=int, default=30, help='Duration in seconds')
    parser.add_argument('--output', required=True, help='Output file path')
    
    args = parser.parse_args()
    
    try:
        if args.model == 'musicgen':
            from runners.musicgen import main as musicgen_main
            # Reconstruct args for musicgen
            sys.argv = ['musicgen.py', '--prompt', args.prompt, '--duration', str(args.duration), '--output', args.output]
            musicgen_main()
        else:
            print(f"Error: Unknown model '{args.model}'", file=sys.stderr)
            sys.exit(1)
    except ImportError as e:
        print(f"Error: Failed to import model runner: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

