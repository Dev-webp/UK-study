'use client';
import Paragraph from '../Text/Paragraph';
import Word from '../Text/Word';
import Character from '../Text/Character';
import './style.css'

const paragraph = '"Are you considering studying in the UK? VJC Overseas is one of the BEST CONSULTANCY IN INDIA FOR UK."';
const paragraph1 = '"VJC Overseas is the premier immigration consultant in Bangalore, committed to assisting students and professionals in realising their aspirations of studying and working in the UK. Our expert team offers tailored guidance and support to ensure a smooth immigration journey. Trust us to unlock your potential and pave the way for a successful future in the UK"'
export default function Home() {

  const words = paragraph.split(" ")
  return (
    <main>
      <div className='sis'>
        {/* <div style={{height: "5vh"}}></div>
        <Paragraph paragraph={paragraph}/> */}
        <div style={{height: "15vh"}}></div>
        <Character paragraph={paragraph} />
        <div style={{height: "5vh"}}></div>
        <div style={{height: "5vh"}}></div>
        <Character paragraph={paragraph1}/>
        </div> 
        
    </main>
  )
}