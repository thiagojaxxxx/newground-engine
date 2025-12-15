const express = require('express');
const requestId = require('./src/middleware/requestId');
const notFound = require('./src/middleware/notFound');
const errorHandler = require('./src/middleware/errorHandler');
const healthRoutes = require('./src/routes/health');
const crsRoutes = require('./src/routes/crs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(requestId);
app.use(express.json());

app.use('/health', healthRoutes);
app.use('/crs', crsRoutes);

app.use(notFound);
app.use(errorHandler);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;

