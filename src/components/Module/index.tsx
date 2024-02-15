import { ChevronDown } from "lucide-react";

import { Lesson } from "../Lesson";

import * as Collapsible from '@radix-ui/react-collapsible';
import { useAppSelector } from "../../store";

interface ModulesProps{
    title: string,
    amountOfClasses: number
    moduleIndex: number
}

export function Module({ title, moduleIndex, amountOfClasses}: ModulesProps){

    const lessons = useAppSelector(state => state.player.course.modules[moduleIndex].lessons);

    return(
        <Collapsible.Root className="group">

            <Collapsible.Trigger className='flex w-full items-center gap-3 bg-zinc-800 p-4'>

                <div className='flex h-10 w-10 rounded-full items-center justify-center text-xs bg-zinc-950'>
                    {moduleIndex}
                </div>

                <div className=' flex flex-col gap-1 text-left'>
                    <strong>{title}</strong>
                    <span className='text-xs text-zinc-400'>{amountOfClasses} Classes</span>
                </div>

                <ChevronDown 
                    className='w-4 h-4 ml-auto text-zinc-400 
                    group-data-[state=open]:rotate-180 transition-transform'
                />

            </Collapsible.Trigger>
           
    
            <Collapsible.Content>
                <nav className="relative flex flex-col gap-4 p-6">
                    {lessons.map(lesson => (
                        <Lesson title={lesson.title} minutes={lesson.duration}/>
                    ))}
                </nav>
            </Collapsible.Content>

        </Collapsible.Root>
        
    )
}