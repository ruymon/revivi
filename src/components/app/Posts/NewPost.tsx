"use client";

import { createPost } from "@/actions/postActions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/Form";
import { Textarea } from "@/components/ui/Textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { PostActionButton } from "./PostActionButton";

interface NewPostProps {
  avatarUrl: string;
  fullName: string;
};

const newPostFormSchema = z.object({
  content: z.string().min(1, {
    message: "O conteúdo da memória deve ter no mínimo 1 caractere.",
  }).max(280, {
    message: "O conteúdo da memória deve ter no máximo 280 caracteres.",
  }),
});

export type NewPostFormValues = z.infer<typeof newPostFormSchema>;

export function NewPost({ avatarUrl, fullName }: NewPostProps) {
  const router = useRouter();

  const newPostForm = useForm<NewPostFormValues>({
    resolver: zodResolver(newPostFormSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: NewPostFormValues) {
    try {
      await createPost(values)
      newPostForm.reset()
      router.refresh()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={avatarUrl} />
        <AvatarFallback />
      </Avatar>

      <div className="flex flex-col gap-2 flex-1">
        <span className="text-primary font-semibold">{fullName}</span>

        <Form {...newPostForm}>
          <form onSubmit={newPostForm.handleSubmit(onSubmit)}>
            <FormField
              control={newPostForm.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Inicie uma memória..." className="h-20 p-0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-4 -translate-x-2">
              <PostActionButton variant="addImage" disabled />
            </div>

            <Button type="submit" disabled={newPostForm.formState.isSubmitting}>
              {newPostForm.formState.isSubmitting ? "Publicando..." : "Publicar"}
            </Button>
          </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
