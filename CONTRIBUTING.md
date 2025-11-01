# Contributing to ttag

Thank you for your interest in contributing to ttag! 🎉

## How to Contribute

### Reporting Bugs

Found a bug? Open an issue with:

- **Description**: Clear explanation of the issue
- **Steps to Reproduce**: How to trigger the bug
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, Node version, Python version, GPU info
- **Logs**: Relevant error messages or stack traces

### Suggesting Features

Feature requests are welcome! Include:

- **Use Case**: Why this feature is needed
- **Proposed Solution**: How it should work
- **Alternatives**: Other approaches considered

### Pull Requests

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Follow** the code style guidelines
4. **Add tests** for new functionality
5. **Update** documentation as needed
6. **Commit** with clear messages (conventional commits)
7. **Push** to your fork
8. **Open** a Pull Request

### Development Setup

```bash
git clone https://github.com/YOUR_USERNAME/ttag-text-to-audio.git
cd ttag-text-to-audio

npm install
pip install -r requirements.txt

npm test
npm run build
```

## Code Style

### TypeScript/JavaScript

- Use **ESLint** and **Prettier**
- Follow **Airbnb style guide**
- Maximum line length: 100 characters
- Use **async/await** over promises
- Add **JSDoc** comments for public APIs

### Python

- Follow **PEP 8**
- Use **black** formatter
- Type hints required
- Docstrings using Google style

### Git Commits

Use conventional commits:

```
feat: add musicgen streaming support
fix: resolve GPU memory leak
docs: update API documentation
test: add integration tests
refactor: simplify model bridge
```

## Testing

```bash
npm test              # All tests
npm run test:unit     # Unit only
npm run test:integration  # Integration
npm run test:coverage # Coverage
```

## Review Process

1. Automated checks (CI) must pass
2. At least one maintainer review
3. All feedback addressed
4. Maintainer approval
5. Squash and merge

Thank you for contributing! 🎵

