import { Module } from '@nestjs/common';
import { UploadModule } from './upload/upload.module';
import { UploadController } from './upload/upload.controller';

@Module({
  imports: [UploadModule],
  controllers: [],
  providers: []
})
export class AppModule {}
