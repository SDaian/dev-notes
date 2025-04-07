import {
  Badge,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@shadcn-react/ui';
import { NoteData } from './app';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

type NoteCardProps = {
  note: NoteData;
};

function NoteCard({ note }: NoteCardProps) {
  const lastEdit = dayjs(note.lastEdit).fromNow();
  return (
    <Link to={note.id}>
      <Card className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl">
        <CardHeader>
          <h2 className="font-semibold">{note.title}</h2>
          <div className="flex flex-wrap gap-1 mt-1">
            <Badge key={note.tags} variant="outline" className="text-xs">
              {note.tags}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{note.content}</p>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Last edited: {lastEdit}
        </CardFooter>
      </Card>
    </Link>
  );
}

export default NoteCard;
