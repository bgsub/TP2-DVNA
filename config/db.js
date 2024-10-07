module.exports = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  host: process.env.POSTGRES_HOST ||'postgres-db',
  port: process.env.POSTGRES_PORT || 5432,
  dialect: 'postgres'
}