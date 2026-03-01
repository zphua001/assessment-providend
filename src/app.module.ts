import { Module } from '@nestjs/common';
import { NotesModule } from './note/note.module';

@Module({
  imports: [NotesModule],
})
export class AppModule {}