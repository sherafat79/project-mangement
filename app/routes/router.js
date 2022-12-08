const { checkLogin } = require("../http/middlewares/CheckLogin");
const { authRoutes } = require("./auth");
const { projectRoutes } = require("./project");
const { teamRoutes } = require("./team");
const { UserRoutes } = require("./user");

const router=require("express").Router();
router.use("/auth",authRoutes)
router.use("/user",checkLogin,UserRoutes)
router.use("/project",projectRoutes)
router.use("/team",teamRoutes)

module.exports={
    AllRoutes:router
}