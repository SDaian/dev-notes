import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from 'react-router-dom';
import { NoteData } from './app';

type NoteLayoutProps = {
  notes: NoteData[];
};

function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note === null) return <Navigate to="/" replace />;

  return <Outlet context={note} />;
}

export default NoteLayout;

export function useNote() {
  return useOutletContext<NoteData>();
}
