var express = require("express");
var db = require("./app/models");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

require("./app/routes/api-routes.js")(app);

db.sequelize.sync().then(() => {
	app.listen(PORT, () => {
		console.log("Listening on port %s", PORT);
	});
});