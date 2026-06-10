# Express Hello World Project

A simple Node.js Express server that displays "Hello World" on the main page, with automated tests.

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The server will start on port 3000 (or the port specified in the PORT environment variable).
Visit http://localhost:3000 to see "Hello World".

## Running Tests

```bash
npm run test
```

The test verifies that "Hello World" is displayed on the main page and will fail if the expected text is not present.

## Project Structure

- `server.js` - Express server configuration
- `server.test.js` - Test file using Jest and Supertest
- `package.json` - Project dependencies and scripts
