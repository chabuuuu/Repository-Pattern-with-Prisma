import { Module } from '@nestjs/common';
import { TweetsRepository } from './tweets.repository';
import { TweetsService } from './tweets.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [TweetsRepository, TweetsService],
    exports: [TweetsService],
})
export class TweetsModule {}
