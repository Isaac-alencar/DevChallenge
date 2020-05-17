const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
    type: String,
    name: String,
    description: String,
    level: String,
    techs: [String],
    background: String,
    images: [String],
    github_url: String,
    brief: String,
});

module.exports = mongoose.model('Challenge', ChallengeSchema);