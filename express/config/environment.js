const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGO_URI || `mongodb://localhost/PROJECT_NAME-${env}`;
const sessionSecret = process.env.SESSION_SECRET || 'my awesome secret';

module.exports = { port, env, dbURI, sessionSecret };
