import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faXmark, 
  faUser, 
  faEnvelope,
  faHome 
} from '@fortawesome/free-solid-svg-icons';

const About = () => {

  const lists = ['Home','About Me','Skills','Contact'];
  const listRef = useRef([])
  const mainRef = useRef(null)

  const [isOpen, SetisOpen] = useState(false)

  function handle(){
    SetisOpen(!isOpen);
    
  }

  return (
    <section className='min-h-screen w-screen'>
      <nav className='h-[10vh] w-full bg-red-300 flex items-center justify-between relative px-4 font-poppins font-bold' >
        <div className="">
          <h1 className='text-3xl ' ref={mainRef}>Prajwal</h1>
        </div>
        
        <div className="absolute right-0 w-[60%] h-full py-9 px-6 bg-white hidden">
          {lists.map((list,i) => (
            <h1 key={i} ref={(el) => listRef.current[i] = el}  className='text-2xl pb-4'>{list}</h1>
          ))}
        </div>

        <div className="z-10 text-2xl navBar" onClick={handle}>
          <FontAwesomeIcon icon={isOpen ? faXmark :faBars} />
        </div>
      </nav>
    </section>
  )
}

export default About