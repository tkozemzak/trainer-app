const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("trainer").then((results)=>{
      res.render("trainerlogin", {results: results[0]});

    })
  },



}
