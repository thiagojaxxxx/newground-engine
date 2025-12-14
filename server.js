const express = require('express');
const healthRoutes = require('./src/routes/health');
const crsRoutes = require('./src/routes/crs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/health', healthRoutes);
app.use('/crs', crsRoutes);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;

