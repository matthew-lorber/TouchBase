var express = require("express");
var db = require("./app/models");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log("Listening on port %s", PORT);
	});
});