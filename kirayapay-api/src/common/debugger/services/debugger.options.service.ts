import { Injectable } from '@nestjs/common';
// import { ConfigService } from '../config/config.service';
import { LoggerOptions } from 'winston';
import winston from 'winston';
import { DEBUGGER_NAME } from 'src/common/debugger/constants/debugger.constant';
import { IDebuggerOptionService } from 'src/common/debugger/interfaces/debugger.options-service.interface';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class DebuggerOptionService implements IDebuggerOptionService {
    constructor(private configService: ConfigService) { }

    createLogger(): LoggerOptions {
        const writeIntoConsole = this.configService.get("DEBUGGER_HTTP_WRITE_INTO_CONSOLE");
        const maxSize = this.configService.get("2M");
        const maxFiles = this.configService.get("7d");

        const transports = [];

        if (writeIntoConsole) {
            transports.push(new winston.transports.Console());
        }

        const loggerOptions: LoggerOptions = {
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.prettyPrint()
            ),
            transports,
        };

        return loggerOptions;
    }
}
