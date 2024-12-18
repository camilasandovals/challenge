# Project Overview

This TypeScript React application contains a framework, a caching fetch library, and a web application.
This document outlines the project structure, development setup, and the reasoning behind key architectural decisions.

## Project Structure

The project is organized into three main folders:

- `application/` - React components and business logic
- `caching-fetch-library/` - Data fetching with caching implementation
- `framework/` - Custom framework implementation including server, client, and mock server

## Getting Started

Prerequisites:

- Node.js (v18 or higher recommended, otherwise it will throw an error)
- npm (v9 or higher recommended)

Setup:

```bash
npm install
npm start
```

The application will be available at http://localhost:3000

In the `package.json` file I have added the description of the project, the author.

## Production-Ready Additions

Here are the key additions I've made to prepare this project for production use, along with the reasoning behind each decision:

### Code Quality Tools

I've implemented ESLint and Prettier for code quality management, especially because these tools work together to ensure consistent code style and catch potential issues early in development.

**ESLint**

```bash
npm install --save-dev eslint @eslint/js typescript typescript-eslint
```

After installing the dependencies, I created the `eslint.config.mjs` file to configure ESLint and added the corresponding script to the `package.json` file.

```bash
npm run lint
```

Multiple files will be checked and the output will be displayed in the console. In this case, there are multiple errors.

**Prettier**

```bash
npm install --save-dev prettier
```

I have created the `.prettierrc` file to configure Prettier.

Note: No ignore files were created for time constraints but I would recommend creating them to avoid unnecessary linting errors.

In order to run the prettier command, I have added the following script to the `package.json` file:

```bash
npm run format
```


**Prettier Configuration**

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all"
}
```

These settings were chosen because:

- Single quotes are widely used in modern JavaScript/TypeScript projects
- 100 character line length balances readability with screen space
- 2-space indentation maintains readability while keeping code compact
- Semicolons are used at the end of each statement
- Trailing commas are used to avoid conflicts with Prettier


**Jest**

First I installed the React Testing Library dependencies and its related tools.

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/dom @testing-library/user-event
```

Then I installed Jest dependencies:

```bash
npm install --save-dev jest jest-environment-jsdom ts-jest @types/jest
npm install --save-dev ts-node
```

After installing the dependencies, I created the `jest.config.ts` file to configure Jest.

Added the corresponding script to the `package.json` file.

```bash
npm run test
```

### Development Scripts

I've added essential npm scripts to streamline development:

```bash
npm run lint     # Code quality checks
npm run format   # Code formatting
npm run validate # Complete validation suite
npm run test     # Run Jest tests
```

These scripts provide a consistent way to maintain code quality across the team. While more complex setups (like pre-commit hooks) were considered, I opted for this simpler approach.

## Future Improvements

Several areas have been identified for future enhancement:

### Testing Infrastructure

While the dependencies for Jest and React Testing Library are included, the full testing setup remains a priority for future implementation.

### Development Experience

Planned improvements include:

- Hot module replacement for faster development cycles
- Enhanced error handling and logging
- Environment-specific configuration management
- Implement GitHub Actions for continuous integration (CI) to automate build, testing, and deployment processes.

### Performance Optimization

Key areas for optimization:

- Implementation of code splitting
- Enhanced caching strategies
- Addition of performance monitoring

## Contributing

Guidelines for contributing:

1. Ensure all code passes linting and formatting checks
2. Include thorough testing for new features
3. Update documentation to reflect significant changes

## License

ISC.
