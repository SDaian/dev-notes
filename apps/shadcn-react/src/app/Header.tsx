import { Button, Input } from '@shadcn-react/ui';
import { Search, PlusCircle, NotebookPen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
      <div className="container flex h-16 items-center justify-between py-4 px-6 md:px-8">
        <Link to="/">
          <div className="flex items-center gap-2">
            <NotebookPen className="h-6 w-6 text-emerald-500" />
            <span className="text-xl font-bold">NoteKeeper</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center w-full max-w-sm mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search notes..."
              className="w-full pl-8 bg-background"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="new">
            <Button variant="outline" size="sm" className="gap-1">
              <PlusCircle className="h-4 w-4" />
              <span className="hidden sm:inline">New Note</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
