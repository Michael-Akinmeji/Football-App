require("dotenv").config();

export default {
  MONGODB_URI:
    process.env.NODE_ENV === "production"
      ? process.env.MONGODB_URI
      : "mongodb://localhost/football",
  SECRET: process.env.SECRET || "dkjdjdjkdjdjkd",
  CLIENT_URI: process.env.CLIENT_URI,
  SERVER_URI: process.env.SERVER_URI,
  MAIL_PASS: process.env.MAIL_PASS,
  MAIL_ADDRESS: process.env.MAIL_ADDRESS,
  MAIL_HOST: process.env.MAIL_HOST,
};
