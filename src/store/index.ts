import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { player } from './slices/player';




export const Store = configureStore({
    reducer: {
       player,
    }
})



// Typed  import's:

export type RootState = ReturnType<typeof Store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;