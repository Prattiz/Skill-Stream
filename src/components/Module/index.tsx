import { ChevronDown } from "lucide-react";
import { Lesson } from "../Lesson";

interface ModulesProps{
    title: string,
    amountOfClasses: number
    moduleIndex: number
}

export function Module({ title, moduleIndex, amountOfClasses}: ModulesProps){
    return(
        <>
            <button className='flex w-full items-center gap-3 bg-zinc-800 p-4'>
                <div className='flex h-10 w-10 rounded-full items-center justify-center text-xs bg-zinc-950'>
                    {moduleIndex}
                </div>

                <div className=' flex flex-col gap-1 text-left'>
                    <strong>{title}</strong>
                    <span className='text-xs text-zinc-400'>{amountOfClasses} Classes</span>
                </div>

                <ChevronDown className='w-4 h-4 ml-auto text-zinc-400'/>
            </button>
           
          

            <nav className="relative flex flex-col gap-4 p-6">
               <Lesson title="The Pythagorean Theorem" minutes="5:00"/>
               <Lesson title="Trigonometry" minutes="7:52"/>
               <Lesson title="The bhaskara formula" minutes="10:23"/>
            </nav>
        </>
        
    )
}