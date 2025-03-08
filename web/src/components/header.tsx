import { PenLineIcon } from "lucide-react";

export function Header() {
    return (
        <header className='py-4 w-full border-b border-zinc-700/50'>
            <div className='flex items-center gap-2'>
                <PenLineIcon className='size-5 text-zinc-300' />
                <span className='text-lg text-zinc-300 font-md'>Notes</span>
            </div>
        </header>
    )
}