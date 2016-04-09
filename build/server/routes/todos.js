"use strict";
var db_1 = require('../db');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    create: function (req, res) {
        var results = [];
        var data = {
            complete: false,
            text: req.body.text
        };
        console.log(req.body);
        db_1.default.one("INSERT INTO items(text, complete) values($1, $2) returning id", [data.text, data.complete])
            .then(function (data) {
            console.log("inserted " + data.id);
            res.status(200).send({ ack: "Todos created" });
        })
            .catch(function (error) {
            console.log("ERROR:", error, data);
            res.status(500).send({ error: 'Something failed!' });
        });
    },
    read: function (req, res) {
        var results = [];
        db_1.default.manyOrNone("select * from items")
            .then(function (data) {
            res.json(data);
        })
            .catch(function (error) {
            res.status(500).send({ error: 'Something failed!' });
        });
    },
    update: function (req, res) {
        var data = {
            complete: req.body.complete || false,
            text: req.body.text
        };
        db_1.default.none("update items set text=$1, complete=$2 where id=$3", [data.text, data.complete, req.params.id])
            .then(function () { return res.status(200).send({ ack: "Todos updated" }); })
            .catch(function (error) {
            res.status(500).send({ error: 'Something failed!' });
        });
    }
};
//# sourceMappingURL=todos.js.map