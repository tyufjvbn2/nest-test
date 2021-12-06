import { Module } from '@nestjs/common';
import { dbProviders } from './db.service';

@Module({
  providers: [...dbProviders],
  exports: [...dbProviders],
})
export class DatabaseModule {}
