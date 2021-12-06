import { Module } from '@nestjs/common';
import { dbProviders } from './db.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [...dbProviders],
  exports: [...dbProviders],
})
export class DatabaseModule {}
