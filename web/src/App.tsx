import { useEffect, useState } from "react";
import { CardNotes } from "./components/card-notes";
import { CreateNewNotes } from "./components/create-new-notes";
import { Header } from "./components/header";
import { api } from "./lib/axios";



interface NotesProps{
  id: string
  content: string
  createdAt: string
}

export function App() {
  const [notes, setNotes] = useState<NotesProps[]>([])

  async function getNotes() {
    try {
      const response = await api.get('/notes')
      const data = await response.data
      setNotes(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteNotes(id: string) {
    try {
      await api.delete(`/notes/${id}`) // erro aqui
      getNotes()
    } catch (error) {
      console.log(error)
    }
  }

useEffect(() => {
  getNotes()
}, [])

  return (
    <div className='min-h-screen bg-zinc-900'>
      <div className='max-w-4xl w-full mx-auto px-4'>
        <Header />

        <div className='grid grid-cols-3 gap-4 mt-10'>
          <CreateNewNotes getNotes={getNotes}/>
  
          {notes.map((item) => (
            <CardNotes note={item} deleteNotes={deleteNotes} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
