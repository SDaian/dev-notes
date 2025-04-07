import { useNote } from './NoteLayout';
import { Button, Card, CardContent, Separator, Badge } from '@shadcn-react/ui';
import { ArrowLeft, Calendar, Edit, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

type NoteProps = {
  onDelete: (id: string) => void;
};

function Note({ onDelete }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();

  const createdAt = dayjs(note.createdAt).fromNow();
  const lastEdit = dayjs(note.lastEdit).fromNow();

  return (
    <div className="container max-w-4xl py-8 px-6 md:px-8 mx-auto">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link to="/" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Notes
          </Link>
        </Button>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">{note.title}</h1>
          <div className="flex items-center gap-2">
            <Link to={`/${note.id}/edit`}>
              <Button variant="outline" size="sm" className="gap-1">
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </Button>
            </Link>
            <Button
              onClick={() => {
                onDelete(note.id);
                navigate('/');
              }}
              variant="outline"
              size="sm"
              className="gap-1 text-red-500 hover:text-red-600"
            >
              <Trash2 className="h-4 w-4" />
              <span>Delete</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge>{note.tags}</Badge>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Created: {createdAt}</span>
          </div>
          <div>Last edited: {lastEdit}</div>
        </div>

        <Separator className="mb-6" />
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="whitespace-pre-line">{note.content}</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Note;
