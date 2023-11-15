/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains:['res.cloudinary.com'],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
        },
        {
          protocol: "https",
          hostname: "i.ibb.co",
        },
      ],
    },
     webpack: (config) => {
         config.resolve.alias.canvas = false;
      
         return config;
       },
  };
  
  module.exports = nextConfig;