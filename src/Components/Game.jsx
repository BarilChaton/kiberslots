// import React, {useState, useEffect} from 'react'

// // Art assets.
// import img1 from '../Assets/Reel/1.png';
// import img2 from '../Assets/Reel/2.png';
// import img3 from '../Assets/Reel/3.png';
// import img4 from '../Assets/Reel/4.png';
// import img5 from '../Assets/Reel/5.png';

// const Game = () => {

//     const [spin, setSpin] = useState(false)
//     const [ring1, setRing1] = useState()
//     const [ring2, setRing2] = useState()
//     const [ring3, setRing3] = useState()
//     const [price, setPrice] = useState()
//     const [input, setInput] = useState()
//     const [bet, setBet] = useState()
//     const [jackpot, setJackpot] = useState(0)


//     useEffect(() => {
//       win()
//     }, [ring3])


// function row1() {
//     if(!spin) {
//         return (
//             <>
//             <div className='animate-stopReel h-[100px] leading-[100px] align-middle'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel h-[100px] leading-[100px] align-middle'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel h-[100px] leading-[100px] align-middle'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel h-[100px] leading-[100px] align-middle'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel h-[100px] leading-[100px] align-middle'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (spin && ring1 === undefined) {
//         return(
//             <>
//             <div className='animate-spinningReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring1 >= 1 && ring1 <= 50 ) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring1 > 50 && ring1 <= 75) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring1 > 75 && ring1 <= 95) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring1 > 95 && ring1 <= 100) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     }
// }

// function row2() {
//     if(!spin) {
//         return (
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (spin && ring2 === undefined) {
//         return(
//             <>
//             <div className='animate-spinningReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring2 >= 1 && ring2 <= 50 ) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring2 > 50 && ring2 <= 75) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring2 > 75 && ring2 <= 95) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring2 > 95 && ring2 <= 100) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     }
// }

// function row3() {
//     if(!spin) {
//         return (
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (spin && ring3 === undefined) {
//         return(
//             <>
//             <div className='animate-spinningReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-spinningReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring3 >= 1 && ring3 <= 50 ) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring3 > 50 && ring3 <= 75) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring3 > 75 && ring3 <= 95) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     } else if (ring3 > 95 && ring3 <= 100) {
//         return(
//             <>
//             <div className='animate-stopReel'><img src={img1} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img2} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img3} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img4} alt='symbol' /></div>
//             <div className='animate-stopReel'><img src={img5} alt='symbol' /></div>
//             </>
//         )
//     }
// }

// function win() {
//     if(ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 !== undefined) {
//         setPrice(1)
//     } else if (ring1 > 50 && ring1 <= 75 && ring2 > 50 && ring2 <= 75 && ring3 > 50 && ring3 <= 75 && ring1 !== undefined) {
//         setPrice(2)
//     } else if (ring1 > 75 && ring1 <= 95 && ring2 > 75 && ring2 <= 95 && ring3 > 75 && ring3 <= 95 && ring1 !== undefined) {
//         setPrice(3)
//     } else if (ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100 && ring1 !== undefined) {
//         setPrice(4)
//     } else {
//         setPrice(0)
//     }
// }

// function rand() {
//     setRing1(Math.floor(Math.random() * (100 - 1) + 1))
//     setTimeout(function(){setRing2(Math.floor(Math.random() * (100 - 1) + 1))}, 1000)
//     setTimeout(function(){setRing3(Math.floor(Math.random() * (100 - 1) + 1))}, 2000)
// }


// function play() {
//     if (ring3 > 1 || !spin) {
//         if (input <= bet && input >= 1) {
//             setBet(input)
//             setSpin(true)
//             setRing1()
//             setRing2()
//             setRing3()
//             setJackpot(jackpot + (input / 2))
//             setTimeout(function(){
//                 rand()
//             }, 2000)
//         } else {
//             setPrice(10)
//         }
//     }
// }

// function win() {

// }
    
//   return (
//     <div class='Reels' className='flex justify-center gap-10'>
//         <div className='border-x-8 border-blue-300'>
//             {row1()}
//         </div>
//         <div className='border-x-8 border-blue-300'>
//             {row2()}
//         </div>
//         <div className='border-x-8 border-blue-300'>
//             {row3()}
//         </div>
//     </div>
//   )
// }

// export default Game
