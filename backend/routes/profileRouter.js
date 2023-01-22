import { Router } from "express";
import ProfileController from "../src/controllers/profileController.js";

const router = Router();
const profileController = new ProfileController();

router.post("/saveProfile", (req, res) => {
    console.log("receiving");
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    profileController
        .saveProfile(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json(err);
        });
});

router.get("/getProfile", (req, res) => {
    console.log("getting the profile");
    // console.log(req);
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    profileController
        .getProfile(req)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((err) => {
            console.log(err);
            res.status(404).json(err);
        });
});

router.post("/updateProfile", (req, res) => {
    profileController
        .updateProfile(req)

})

export default router;
