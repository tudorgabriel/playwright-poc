# Playwright Test Automation Project

## 📁 Project Structure

```
project-root/
├── ui-tests/              # All test specifications
├── fixtures/              # Page objects and test data management
│   ├── loginFixtures/     # Login-related fixtures (positive & negative scenarios)
│   └── orderFixtures/     # Order-related fixtures
├── support/
│   └── auth/
│       └── auth.setup.ts  # Global authentication setup
└── .auth/                 # Cached authentication states
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Git

### Initial Setup

After cloning the repository, run the following commands:

```bash
# Install project dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## ▶️ Running Tests

### Execute Tests in Terminal

```bash
npx playwright test --workers=5
```

### Run Tests in UI Mode

```bash
npx playwright test --ui
```

## 🏗️ Architecture

### Fixtures

The project uses **fixtures** to encapsulate page objects and test data, making tests easier to manage and maintain.

**Available Fixtures:**
- **Login Fixtures** - Handles both positive and negative login scenarios
- **Order Fixtures** - Manages order-related test data and page objects

### Authentication Setup

The project implements a **global authentication strategy** to optimize test execution:

- **Location**: `support/auth/auth.setup.ts`
- **Purpose**: Executes login once before all tests (except login-specific scenarios)
- **Benefit**: Authentication state is cached and reused across tests, avoiding redundant login operations

**How it works:**
1. Login is performed once during test setup
2. Authentication state is stored in `.auth/` directory
3. All tests (except login tests) reuse this cached authentication
4. Significantly reduces test execution time

### Test Organization

All test files are located in the `ui-tests/` folder, organized by feature or functionality.

## 📝 Notes

- Login-specific tests run independently without using cached authentication
- Workers are set to 5 for parallel execution by default
- Authentication state is gitignored and generated locally

## 🤝 Contributing

When adding new tests:
1. Place test files in the `ui-tests/` directory
2. Create appropriate fixtures in the `fixtures/` folder
3. Follow the existing naming conventions
4. Use cached authentication for non-login tests

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)