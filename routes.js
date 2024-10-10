const express = require('express');
const router = express.Router();
const predefinedResponses = require('./responses');

router.post('/api/chat', (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  const aiResponse = predefinedResponses[userMessage] || "I'm not sure about that. Can you please specify?";
  res.json({ message: aiResponse });
});

module.exports = router;
