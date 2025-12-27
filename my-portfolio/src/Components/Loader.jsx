import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'

const Loader = ({OnFinish}) => {

    const letters = 'PORTFOLIO'.split('')

    const lettersRef = useRef([])
    const loaderRef = useRef(null)

    useEffect(()=>{
        const ctx = gsap.context(()=>{

          const tl = gsap.timeline({
            onComplete : ()=>{
              gsap.to(loaderRef.current,{
                y:'-100%',
                duration : 0.7,
                ease : 'power2.out',
                onComplete : OnFinish,
              },'+=0.6')
            }
          })
            tl.from(lettersRef.current,{
                y:120,
                opacity : 0,
                duration : 0.4,
                stagger : 0.04,
                ease : 'power3.out'
            },[OnFinish])
        })

        return () => ctx.revert();
    },[])

    lettersRef.current = []

  return (
    <section className='h-screen inset-0 w-screen bg-black flex items-center justify-center ' ref={loaderRef}>
        <div className="h-[10vh] text-white flex text-6xl border-2 items-center justify-center overflow-hidden">
            {letters.map((letter, i) => (
          <h1
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="mx-1"
          >
            {letter}
          </h1>
        ))}
        </div>
    </section>
  )
}

export default Loader