# Gloves

A simple React web app that renders a pair of gloves. Inspired by this [CodePen](https://codepen.io/vicmguedes/pen/MWKZOdZ)


## Prerequisites

- Node.js (v18 or later)
- Yarn or npm package manager

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/yourusername/gloves.git
cd gloves
```

### Install Dependencies

Using Yarn:
```bash
yarn install
```

Or using npm:
```bash
npm install
```

### Development Server

To start the development server:

```bash
yarn dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
yarn build
# or
npm run build
```

The production-ready files will be in the `dist/` directory.

### Linting

To run ESLint and check code quality:

```bash
yarn lint
# or
npm run lint
```

### Preview Production Build

To preview the production build locally:

```bash
yarn preview
# or
npm run preview
```

## Project Structure

- `src/`: Source code for the React application
- `public/`: Static assets
- `vite.config.ts`: Vite configuration
- `tsconfig.json`: TypeScript configuration

## Technologies Used

- React 18
- TypeScript
- Vite
- ESLint
- Tailwind CSS