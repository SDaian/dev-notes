import { Separator } from '@shadcn-react/ui';
import { useMemo } from 'react';
import { NoteData } from './app';
import NoteCard from './NoteCard';
import EmptyState from './EmptyState';

type NoteListProps = {
  notes: NoteData[];
};

function NoteList({ notes }: NoteListProps) {
  const hasNotes = notes.length > 0;
  const filteredNotes = useMemo(() => {
    return notes;
  }, [notes]);

  return (
    <main className="flex-1 container py-8 px-6 md:px-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 text-center">My Notes</h1>
      <Separator className="my-4 max-w-md mx-auto" />
      {hasNotes ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {filteredNotes.map((note: NoteData) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </main>
  );
}

export default NoteList;
