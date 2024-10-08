module.exports = {
  username: process.env.POSTGRES_USER || 'dvna',
  password: process.env.POSTGRES_PASSWORD || 'dvna',
  database: process.env.POSTGRES_DATABASE || 'passw0rd',
  host: process.env.POSTGRES_HOST ||'postgres-db',
  port: process.env.POSTGRES_PORT || 5432,
  dialect: 'postgres'
}