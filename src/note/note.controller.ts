import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post
} from '@nestjs/common';
import { NotesService } from './note.service';
import { dtoNote } from './dto/dto.note';

@Controller('clients/:clientId/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  // .../clients/:clientId/notes
  @Get()
  listNotes(@Param('clientId') clientId: number) {
    const notes = this.notesService.getNotesForClient(clientId);
    return { clientId, notes };
  }

  // .../clients/:clientId/notes
  @Post()
  @HttpCode(201)
  addNote(
    @Param('clientId') clientId: number,
    @Body() dto: dtoNote
  ) {
    return this.notesService.createNote(clientId, dto);
  }
}