import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import {
    DebuggerHttpMiddleware,
    DebuggerHttpResponseMiddleware,
    DebuggerHttpWriteIntoConsoleMiddleware,
} from 'src/common/debugger/middleware/http/debugger.http.middleware';
import { ConfigModule } from 'src/config/config.module';

@Module({
    imports: [ConfigModule]
})
export class DebuggerMiddlewareModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(
                DebuggerHttpResponseMiddleware,
                DebuggerHttpMiddleware,
                DebuggerHttpWriteIntoConsoleMiddleware,
            )
            .forRoutes('*');
    }
}
