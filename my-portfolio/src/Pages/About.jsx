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
  const secRef = useRef(null)
  const imgRef = useRef(null)
  const secondRef = useRef(null)

  useLayoutEffect(()=>{
    const ctx2 = gsap.context(()=>{
      const tl = gsap.timeline();

      tl.from(secRef.current,{
        y:100,
        duration: 0.6
      })
      .from([mainRef.current,iconRef.current],{
        opacity :0,
        y: 60,
        duration : 0.5,
        stagger : 0.2,
      },'-=0.3')

      .from([imgRef.current.children,secondRef.current.children],{
        opacity : 0,
        y: 30,
        duration  :0.3,
        stagger:0.1,
        ease : 'power3.out'
      })
    })

    return () => ctx2.revert();
  },[])

 useLayoutEffect(()=>{
  gsap.set(divRef.current,{scaleX : 0,
    transformOrigin : 'right center'
  })
  const ctx  =  gsap.context(()=>{
    tlRef.current = gsap.timeline({paused : true})

    tlRef.current
      
      .to(divRef.current,{
        scaleX : 1,
        duration : 0.8,
        ease : 'power3.out'
      })
      .from(listRef.current,{
        opacity : 0,
        y : 40,
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
    <section className='min-h-screen w-screen ' ref={secRef}>
      <nav className='h-[10vh] w-full flex items-center justify-between relative px-4 font-poppins font-normal text-white' >
        <div className="">
          <h1 className='text-3xl ' ref={mainRef}>Prajwal</h1>
        </div>
        
        <div className="absolute bg-white top-0 right-0 w-[60%] h-screen py-25 px-6 text-black  " ref={divRef}>
          {lists.map((list,i) => (
            <h1 key={i} ref={(el) => listRef.current[i] = el}  className='text-2xl pb-4'>{list}</h1>
          ))}
        </div>

        <div className={`z-10 text-2xl  w-[6em] rounded-[3em] flex justify-end items-center px-3 py-2 gap-3 cursor-pointer border-2 transition-colors duration-400
    ${isOpen 
      ? 'bg-black text-white border-black' 
      : 'bg-white text-black border-black'}` } 
      onClick={() => SetIsOpen(!isOpen) } ref={iconRef}>
          <span className='text-xl'>{isOpen ? 'CLOSE' : 'MENU'}</span>
          <FontAwesomeIcon  icon={isOpen ? faXmark  :faBars} />
        </div>
      </nav>

      <div className="h-[calc(100vh-10vh)] w-full ">
        
        <div className="h-[50%] w-full flex items-center justify-center " ref={imgRef}>
          <div className='h-60 w-60 rounded-full overflow-hidden relative'>
            <img src="./public/me.jpeg" className='absolute  bottom-[-30%] scale-110' alt="" />
          </div>
        </div>

        <div className='h-[40%] w-full flex flex-col items-center justify-evenly ' ref={secondRef}>

          <h2 className='text-white text-3xl font-roboto'>Hi, I'm Prajwal </h2>
          <p className='text-white max-w-[80%]  text-center text-2xl'>I'm a passionate frontend developer who loves creating sleek, interactive web experiences.</p>
          <div className="flex gap-8  text-xl ">
            <button className='border-2 rounded-3xl px-5 py-2 bg-white transform transition duration-75 active:scale-95 cursor-pointer'>Connect with me</button>
            <button className='border-2 rounded-3xl px-5 py-2 bg-white transform transition duration-75 active:scale-95 cursor-pointer'>My resume</button>
          </div> 

        </div>
      </div>
    </section>
  )
}

export default About