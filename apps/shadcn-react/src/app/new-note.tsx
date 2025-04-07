import { NoteData } from './app';
import NoteForm from './NoteForm';

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};

function NewNote({ onSubmit }: NewNoteProps) {
  return (
    <div className="container max-w-4xl py-8 px-6 md:px-8 mx-auto">
      <p className="font-semibold text-3xl">Create New Note</p>
      <NoteForm onSubmit={onSubmit} />;
    </div>
  );
}

export default NewNote;
