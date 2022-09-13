import React, { useState, useEffect } from 'react'
import { GiReturnArrow } from 'react-icons/gi'
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs'


// importing all the art assets.
import RelaxLogo from '../Assets/relax_logo.png'
import img1 from '../Assets/Reel/1.png'
import img2 from '../Assets/Reel/2.png'
import img3 from '../Assets/Reel/3.png'
import img4 from '../Assets/Reel/4.png'
import bg from '../Assets/Background.png'
import kiber from '../Assets/Kiber.gif'
import pig from '../Assets/pig.gif'

const Game = () => {

    //
    // The entire code.
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

      //The reel functions checks the animation and rearanges the symbols to give the illusion of the reel spinning.
      //In reality they move up and down really fast, too fast for the player to notice it.
      //Each new position the reel is in it rearanges the symbols.

    function reel1() {
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
    
    function reel2() {
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
    
    function reel3() {
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
    
    //Randomizes the end position of the symbols.
    //Even though it is not in the reel spinning function it is not noticable that it skips rearangement.
    function randomness() {
        setRing1(Math.floor(Math.random() * (100 - 1) + 1))
        setTimeout(function(){setRing2(Math.floor(Math.random() * (100 - 1) + 1))}, 1000)
        setTimeout(function(){setRing3(Math.floor(Math.random() * (100 - 1) + 1))}, 2000)
    }

    //This function triggers when the player hits the spin button.
    function play() {
        if (ring3 > 1 || !spin) {
            if (currentBet <= balance && currentBet >= 1) { //If there is no balance the reels won't spin.
                setBet(bet) //Used setBet to currentBet but that made it so the player would not be able to add or subtract 5kr to bet.
                setSpin(true) //Bool for kicking off the spin
                setRing1() //Kicks off the reels
                setRing2() //Kicks off the reels
                setRing3() //Kicks off the reels
                setBalance(balance + price - currentBet) //Adds the won price to balance and then subtracts the bet, if there is no winning then it goes like 1000 + 0 - 5. 
                setJackpot(currentBet) //For calculating winnings.
                setTimeout(function(){
                    randomness()
                }, 2000) //Random symbol setup at the end of spin.
            } else {
                setPrice(0) //If nothing happens. Then nothing happens. ¯\_(ツ)_/¯
            }
        }
    }

    //This calculates the price with the bets. And the symbols value.
    //For some reason it seemed that the price was not adding to the balance so I had to force it in the play function.
    //Now it works as intended.
    function win() {
        if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) { //Numbers are working kind of like both position and id for each symbol. They define the rings so the game knows when the player has won.
            setPrice(jackpot * 5)                                               //The numbers also defines the value of the symbols if they happen to be placed in a row. And calculates the price accordingly.
        } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
            setPrice(jackpot * 10)
        } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
            setPrice(jackpot * 15)
        } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
            setPrice(jackpot)
            setJackpot(0)
        } else if (ring1 <= 50 && ring2 <= 50 && ring1 !== undefined) {
            setPrice(jackpot * 2)
        } else if (ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
            setPrice(jackpot * 2)
        } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring1 !== undefined) {
            setPrice(jackpot * 3)
        } else if (ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
            setPrice(jackpot * 3)
        } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring1 !== undefined) {
            setPrice(jackpot * 4)
        } else if (ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
            setPrice(jackpot * 4)
        } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring1 !== undefined) {
            setPrice(jackpot)
            setJackpot(0)
        } else if (ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
            setPrice(jackpot)
            setJackpot(0)
        } else {
            setPrice(0)
        }
    }

    //Checks bet numbers and prevents from spinning if bet value is below 0. It still shows though.
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

                <div className='absolute top-5 left-[790px] bg-black border-4 border-white p-4 rounded-xl'>
                    {/* <img src={RelaxLogo} alt="relax-logo" /> */}
                    <div className='flex mt-4 w-auto justify-center items-center'>
                        <p className='text-white text-lg text-center font-bold'>A code test for: Christian Karlsson Korbacz</p>
                    </div>
                </div>

                {/* Here is the current player balance */}
                <div className='absolute left-[700px] right-[700px] ml-[3em] text-center bottom-14 bg-pink-300 p-4 rounded-xl border-4 border-pink-400'>
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
                                        {reel1()}
                                    </div>
                                    <div className='border-x-8 border-blue-300'>
                                        {reel2()}
                                    </div>
                                    <div className='border-x-8 border-blue-300'>
                                        {reel3()}
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
    </div>
  )
}

export default Game