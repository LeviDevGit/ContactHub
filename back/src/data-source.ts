import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "dotenv/config";

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "entities/**.{js,ts}");
  const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}");

  // if (!process.env.DATABASE_URL)
  //   throw new Error('Env var DATABASE_URL does not exists')

  return {
    type: "sqlite",
    database: "./src/database.sqlite",
    synchronize: true,
    entities: [entitiesPath],
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
