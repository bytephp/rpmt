import { Module } from '@nestjs/common';
import { DebuggerModule } from 'src/common/debugger/debugger.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        DebuggerModule.forRoot(),
    ],
})
export class CommonModule {}
