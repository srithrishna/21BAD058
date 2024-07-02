const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const axios = require('axios');

app.use(express.json());
app.use(cors());

app.get('/register', async (req, res) => {
  try {
    const response = await axios.post('http://20.244.56.144/test/register', {
      "companyName": "Kumaraguru College of Technology",
      "ownerName": "Sri Thrishna J",
      "rollNo": "21BAD058",
      "ownerEmail": "srithrishna.21ad@kct.ac.in",
      "accessCode": "XmPwdN"
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Success:', response.data);
    res.json(response.data); // Send response data back to client
  } catch (error) {
    if (error.response && error.response.status === 409) {
      console.error('Conflict: Registration data already exists.');
      res.status(409).json({ message: 'Registration data already exists' });
    } else {
      console.error('Error:', error.message);
      res.status(500).json({ message: 'Error registering', details: error.message });
    }
  }
});

app.get('/auth', async (req, res) => {
  try {
    const response = await axios.post('http://20.244.56.144/test/auth', {
      "companyName": "Kumaraguru College of Technology",
      "clientID": "786effe5-41c8-4491-94c8-1b288d662ea5",
      "clientSecret": "BjXonDcrswbrmwsV",
      "ownerName": "Sri Thrishna J",
      "ownerEmail": "srithrishna.21ad@kct.ac.in",
      "rollNo": "21BAD058"
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Success:', response.data);
    res.json(response.data); // Send response data back to client
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Error authenticating', details: error.message });
  }
});

app.listen(port, () => {
  console.log('Server is running on http://localhost:${port}');
});