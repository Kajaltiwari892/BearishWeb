// import type { NextConfig } from "next";
// import type { Configuration } from "webpack";

// /** @type {import('next').NextConfig} */
// const nextConfig: NextConfig = {
//   reactStrictMode: true,

//   webpack(config: Configuration) {
//     config.module?.rules?.push({
//       test: /\.svg$/,
//       issuer: /\.(js|ts)x?$/,
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// };

// export default nextConfig;

// next.config.ts
import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // optional
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
