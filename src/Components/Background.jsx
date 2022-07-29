import React, { useState, useEffect, Component } from 'react'
import MusicPlayer from './MainThemePlayer'
import bg from '../Assets/Background.png'
import kiber from '../Assets/Kiber.gif'

const background = () => {
  return (
    <div className='flex h-screen justify-start'>
        <div className='flex flex-row'>
            <img src={bg} alt="background" className='flex h-screen w-screen' />
            {/* This is the reel area, reels and effects are in seperate module. */}
            <div className='absolute w-screen h-screen flex flex-col justify-center items-center'>
                <div className='flex ml-12 mt-[17em] w-[700px] h-[500px] bg-black bg-opacity-60 border-4 border-pink-400 z-10 rounded-2xl'>
                    <div className='flex w-full h-full animate-pulse shadow-3xl shadow-white rounded-2xl'>
                        
                    </div>
                    <div className='absolute'>
                            <img className='w-[4em]' src={kiber} alt="kiber gif" />
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute flex flex-col'>
            <div className='flex justify-center text-center bg-pink-500 p-1 m-3 w-25 h-25 rounded-full'>
                <MusicPlayer />
            </div>
        </div>
    </div>
    
  )
}

export default background