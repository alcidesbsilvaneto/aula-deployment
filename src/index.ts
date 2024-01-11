import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { AppDataSource } from "./database";
import { User } from "./modules/user/entities/user.entity";

const app = express();

app.get("/users", async (_req, res) => {
  try {
    const users = await AppDataSource.getRepository(User).find();
    return res.send({ ok: true, users });
  } catch (error) {
    console.log(error, "error getting users");
    return res.send({ ok: false, error });
  }
});

app.listen(process.env.PORT ?? 3000, () => {
  console.log(`server started on port ${process.env.PORT} 🚀`);
});
