import { Module } from '@nestjs/common';
import { NotesController } from './note.controller';
import { NotesService } from './note.service';
import { StoreService } from '../common/store.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService, StoreService],
})
export class NotesModule {}