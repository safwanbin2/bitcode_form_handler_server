import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  jwt_123_form_builder: process.env.JWT_123_FORM_BUIDLER,
  port: process.env.PORT,
};
