const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add this line

const app = express();
const port = 1234;

// Set up body parser middleware
app.use(bodyParser.json());

// Enable CORS
app.use(cors()); // Add this line

// Store image data and names
const imageArray = [];

app.post('/upload', (req, res) => {
  try {
    const { imageName, imageType, imageData } = req.body;

    if (!imageData) {
      return res.status(400).json({ error: 'No image data provided' });
    }

    // Save image data and name to the array
    imageArray.push({ imageName, imageType, imageData });

    return res.json({ success: true, message: 'Image data and name saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/retrieve', (req, res) => {
  return res.json({ imageArray: imageArray });
});

app.get('/getImageText/:imageName', (req, res) => {
  const { imageName } = req.params;

  // Find the image data by imageName
  const imageDataObject = imageArray.find((item) => item.imageName === imageName);

  if (!imageDataObject) {
    return res.status(404).json({ error: 'Image not found' });
  }

  const { imageData } = imageDataObject;

  // Return the exact code for the requested image
  return res.json({ imageData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
