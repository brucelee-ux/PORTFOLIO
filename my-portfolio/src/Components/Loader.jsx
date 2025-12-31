import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const Loader = ({onFinish}) => {

  const letters = "PORTFOLIO".split('')
  const letterRef = useRef([])
  const mainRef = useRef(null)

  useLayoutEffect(()=>{
    const ctx = gsap.context(()=>{

      const tl = gsap.timeline({
        onComplete : onFinish
      })
      tl.from(letterRef.current,{
        opacity : 0,
        y : 120,
        rotateX : 90,
        duration:0.8,
        ease : 'elastic.out(1,1)',
        stagger :{
          each : 0.05,
          from : 'start'
        }
      })

      tl.to(mainRef.current,{
        yPercent : -100,
        duration: 0.6,
        opacity: 0,
        ease : 'power1.out'
      },'+=0.7')
    },mainRef)

    return () => ctx.revert();
  },[onFinish])

  return (
    <section className='fixed inset-0 bg-gray-950 z-40 h-screen w-screen flex items-center justify-center' ref={mainRef}>
      <div className="flex text-white text-3xl font-bbh overflow-y-hidden">
        {letters.map((letter,i)=>{
          return <h1 key={i} ref={(el) => letterRef.current[i] = el} className='px-0.4'>{letter}</h1>
        })}
      </div>
    </section>
  )
}

export default Loader