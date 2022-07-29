import React, { useState } from 'react';
import Sound from 'react-sound';
import { MdPlayCircleOutline, MdOutlineStopCircle } from 'react-icons/md'
import MainTheme from '../Assets/KiberQuestMainTheme.wav'

//This component handles music playing.
//I find it that it would be nice to give the player to have the ability to choose if he/she would like to listen.
// This one uses react-sound which is apparently deprecated. Use "npm install --force".

const MainThemePlayer = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
        <button className='flex text-white text-5xl' onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? <MdPlayCircleOutline/> : <MdOutlineStopCircle/>}</button>
        <Sound
            url={MainTheme}
            playStatus={ isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={300}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
        />
    </div>
  )
}

export default MainThemePlayer