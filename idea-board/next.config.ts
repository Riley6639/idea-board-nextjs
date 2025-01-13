import type { NextConfig } from "next";
import dotenv from "dotenv";

dotenv.config();

// console.log(process.env.POSTGRES_URL);

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  env: {
    POSTGRES_URL: process.env.POSTGRES_URL,
  },
};

export default nextConfig;
