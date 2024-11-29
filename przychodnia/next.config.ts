import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    DB_HOST: "localhost",
    DB_USER: "root",
    DB_PASSWORD: "",
    DB_NAME: "przychodnia"
  }
};

export default nextConfig;
