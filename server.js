const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Correct way
const noteRoutes = require('./routes/noteRoutes');
app.use('/api/notes', noteRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));