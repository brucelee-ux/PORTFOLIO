import React, { useLayoutEffect,useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faUser, faEnvelope,faHome } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap'

const About = () => {
  const [isOpen, SetIsOpen] = useState(false)
  const lists = ['Home','About Me','Skills','Contact'];
  const listRef = useRef([])
  const mainRef = useRef(null);
  const divRef = useRef(null)
  const tlRef = useRef(null)
  const iconRef = useRef(null)

  useLayoutEffect(()=>{
    const ctx2 = gsap.context(()=>{
      gsap.from([mainRef.current,iconRef.current],{
        opacity :0,
        duration : 0.5,
      })
    })

    return () => ctx2.revert();
  })

 useLayoutEffect(()=>{
  gsap.set(divRef.current,{xPercent : 100})
  const ctx  =  gsap.context(()=>{
    tlRef.current = gsap.timeline({paused : true})

    tlRef.current
      
      .to(divRef.current,{
        xPercent : 0,
        duration : 0.8,
        ease : 'power3.out'
      })
      .from(listRef.current,{
        opacity : 0,
        x : 80,
        duration : 0.3,
        stagger : 0.2,
        ease : 'power2.out'
      },'-=0.3')
  })

  return () => ctx.revert()
},[])

useEffect(()=>{
  if(!tlRef.current) return
  if(isOpen){
    tlRef.current.play()
  }else{
    tlRef.current.reverse();
  }
},[isOpen])


  return (
    <section className='min-h-screen w-screen'>
      <nav className='h-[10vh] w-full bg-red-300 flex items-center justify-between relative px-4 font-poppins font-bold' >
        <div className="">
          <h1 className='text-3xl ' ref={mainRef}>Prajwal</h1>
        </div>
        
        <div className="absolute top-0 right-0 w-[60%] h-full py-9 px-6 bg-white " ref={divRef}>
          {lists.map((list,i) => (
            <h1 key={i} ref={(el) => listRef.current[i] = el}  className='text-2xl pb-4'>{list}</h1>
          ))}
        </div>

        <div className="z-10 text-2xl navBar" onClick={() => SetIsOpen(!isOpen) } ref={iconRef}>
          <FontAwesomeIcon  icon={isOpen ? faXmark :faBars} />
        </div>
      </nav>
    </section>
  )
}

export default About