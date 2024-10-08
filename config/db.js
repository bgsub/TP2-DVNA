module.exports = {
  username: process.env.POSTGRES_USER || 'dvna',
  password: process.env.POSTGRES_PASSWORD || 'passw0rd',
  database: process.env.POSTGRES_DATABASE || 'dvna',
  host: process.env.POSTGRES_HOST ||'postgres-db',
  port: process.env.POSTGRES_PORT || 5432,
  dialect: 'postgres'
}