import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

import {format} from 'date-fns'

import {ptBR} from 'date-fns/locale/pt-BR'

interface NotesProps{
    note: {
        id: string
        content: string
        createdAt: string 
    }
    deleteNotes: (id: string) => Promise<void>
}

export function CardNotes ({note, deleteNotes }: NotesProps) { 

    return (
        <Dialog>
            <DialogTrigger className='flex flex-col items-start gap-10 bg-zinc-800 border border-lime-400 rounded-2xl p-4'>
                <span className='line-clamp-4 text-zinc-400 text-sm flex-1'>
                    {note.content}
                </span>

                <time className='text-zinc-400 text-xs font-bold'>
                    {format(note.createdAt, 'PP', {locale:ptBR})}
                </time>
            </DialogTrigger>

            <DialogContent className=''>
                <span>{note.content}</span>
                <div className='flex items-center justify-between'>
                    <time>
                        {format(note.createdAt, 'PP', {locale:ptBR})}
                    </time>

                    <Button 
                        onClick={() => {
                            deleteNotes(note.id) //erro aqui
                        }} 
                        variant='ghost' 
                        className='cursor-pointer'
                    >
                        <Trash2 className="size-5 text-red-500"/>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}