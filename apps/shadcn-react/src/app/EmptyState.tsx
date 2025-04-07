import { Button } from '@shadcn-react/ui';
import { NotebookPen, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="bg-muted/30 rounded-full p-6 mb-6">
        <NotebookPen className="h-12 w-12 text-emerald-500" />
      </div>
      <h2 className="text-2xl font-semibold mb-2 text-center">No notes yet</h2>
      <p className="text-muted-foreground text-center mb-8 max-w-md">
        Create your first note to start organizing your thoughts, ideas, and
        information in one place.
      </p>
      <Link to="new">
        <Button size="lg" className="gap-2">
          <PlusCircle className="h-5 w-5" />
          Create your first note
        </Button>
      </Link>
    </div>
  );
}

export default EmptyState;
