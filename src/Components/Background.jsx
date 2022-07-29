import React, { useState, useEffect, Component } from 'react'
import MusicPlayer from './MainThemePlayer'
import { GiReturnArrow } from 'react-icons/gi'
import { BsPlusCircle } from 'react-icons/bs'

import bg from '../Assets/Background.png'
import kiber from '../Assets/Kiber.gif'
import pig from '../Assets/pig.gif'

const background = () => {
  return (
    <div className='flex h-screen w-screen justify-start'>
        <div className='absolute flex flex-row'>
            <img src={bg} alt="background" className='flex h-screen w-screen' />
            {/* This is the reel area, reels and effects are in seperate module. */}
            {/* Also here is the layout for the ui. */}
            <div className='absolute flex w-screen h-screen justify-center'>
                <div className='flex justify-center items-center'>
                    <div className='relative ml-12 mt-[17em] w-[700px] h-[500px] bg-black bg-opacity-60 border-4 border-pink-400 z-10 rounded-2xl'>
                        {/* Glow effect around the game viewport. Really just uses a pulsating shadow. Which is modified */}
                        <div className='flex h-full animate-pulse shadow-3xl shadow-white rounded-2xl'></div>
                        <div className='absolute top-0'>
                            {/* Game header */}
                            <div className='w-[692px] justify-center pb-2 border-b-4 border-white rounded-t-xl bg-pink-300'>
                                <div className='flex justify-between gap-5 items-center'>
                                    <img className='flex w-[4em] ml-2' src={kiber} alt="kiber gif" />
                                    <h1 className='text-white text-center text-3xl font-bold'>KiberSlots</h1>
                                    <img className='flex w-[4em] mr-2' src={pig} alt="pig gif" />
                                </div>
                            </div>
                        </div>
                        <div className='absolute bottom-0'>
                            {/* Game footer. Here are the spin, bet and win elements. */}
                            <div className='relative w-[692px] h-[8em] justify-between pt-4 border-t-4 border-white rounded-b-xl bg-pink-300'>
                                {/* The add bet button */}
                                <button className='absolute left-10 top-7 shadow-xl shadow-gray-700'>
                                    <div className='p-5 rounded-md border-2 border-white bg-blue-500'>
                                        <div className='flex justify-between gap-2 items-center'>
                                            <h2 className='text-white text-xl font-bold'>Add bet!</h2>
                                            <div className='text-white text-3xl'>
                                                <BsPlusCircle/>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute flex flex-col'>
            <div className='flex justify-center text-center bg-pink-400 p-1 m-3 w-25 h-25 rounded-full'>
                <MusicPlayer />
            </div>
        </div>
        </div>
    
  )
}

export default background