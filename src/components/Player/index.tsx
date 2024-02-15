import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { next, useCurrentLesson } from '../../store/slices/player';
import { useEffect } from 'react';

export function Player(){

  const dispatch = useDispatch();
  const { currentLesson } = useCurrentLesson();

  function handlePlayNext(){
    dispatch(next())
  }

  useEffect(() => {
    document.title = `Skill Stream: ${currentLesson.title}`
  }, [currentLesson])

    return(
        <div className="flex-1">
          <div className='w-full bg-zinc-950 aspect-video'>

            <ReactPlayer
              width="100%" 
              height="100%" 
              controls
              url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
              onEnded={handlePlayNext}
            />

          </div> 
        </div>
    )
}