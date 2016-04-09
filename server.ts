import express = require("express");
import bodyParser = require("body-parser");
import TodoRoutes from "./server/routes/todos";

import ItemService from './server/services/ItemService'

let app = express();
let router = express.Router();

router.get("/", function(req, res) {
  res.json({message: "hello ishmershmish :D I love love you po! *change*"});
});

ItemService.use(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/services", router);

app.listen(8080);

console.log("Started server");
