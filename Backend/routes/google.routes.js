import { Router } from "express";
import { signinWithGoogle } from "../controllers/google.controller.js";

export const googleRoutes = Router()

googleRoutes.post("/google", signinWithGoogle)
