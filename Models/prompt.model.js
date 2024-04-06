const mongoose = require('mongoose');

const PerplexitySchema = mongoose.Schema({
    prompt:{
        type:String,
    },
    response:{
        type:String,
    },
}, {
    timestamps:true
});

const Perplexity = mongoose.model('Perplexity', PerplexitySchema);

module.exports = Perplexity;