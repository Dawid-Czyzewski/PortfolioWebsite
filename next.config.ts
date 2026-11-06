import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV !== 'production';

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy',
    // GA + https images (logo firm / certyfikaty) so the console stays clean.
    value: [
      "default-src 'self'",
      "img-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline'",
      [
        "script-src 'self' 'unsafe-inline'",
        isDev ? "'unsafe-eval'" : '',
        'https://www.googletagmanager.com https://www.google-analytics.com',
      ]
        .filter(Boolean)
        .join(' '),
      "font-src 'self' data:",
      [
        "connect-src 'self'",
        isDev ? 'ws://localhost:3000 http://localhost:3000' : '',
        'https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com https://*.google-analytics.com',
      ]
        .filter(Boolean)
        .join(' '),
      "frame-ancestors 'self'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
