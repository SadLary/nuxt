const express = require("express");
// Create express instance
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "90mb" }));
app.use(bodyParser.urlencoded({ limit: "90mb", extended: true }));
app.use(bodyParser.json());
// Require API routes
const users = require("./routes/users");
const cars = require("./routes/cars");
const DBconnect = require("./helpers/dbconnect.js");
DBconnect();

// This should already be declared in your API file
let app = express();

// ADD THIS
let cors = require('cors');
app.use(cors());

// Import API Routes
app.use(users);
app.use(cars);

// Export express app
module.exports = app;

// Start standalone server if directly running+
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
}
