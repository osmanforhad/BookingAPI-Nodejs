import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
    response.send("hello this is auth endpoint");
});

router.get("/register", (request, response) => {
    response.send("hello this is auth register endpoint");
});

export default router;