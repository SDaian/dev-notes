'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from '@shadcn-react/ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { NoteData } from './app';
import { Link, useNavigate } from 'react-router-dom';
import { Save } from 'lucide-react';

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
} & Partial<NoteData>;

const formSchema = z.object({
  title: z.string().min(2),
  tags: z.string().min(2),
  content: z.string().min(2),
});

function NoteForm({
  onSubmit,
  title = '',
  tags = '',
  content = '',
}: NoteFormProps) {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: title,
      tags: tags,
      content: content,
    },
  });

  function onSubmitForm(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      onSubmit(values as NoteData);
      navigate('/');
    } catch (error) {
      console.error('Form submission error', error);
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitForm)}
          className="space-y-8 mx-auto py-10"
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="" {...field} />
                    </FormControl>
                    <FormDescription>This is the title.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-6">
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your tech stack.</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="" {...field} />
                    </FormControl>
                    <FormDescription>Add tags.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Content"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can @mention other users and organizations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-2">
            <Button type="submit" className="gap-1">
              <Save className="h-4 w-4" />
              Save Note
            </Button>
            <Link to={'/'}>
              <Button variant="secondary">Cancel</Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default NoteForm;
