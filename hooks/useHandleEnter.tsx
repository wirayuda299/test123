import { KeyboardEvent, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';

const file = z.object({
  lastModified: z.number(),
  name: z.string(),
  size: z.number(),
  type: z.string(),
  webkitRelativePath: z.string(),
});

export const formSchema = z.object({
  cover: file,
  profile: file,
  name: z.string().min(3),
  admins: z.array(z.string()),
  members: z.array(z.string()),
  description: z.string().min(3, {
    message: 'Descriptions must minimum 3 characters ',
  }),
});

export type InferedFormSchema = z.infer<typeof formSchema>;

const useHandleEnter = (form: UseFormReturn<InferedFormSchema>) => {
  const [admins, setAdmins] = useState<string[]>([]);
  const [members, setMembers] = useState<string[]>([]);

  const handleEnter = (
    e: KeyboardEvent<HTMLInputElement>,
    field: string,
    value: string,
  ) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      let newValues: string[] = [];

      if (field === 'admins') {
        newValues = [...admins, value];
        setAdmins(newValues);
        form.setValue('admins', newValues);
      } else {
        newValues = [...members, value];
        setMembers(newValues);
        form.setValue('members', newValues);
      }
    }
  };

  return {
    handleEnter,
    members,
    admins,
    setAdmins,
    setMembers,
  };
};

export default useHandleEnter;
