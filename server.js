const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Main page route - returns "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server only if not in test environment
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export app for testing
module.exports = app;
