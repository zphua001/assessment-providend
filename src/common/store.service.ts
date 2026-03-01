import { Injectable } from '@nestjs/common';
import { Client, Note } from '../common/interfaces';

// in memory data
// implement database calls here

@Injectable()
export class StoreService {
  readonly clients: Client[] = [
    { id: 1, name: 'Client A' },
    { id: 2, name: 'Client B' },
    { id: 3, name: 'Client C' },
  ];

  readonly notes: Note[] = [
    {
      id: '9b2d6a54-b608-4e17-a9dc-a8f1e9a27ba4',
      clientId: 1,
      content: 'Initial onboarding call went well.',
      createdAt: new Date('2024-01-10T09:00:00Z'),
    },
    {
      id: '20be2f3d-b09c-460f-b4f6-eef66c282462',
      clientId: 1,
      content: 'Follow-up scheduled for next week.',
      createdAt: new Date('2024-01-11T14:30:00Z'),
    },
  ];
}