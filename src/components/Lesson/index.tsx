import { Video } from "lucide-react";

interface LessonProps{

    title: string,
    minutes: string,
    onPlay: () => void,
    selectedLesson?: boolean
}

export function Lesson({ title, minutes, onPlay, selectedLesson = false }: LessonProps){
    return(
        <button 
            onClick={onPlay} 
            data-active={selectedLesson}
            disabled={selectedLesson}
            className="flex items-center gap-3 text-sm text-zinc-400
             data-[active=true]:text-white data-[active=true]:font-bold
             enabled:hover:text-zinc-100"
        >
            <Video 
                data-active={selectedLesson} 
                className="w-4 h-4  text-zinc-500
                data-[active=true]:text-white" 
            />
            
            <span>{ title }</span>
            <span className="ml-auto font-mono text-xs text-zinc-500">{ minutes }</span>
        </button>
    )
}