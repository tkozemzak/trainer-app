const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex("trainer").then((results)=>{
      console.log(results[0]);
      res.render("homepage", {results: results[0]});

    })
  },



}
