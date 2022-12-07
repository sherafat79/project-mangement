const Application=require("./app/server");
const DB_URL="mongodb://localhost:27017/project-management"
new Application(8585,DB_URL);