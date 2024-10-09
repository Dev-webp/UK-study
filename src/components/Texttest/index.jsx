'use client';
import Paragraph from '../Text/Paragraph';
import Word from '../Text/Word';
import Character from '../Text/Character';
import './style.css'

const paragraph = '"Are you considering studying in the UK? VJC Overseas is one of the BEST CONSULTANCY IN INDIA FOR UK."';
const paragraph1 = '"VJC overseas is the best Overseas UK education consultants and experts in study abroad solutions. VJC has strong tie ups with UK universities being one of the top UK CONSULTANCIES IN INDIA and has placed en number of students in the UK."'
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
        <Word paragraph={paragraph1}/>
        </div> 
        
    </main>
  )
}