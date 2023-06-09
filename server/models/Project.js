const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  descripton: {
    type: String,
  },
  status: {
    type: String,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
