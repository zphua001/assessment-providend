import {
  BadRequestException,
  Injectable,
  NotFoundException,
  Logger
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UUID } from 'crypto';
import { StoreService } from '../common/store.service';
import { Note } from '../common/interfaces';
import { dtoNote } from './dto/dto.note';

@Injectable()
export class NotesService {
  private readonly logger = new Logger(NotesService.name);
  constructor(private readonly store: StoreService) {}

  /**
   * Returns all notes for the given client.
   * Throws NotFoundException if the client doesn't exist.
   */
  getNotesForClient(clientId: number): Note[] {
    const parsedClientId = Number(clientId)
    const clientExists = this.store.clients.some((c) => c.id === parsedClientId);
    if (!clientExists) {
      throw new NotFoundException(`Client '${parsedClientId}' not found.`);
    }
    return this.store.notes.filter((n) => n.clientId === parsedClientId);
  }

  /**
   * Creates and persists a new note.
   * Throws BadRequestException if content is blank.
   */
  createNote(clientId: number, dto: dtoNote): Note {
    const parsedClientId = Number(clientId)
    if (!dto.content || dto.content.trim() === '') {
      throw new BadRequestException('Note content cannot be empty');
    }
    if (isNaN(parsedClientId)) {
      throw new BadRequestException(`'Invalid client ID: ${parsedClientId}'`);
    }

    const note: Note = {
      id: uuidv4() as UUID,
      clientId: parsedClientId,
      content: dto.content.trim(),
      createdAt: new Date(),
    };

    this.store.notes.push(note);
    return note;
  }
}