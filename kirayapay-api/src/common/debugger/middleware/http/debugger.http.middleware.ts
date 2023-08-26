import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from 'src/config/config.service';
// import { HelperDateService } from 'src/common/helper/services/helper.date.service';
import {
    IDebuggerHttpConfig,
} from 'src/common/debugger/interfaces/debugger.interface';
import {
    DEBUGGER_HTTP_FORMAT,
} from 'src/common/debugger/constants/debugger.constant';

@Injectable()
export class DebuggerHttpMiddleware implements NestMiddleware {
    private readonly writeIntoFile: boolean;
    private readonly writeIntoConsole: boolean;

    constructor(private readonly configService: ConfigService) {
        this.writeIntoFile = this.configService.get('DEBUGGER_HTTP_WRITE_INTO_FILE') ? true : false;
        this.writeIntoConsole = this.configService.get("DEBUGGER_HTTP_WRITE_INTO_CONSOLE") ? true : false;
    }

    private customToken(): void {
        // morgan.token('req-params', (req: Request) =>
        //     JSON.stringify(req.params)
        // );
        // // morgan.token('req-params', (req: Request) =>
        // //     JSON.stringify(req.params)
        // // );

        // morgan.token('req-body', (req: Request) => JSON.stringify(req.body));

        // morgan.token(
        //     'res-body',
        //     (req: Request, res: IDebuggerHttpMiddleware) => res.body
        // );

        // morgan.token('req-headers', (req: Request) =>
        //     JSON.stringify(req.headers)
        // );
    }

    async use(req: Request, res: Response, next: NextFunction): Promise<void> {
        if (this.writeIntoConsole || this.writeIntoFile) {
            this.customToken();
        }

        next();
    }
}

@Injectable()
export class DebuggerHttpWriteIntoConsoleMiddleware implements NestMiddleware {
    private readonly writeIntoConsole: boolean;

    constructor(private readonly configService: ConfigService) {
        this.writeIntoConsole = this.configService.get("DEBUGGER_HTTP_WRITE_INTO_CONSOLE") ? true : false;
    }

    private async httpLogger(): Promise<IDebuggerHttpConfig> {
        return {
            debuggerHttpFormat: DEBUGGER_HTTP_FORMAT,
        };
    }

    async use(req: Request, res: Response, next: NextFunction): Promise<void> {
        if (this.writeIntoConsole) {
            const config: IDebuggerHttpConfig = await this.httpLogger();
            debuggerHttpFormat(req, res);
            // morgan(config.debuggerHttpFormat)(req, res, next);
            
        } 
        next();
    }
}

@Injectable()
export class DebuggerHttpResponseMiddleware implements NestMiddleware {
    private readonly writeIntoFile: boolean;
    private readonly writeIntoConsole: boolean;

    constructor(private readonly configService: ConfigService) {
        this.writeIntoFile = this.configService.get('DEBUGGER_HTTP_WRITE_INTO_FILE') ? true : false;
        this.writeIntoConsole = this.configService.get("DEBUGGER_HTTP_WRITE_INTO_CONSOLE") ? true : false;
    }
    use(req: Request, res: Response, next: NextFunction): void {
        if (this.writeIntoConsole || this.writeIntoFile) {
            const send: any = res.send;
            const resOld: any = res;

            // Add response data to request
            // this is for morgan
            resOld.send = (body: any) => {
                resOld.body = body;
                resOld.send = send;
                resOld.send(body);

                res = resOld as Response;
            };
        }

        next();
    }
}

export function debuggerHttpFormat(req: Request, res: Response) :void {
    let url = req.originalUrl.split('/')
    let userIp = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ;
    console.info(`${userIp} ${req.method} ${req.originalUrl} `, req.body)
}