import { DataSource } from "typeorm";
import { User } from "./modules/user/entities/user.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST ?? "localhost",
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  extra: {
    ssl: process.env.NODE_ENV === "production",
  },
  entities: [User],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize();
