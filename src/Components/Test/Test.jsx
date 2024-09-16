import React from 'react';
import { Link } from 'react-router-dom';
import Sfooter from '../Sfooter';
import S_header from '../S_header';

// import Footer from "../Footer.jsx"


function Test() {
  return (
    <div className='min-h-screen'>
      <div className="md:hidden"><S_header/></div>
      <div className=" h-screen"> 
        <div className='bg- bg-purple-500 absolute -z-10 h-[300px] w-full  '></div>
          <div className=' pl-[200px] pr-[200px]'>
            <p className='text-black text-5xl'>Lets take a test</p>
            <ul className='list-disc '>
              <li>
                <p className='text-black text-xl'>This Questionair will help us to analyse your stress levels<br/></p>
              </li>
            </ul>
          </div>
        <div className='pl-[200px] pr-[200px]'>
        <Link to="/forum" className='text-blue-600'>Take Test</Link>
        </div>
      </div>
      <Sfooter/>
    </div>
  );
}

export default Test;
















{/* <ul className="list-disc pl-8">
  <li>Work Stress</li>
  <li>Relationship Stress</li>
  <li>Health Stress</li>
</ul> */}