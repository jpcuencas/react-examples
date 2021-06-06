import * as dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "production":
    path = `${__dirname}/../../.env.production`;
    break;
  case "test":
    path = `${__dirname}/../../.env.test`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path: path });

export default{
    PORT: process.env.PORT || 4001,
    enviroment: process.env.enviroment || 'dev',
}