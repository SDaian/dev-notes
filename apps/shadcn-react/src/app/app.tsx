import { Navigate, Route, Routes } from 'react-router-dom';
import NewNote from './new-note';
import { Header } from './Header';
import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { v4 as uuidV4 } from 'uuid';
import NoteList from './NoteList';
import NoteLayout from './NoteLayout';
import Note from './Note';
import EditNote from './EditNote';

export type RawNote = {
  title: string;
  tags: string;
  content: string;
};

export type NoteData = {
  id: string;
  createdAt: Date;
  lastEdit: Date;
} & RawNote;

export function App() {
  const [notes, setNotes] = useLocalStorage<NoteData[]>('NOTES', []);

  const notesWithTags = useMemo(() => {
    return notes;
  }, [notes]);

  function onCreateNote({ ...data }: RawNote): void {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          ...data,
          id: uuidV4(),
          createdAt: new Date(),
          lastEdit: new Date(),
        },
      ];
    });
  }

  function onUpdateNote(id: string, { ...data }: NoteData): void {
    setNotes((prevNotes) => {
      return prevNotes.map((note: NoteData) => {
        if (note.id === id) {
          return { ...note, ...data, lastEdit: new Date() };
        } else return note;
      });
    });
  }

  function onDeleteNote(id: string): void {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <Header />
      <Routes>
        <Route path="/" element={<NoteList notes={notesWithTags} />} />
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} />} />
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDelete={onDeleteNote} />} />
          <Route
            path="edit"
            element={<EditNote onUpdateNote={onUpdateNote} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
