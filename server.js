const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require routes
const interviewsRoutes = require('./src/routes/interviews.routes');
// const feedbackRoutes = require('./src/routes/feedback.routes');
// const roundsRoutes = require('./src/routes/rounds.routes');
const rolesRoutes = require('./src/routes/roles.routes');
const usersRoutes = require('./src/routes/users.routes');
const positionsRoutes = require('./src/routes/positions.routes');
const applicationsRoutes = require('./src/routes/applications.routes');

// Using routes as middleware
app.use('/api/v1/interviews', interviewsRoutes);
// app.use('/api/v1/feedback', feedbackRoutes);
// app.use('/api/v1/rounds', roundsRoutes);
app.use('/api/v1/roles', rolesRoutes);
app.use('/api/v1/positions', positionsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/applications', applicationsRoutes);

// Listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
