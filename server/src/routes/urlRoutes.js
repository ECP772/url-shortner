import express from "express";
import { shortenUrl } from "../controllers/urlController.js";
import { redirectToLongURL } from "../controllers/redirect.controller.js";
const router = express.Router();
router.post("/", shortenUrl);
router.get("/:shortCode", redirectToLongURL);
export default router;
