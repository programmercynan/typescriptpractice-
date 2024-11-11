# typescriptpractice-
# TypeScript Basics Setup

This project provides a basic setup for working with TypeScript, covering key elements like environment setup, compilation, type annotations, and type inference.

## Project Overview

This project demonstrates:
- Setting up a TypeScript environment from scratch
- Configuring a `tsconfig.json` file
- Using TypeScript to compile `.ts` files to JavaScript
- Using type annotations for strings, numbers, booleans, null, and undefined
- Type inference in TypeScript

## Getting Started

### Prerequisites

- **Node.js**: Ensure that Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: Node Package Manager, typically installed with Node.js.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/typescript-basics.git
   cd typescript-basics

# install typescript 
npm install typescript --save-dev

# initialize typescript configuration:
npx tsc --init

# structure of the project
typescript-basics/
├── src/
│   └── index.ts            # Main TypeScript file with examples of type annotations
├── dist/                   # Compiled JavaScript files go here
├── tsconfig.json           # TypeScript configuration file
└── package.json            # Project dependencies
