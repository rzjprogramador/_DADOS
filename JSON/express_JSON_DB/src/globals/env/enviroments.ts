import 'dotenv/config'

export const ENV_SERVER = {
  PORT_EXPRESS: process.env.PORT_EXPRESS,
}

export const ENV_PROJETO = {
  NAME: process.env.PROJETO,
}


export const MONGODB = {
    URI: process.env.MONGO_URI,
}
