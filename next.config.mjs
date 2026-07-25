/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" },
    { protocol: "https", hostname: "lh3.googleusercontent.com" },
    { protocol: "https", hostname: "avatars.githubusercontent.com" },
    { protocol: "https", hostname: "res.cloudinary.com" },
    { protocol: "https", hostname: "i.ibb.co" },
    { protocol: "https", hostname: "static.vecteezy.com" },
    { protocol: "https", hostname: "cdn.pixabay.com" },
    {
        protocol: "https",
        hostname: "**",
    },
    { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
  ],
  },
};

export default nextConfig;
