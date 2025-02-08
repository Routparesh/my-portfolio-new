const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// OAuth2 setup
const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.GMAIL_REDIRECT_URL
);

const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// Generate auth URL
app.get('/api/auth/gmail/url', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.json({ url: authUrl });
});

// Handle OAuth2 callback
app.get('/api/auth/gmail/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    
    // Store tokens securely - for now, we'll store in memory
    process.env.GMAIL_ACCESS_TOKEN = tokens.access_token;
    process.env.GMAIL_REFRESH_TOKEN = tokens.refresh_token;
    
    res.send('Authentication successful! You can close this window.');
  } catch (error) {
    console.error('Error getting tokens:', error);
    res.status(500).send('Authentication failed!');
  }
});

// Email endpoint using Gmail API
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Set up Gmail API
    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    // Create email message
    const emailContent = `From: "${name}" <${process.env.EMAIL_USER}>
To: routpareshkumar737@gmail.com
Subject: Portfolio Contact: ${subject}

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

    // Encode the email
    const encodedEmail = Buffer.from(emailContent)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    // Send email using Gmail API
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: encodedEmail,
      },
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Error sending email', 
      error: error.message,
      auth_url: oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
      })
    });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('To authorize Gmail, visit:', oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  }));
});
