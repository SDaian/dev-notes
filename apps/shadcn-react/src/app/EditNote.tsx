import { NoteData } from './app';
import NoteForm from './NoteForm';
import { useNote } from './NoteLayout';

type EditNoteProps = {
  onUpdateNote: (id: string, data: NoteData) => void;
};

function EditNote({ onUpdateNote }: EditNoteProps) {
  const note = useNote();

  return (
    <div className="container max-w-4xl py-8 px-6 md:px-8 mx-auto">
      <p className="font-semibold text-3xl">Edit Note</p>
      <NoteForm
        onSubmit={(data) => onUpdateNote(note.id, data)}
        title={note.title}
        content={note.content}
        tags={note.tags}
      />
    </div>
  );
}

export default EditNote;
