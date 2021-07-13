export default {
  apiPrefix: process.env.API_PREFIX || 'http://localhost:8080',
  serverPort: process.env.SERVER_PORT || '8080',
  db: {
    name: process.env.DB_NAME || 'lpcdb',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 27017,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'example',
  },
  secretKey: process.env.SECRET_KEY || 'LOL_KEK_AZAZA',
};
