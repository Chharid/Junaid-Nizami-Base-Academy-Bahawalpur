const express = require('express');
const path = require('path');
const app = express();

// Static files serve karo (index.html, admin.html, images sab)
app.use(express.static(path.join(__dirname)));

// Home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Admin portal
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Port — Railway/Render khud set karta hai, local mein 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ JN Base Academy server chal raha hai!`);
  console.log(`🌐 Local: http://localhost:${PORT}`);
  console.log(`📋 Admin: http://localhost:${PORT}/admin`);
});
