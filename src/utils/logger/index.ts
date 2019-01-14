import {
  createLogger,
  Logger,
  LoggerOptions,
  transports,
  format,
} from 'winston'
const { combine, timestamp, json, colorize } = format

const options: LoggerOptions = {
  exitOnError: false,
  transports: [
    new transports.Console({
      format: combine(colorize(), timestamp()),
      handleExceptions: true,
      level: 'debug',
    }),
    new transports.File({
      filename: './logs/all-logs.log',
      format: combine(json(), timestamp()),
      handleExceptions: true,
      level: 'info',
      maxFiles: 5,
      maxsize: 5242880, // 5MB
    }),
  ],
}

const logger: Logger = createLogger(options)

export class LoggerStream {
  public write(message: string) {
    logger.info(message)
  }
}

export default logger
