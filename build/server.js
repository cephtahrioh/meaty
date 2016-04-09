"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var ItemService_1 = require('./server/services/ItemService');
var app = express();
var router = express.Router();
router.get("/", function (req, res) {
    res.json({ message: "hello ishmershmish :D I love love you po! *change*" });
});
ItemService_1.default.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/services", router);
app.listen(8080);
console.log("Started server");
//# sourceMappingURL=server.js.map