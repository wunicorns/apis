const winston = require('winston')
const config = global.getConfig()

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      new winston.transports.File({ filename: config.log.path + '/error.log', level: 'error' }),
      new winston.transports.File({ filename: config.log.path + '/combined.log' })
    ]
  });
   
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  // 
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
}

module.exports = {
    info: (msg)=>{
        logger.log('info', msg)
    }
    , debug: (msg)=>{
        logger.log('debug', msg)
    }
    , error: (msg)=>{
        logger.log('error', msg)
    }
}