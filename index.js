const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Perplexity = require('./Models/prompt.model');
const app = express();
const uri = "mongodb+srv://sparksai:Spark2024@cluster0.edrkswy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri)

  .then(() => {
    console.log('MongoDB Connected!');
    app.listen(3030, () => {
        console.log('Server running on port 3030');
    });
  })
  .catch((err) => {  
    console.log('MongoDB Connect Failed!', err);
  });


  app.use(cors());
const corsOptions = {
    origin: '*', // Allow only requests from this origin
    optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.use(cors(corsOptions));
// Middleware 
app.use(express.json());


app.post('/api/save', async (req, res) => {
    try {
        const data = await Perplexity.create(req.body);
        res.status(200).json(data);
        console.log(data)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});