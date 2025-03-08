import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";
import { Textarea } from "./ui/textarea";
import { api } from "../lib/axios";

interface CreateNewNotesProps {
    getNotes: () => Promise<void>
}

export function CreateNewNotes({getNotes}: CreateNewNotesProps) {
    const [text, setText] = useState('')

 async function handleCreateNewNotes(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
        await api.post('/notes', {
            content: text,
        })

        setText('')
        getNotes()
    }   catch (error) {
            if(error) {
                console.log(error)
            }
        }
    }

    return (
        <Dialog>
            <DialogTrigger className='bg-zinc-800 p-4 rounded-md cursor-pointer'>
                <span className='text-zinc-400'>Click para criar uma nota</span>
            </DialogTrigger>

            <DialogContent className='p6 text-white bg-zinc-800'>
                <DialogHeader>Crie sua nota</DialogHeader>
                <form onSubmit={handleCreateNewNotes} className='mt-3 space-y-4'>
                    <Textarea 
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    className="bg-zinc-700 text-zinc-200 outline-none border-none " 
                    placeholder='Digite o conteúdo'
                    ></Textarea>

                    <Button className='w-full bg-green-500 hover:bg-green-600 transition-all cursor-pointer'>Criar nota</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}