# Contributing Guide for VisiUI

Thank you for your interest in contributing to **VisiUI**! VisiUI is an open-source library of pre-built, highly customizable React components. This guide will help you get started and provide guidelines for contributing to the project.

## Getting Started

1. **Fork the Repository**
   - Fork the official VisiUI repository to your GitHub account.

2. **Clone the Repository**
   - Clone your forked repository locally:
     ```bash
     git clone https://github.com/your-username/VisiUI.git
     cd VisiUI
     ```

3. **Install Dependencies**
   - Once the repository is cloned, install the necessary dependencies:
     ```bash
     npm install
     ```

4. **Create a Branch**
   - Before starting work on a new feature or bug fix, create a new branch:
     ```bash
     git checkout -b feature-name
     ```

## Contribution Guidelines

### 1. Code Style

- **Use Prettier**: Ensure that your code follows the styling conventions used in the project. You can the auto-formatting with:
  ```bash
  npx prettier . --write
  ```
- **Check that everything works correctly**: Run ```npm run build```, ```npm run dev``` and ```npm run lint``` to ensure that your code hasn't introduced any errors.
- **Comment your code**: Add helpful comments to explain the reasoning behind complex or non-obvious implementations.

## React Components

- **Creating New Components**: When adding a new component, make sure that:
- It is highly customizable.
- It follows VisiUI’s design philosophy of flexibility and reusability.
- It is well-documented with usage examples.

## Pull Requests

- **Title and Description**: When creating a pull request (PR), provide a descriptive title and a clear explanation of what was done and why.
- **Small and Focused PRs**: Keep PRs small and focused on a single change or a group of related changes. This makes code review easier.
- **Link Issues**: If your PR resolves an open issue, remember to link it using the `Fixes #issue_number` syntax.
- **Reviews and Feedback**: Be open to reviews and feedback. Maintaining code quality is a shared goal.

## The point of contributions for now
For now, we are prioritizing the website, so contributions should focus on the VisiUI website.
