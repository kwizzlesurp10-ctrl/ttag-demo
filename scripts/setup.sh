#!/bin/bash

# ttag setup script
set -e

echo "🎵 Setting up ttag..."

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 18+"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version too old. Please upgrade to 18+"
    exit 1
fi

echo "✅ Node.js $(node -v) found"

# Check Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 not found. Please install Python 3.9+"
    exit 1
fi

PYTHON_VERSION=$(python3 --version | cut -d' ' -f2 | cut -d'.' -f1,2)
echo "✅ Python $PYTHON_VERSION found"

# Install Node dependencies
echo ""
echo "📦 Installing Node.js dependencies..."
npm install

# Create Python virtual environment
echo ""
echo "🐍 Creating Python virtual environment..."
python3 -m venv venv || true

# Activate virtual environment
source venv/bin/activate || source venv/Scripts/activate

# Install Python dependencies
echo ""
echo "📦 Installing Python dependencies..."
pip install -q --upgrade pip
pip install -q -r requirements.txt

# Build TypeScript
echo ""
echo "🔨 Building TypeScript..."
npm run build

echo ""
echo "✅ Setup complete!"
echo ""
echo "To activate Python environment:"
echo "  source venv/bin/activate  # Linux/Mac"
echo "  venv\\Scripts\\activate     # Windows"
echo ""
echo "To test:"
echo "  npm run test"
echo "  node cli/dist/index.js --help"
echo ""

