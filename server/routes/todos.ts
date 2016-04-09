import db from '../db';
import config from '../config';

export default {
  
  create(req, res) {
    const results = [];
    // Grab data from http request
    const data = {
      complete: false,
      text: req.body.text
    };
    
    console.log(req.body);
    
    db.one("INSERT INTO items(text, complete) values($1, $2) returning id", [data.text, data.complete])
      .then(function(data) {
        console.log("inserted " + data.id);
        res.status(200).send({ack: "Todos created"});
      })
      .catch(function (error) {
        console.log("ERROR:", error, data);
        res.status(500).send({ error: 'Something failed!' });
      });
  },
  
  read(req, res) {
    var results = [];
    db.manyOrNone("select * from items")
      .then(data => {
        res.json(data);
      })
      .catch(function(error) {
        res.status(500).send({ error: 'Something failed!' });
      });
  },
  
  update(req, res) {
    const data = {
      complete: req.body.complete || false,
      text: req.body.text
    };
    
    db.none("update items set text=$1, complete=$2 where id=$3", [data.text, data.complete, req.params.id])
      .then(() => res.status(200).send({ack: "Todos updated"}))
      .catch(error => {
        res.status(500).send({error: 'Something failed!'});
      });
  }
}
