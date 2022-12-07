const { authRoutes } = require("./auth");
const { projectRoutes } = require("./project");
const { teamRoutes } = require("./team");
const { UserRoutes } = require("./user");

const router=require("express").Router();
router.use("/auth",authRoutes)
router.use("/user",UserRoutes)
router.use("/project",projectRoutes)
router.use("/team",teamRoutes)

module.exports={
    AllRoutes:router
}