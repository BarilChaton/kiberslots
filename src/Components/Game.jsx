import React, { useState, useEffect, Component } from 'react'
import MusicPlayer from './MainThemePlayer'
import { GiReturnArrow } from 'react-icons/gi'
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs'


// Art assets.
import img1 from '../Assets/Reel/1.png';
import img2 from '../Assets/Reel/2.png';
import img3 from '../Assets/Reel/3.png';
import img4 from '../Assets/Reel/4.png';
import bg from '../Assets/Background.png'
import kiber from '../Assets/Kiber.gif'
import pig from '../Assets/pig.gif'

const Game = () => {

    //
    // The code.
    //

    const [spin, setSpin] = useState(false)
    const [ring1, setRing1] = useState()
    const [ring2, setRing2] = useState()
    const [ring3, setRing3] = useState()
    const [price, setPrice] = useState()
    const [currentBet, setCurrentBet] = useState(5)
    const [bet, setBet] = useState(5)
    const [jackpot, setJackpot] = useState(0)
    const [balance, setBalance] = useState(1000)

    useEffect(() => {
        win()
      }, [ring3])

      //The row functions checks the animation and rearanges the symbols to give the illusion of the reel spinning.
      //In reality they move up and down really fast, too fast for the player to notice it.
      //Each new position the reel is in it rearanges the symbols.

      function row1() {
        if(!spin) {
            return (
                <>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                </>
            )
        } else if (spin && ring1 === undefined) {
            return(
                <>
                <div className='animate-spinningReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-spinningReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-spinningReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-spinningReel'><img src={img4} alt='symbol' /></div>
                </>
            )
        } else if (ring1 >= 1 && ring1 <= 50 ) {
            return(
                <>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                </>
            )
        } else if (ring1 > 50 && ring1 <= 75) {
            return(
                <>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                </>
            )
        } else if (ring1 > 75 && ring1 <= 95) {
            return(
                <>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                </>
            )
        } else if (ring1 > 95 && ring1 <= 100) {
            return(
                <>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                </>
            )
        }
    }
    
    function row2() {
        if(!spin) {
            return (
                <>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                </>
            )
        } else if (spin && ring2 === undefined) {
            return(
                <>
                <div className='animate-spinningReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-spinningReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-spinningReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-spinningReel'><img src={img4} alt='symbol' /></div>
                </>
            )
        } else if (ring2 >= 1 && ring2 <= 50 ) {
            return(
                <>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                </>
            )
        } else if (ring2 > 50 && ring2 <= 75) {
            return(
                <>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                </>
            )
        } else if (ring2 > 75 && ring2 <= 95) {
            return(
                <>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                </>
            )
        } else if (ring2 > 95 && ring2 <= 100) {
            return(
                <>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                </>
            )
        }
    }
    
    function row3() {
        if(!spin) {
            return (
                <>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                </>
            )
        } else if (spin && ring3 === undefined) {
            return(
                <>
                <div className='animate-spinningReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-spinningReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-spinningReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-spinningReel'><img src={img4} alt='symbol' /></div>
                </>
            )
        } else if (ring3 >= 1 && ring3 <= 50 ) {
            return(
                <>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                </>
            )
        } else if (ring3 > 50 && ring3 <= 75) {
            return(
                <>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                </>
            )
        } else if (ring3 > 75 && ring3 <= 95) {
            return(
                <>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                </>
            )
        } else if (ring3 > 95 && ring3 <= 100) {
            return(
                <>
                <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
                <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
                </>
            )
        }
    }

    //This win function sets the state of price for signaling the message box.
    //So the user can get feedback on the gameplay.
    //It essentially shows the calculation.

    // function win() {
    //     if(ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
    //         setPrice(1)
    //     } else if (ring1 > 50 && ring1 <= 75 && ring2 > 95 && ring2 <= 100 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
    //         setPrice(2)
    //     } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
    //         setPrice(3)
    //     } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
    //         setPrice(4)
    //     } else if (ring1 <= 50 && ring2 <= 50 && ring1 !== undefined) {
    //         setPrice(5)
    //     } else if (ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
    //         setPrice(6)
    //     } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring1 !== undefined) {
    //         setPrice(7)
    //     } else if (ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
    //         setPrice(8)
    //     } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring1 !== undefined) {
    //         setPrice(9)
    //     } else if (ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
    //         setPrice(10)
    //     } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring1 !== undefined) {
    //         setPrice(11)
    //     } else if (ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
    //         setPrice(12)
    //     } else {
    //         setPrice(0)
    //     }
    // }

    //Randomizes the end position of the symbols.
    //Even though it is not in the reel spinning function it is not noticable that it skips rearangement.

    function rand() {
        setRing1(Math.floor(Math.random() * (100 - 1) + 1))
        setTimeout(function(){setRing2(Math.floor(Math.random() * (100 - 1) + 1))}, 1000)
        setTimeout(function(){setRing3(Math.floor(Math.random() * (100 - 1) + 1))}, 2000)
    }

    //This function triggers when the player hits the spin button.

    function play() {
        if (ring3 > 1 || !spin) {
            if (currentBet <= balance && currentBet >= 1) {
                setBet(currentBet)
                setSpin(true)
                setRing1()
                setRing2()
                setRing3()
                setBalance(balance + price - currentBet)
                setJackpot(currentBet)
                setTimeout(function(){
                    rand()
                }, 2000)
            } else {
                setPrice(0)
            }
        }
    }

    //This calculates the price with the bets. And the symbols value.
    //For some reason it seemed that the price was not adding to the balance so I had to force it in the play function.
    //Now it works as intended.
    function win() {
        if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
            setPrice(jackpot * 5)
            setBalance(balance + price)
        } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
            setPrice(jackpot * 10)
            setBalance(balance + price)
        } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
            setPrice(jackpot * 15)
            setBalance(balance + price)
        } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
            setPrice(jackpot)
            setBalance(balance + price)
            setJackpot(0)
        } else if (ring1 <= 50 && ring2 <= 50 && ring1 !== undefined) {
            setPrice(jackpot * 2)
            setBalance(balance + price)
        } else if (ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
            setPrice(jackpot * 2)
            setBalance(balance + price)
        } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring1 !== undefined) {
            setPrice(jackpot * 3)
            setBalance(balance + price)
        } else if (ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
            setPrice(jackpot * 3)
            setBalance(balance + price)
        } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring1 !== undefined) {
            setPrice(jackpot * 4)
            setBalance(balance + price)
        } else if (ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
            setPrice(jackpot * 4)
            setBalance(balance + price)
        } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring1 !== undefined) {
            setPrice(jackpot)
            setBalance(balance + price)
            setJackpot(0)
        } else if (ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
            setPrice(jackpot)
            setBalance(balance + price)
            setJackpot(0)
        } else {
            setPrice(0)
        }
    }

    //Work on win messages here.
    //https://github.com/MarsHeer/ReactJS-Slots-Machines/blob/master/src/App.js

    //Checks bet numbers
    //Uses react event because of onChange...
    function numChecker(e) {
        const value = e.target.value;
        const regex = /^[0-9]+$/;
        if (value.match(regex) && parseInt(value) >= 0 || value === "") {
            setCurrentBet(value);
        }
    }

    //////////////////////////////////////////////////////////////////////////////

    //
    // The Html, TailwindCSS
    //

  return (
    <div className='flex h-screen w-screen justify-start'>
        <div className='absolute flex flex-row'>
            <img src={bg} alt="background" className='flex h-screen w-screen' />
            
            {/* This is the general game area */}
            <div className='absolute flex w-screen h-screen justify-center'>

                {/* Here is the current player balance */}
                <div className='absolute left-60 ml-[5.2em] bottom-40 bg-pink-300 p-4 rounded-xl border-4 border-pink-400'>
                    <h1 className='text-white text-3xl font-bold animate-bounce'>{"Balance: " + balance + " :-"}</h1>
                </div>
                {/* The reel container as well as other ui stuff */}
                <div className='flex justify-center items-center'>
                    <div className='relative overflow-hidden ml-12 mt-[10em] w-[700px] h-[500px] bg-black bg-opacity-60 border-4 border-pink-400 z-10 rounded-2xl'>
                        <div className=' justify-center'>
                            <div className='absolute w-[700px] justify-center'>
                                <div class='Reels' className='flex flex-3 justify-between mr-2'>
                                    {/* The reels */}
                                    <div className='border-x-8 border-blue-300'>
                                        {row1()}
                                    </div>
                                    <div className='border-x-8 border-blue-300'>
                                        {row2()}
                                    </div>
                                    <div className='border-x-8 border-blue-300'>
                                        {row3()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Game header */}
                        <div className='absolute top-0'>
                            <div className='w-[692px] justify-center pb-8 border-b-4 border-white rounded-t-xl bg-pink-300'>
                                <div className='flex justify-between gap-5 items-center'>
                                    <img className='flex w-[4em] ml-2 mt-5' src={kiber} alt="kiber gif" />
                                    <h1 className='text-pink-600 text-center text-6xl mt-5 italic font-pixelBug'>Kiber<span className='text-white'>Slots</span></h1>
                                    <img className='flex w-[4em] mr-2 mt-5' src={pig} alt="pig gif" />
                                </div>
                            </div>
                        </div>

                        {/* Game footer. Here are the spin and bet controls Also the cashout win thingy. */}
                        <div className='absolute bottom-0'>
                            <div className='relative flex flex-col w-[692px] h-[10em] justify-between items-center pt-4 border-t-4 border-white rounded-b-xl bg-pink-300'>
                                
                                {/* The add and subtract bet buttons */}
                                <div className='absolute left-10 top-5 shadow-xl shadow-gray-700'>
                                    <div className='p-3 rounded-md border-2 border-white bg-blue-500'>
                                        <div className='flex justify-between gap-2 items-center'>
                                            <button className='text-white text-3xl' onClick={() => setCurrentBet(currentBet - bet)}>
                                                <BsDashCircle/>
                                            </button>
                                            <h2 className='text-white text-xl font-bold'>Bet!</h2>
                                            <button className='text-white text-3xl' onClick={() => setCurrentBet(currentBet + bet)}>
                                                <BsPlusCircle/>
                                            </button>
                                            <div className='flex flex-col bg-pink-400 p-2 rounded-full border-2 border-white'>
                                                <h2 className='text-white text-xl' onChange={(e) => numChecker(e)}>{currentBet} :-</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* The spin button */}
                                <button onClick={() => play()} className='absolute rounded-full top-5 shadow-xl shadow-gray-700' >
                                    <div className='p-5 rounded-full border-2 border-white bg-blue-500'>
                                        <div className='items-center justify-center'>
                                            <div className='text-white text-3xl'>
                                                <GiReturnArrow />
                                            </div>
                                        </div>
                                    </div>
                                </button>

                                {/* The win feedback */}
                                <div className='absolute right-10 top-5 shadow-xl shadow-gray-700'>
                                    <div className='p-3 rounded-md border-2 border-white bg-blue-500'>
                                        <div className='flex justify-between gap-2 items-center'>
                                            <h2 className='text-white text-xl font-bold'>Cashout:</h2>
                                            <div className='flex flex-col bg-pink-400 p-2 rounded-full border-2 border-white'>
                                                <h2 className='text-white text-xl'>{price} :-</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Music player that is bugged. Considering on removing it. */}
        <div className='absolute flex flex-col'>
            <div className='flex justify-center text-center bg-pink-400 p-1 m-3 w-25 h-25 rounded-full border-2 border-white'>
                <MusicPlayer />
            </div>
        </div>
    </div>
    
  )
}

export default Game