# Next.js CI/CD Demo Project

This is a simple Next.js project that demonstrates CI/CD practices using GitHub Actions. The project includes a basic counter component with tests and automated workflows for testing and building.

## Features

- Next.js 14 with TypeScript
- Tailwind CSS for styling
- Jest and React Testing Library for testing
- GitHub Actions CI/CD pipeline
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Tests

To run the test suite:

```bash
npm test
```

### Running Linting

To check code quality:

```bash
npm run lint
```

## CI/CD Pipeline

The project includes a GitHub Actions workflow that:

1. Runs on every push to main and pull requests
2. Can be triggered manually using the workflow_dispatch event
3. Executes the following steps:
   - Installs dependencies
   - Runs tests
   - Runs linting
   - Builds the project (on main branch only)

## Project Structure

- `/src/components` - React components
- `/src/app` - Next.js app router pages
- `/src/components/__tests__` - Component tests
- `/.github/workflows` - GitHub Actions workflow files

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Write or update tests as needed
4. Submit a pull request

The CI/CD pipeline will automatically run tests and linting on your pull request.
