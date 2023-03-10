import Head from 'next/head'
import { Inter } from '@next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from 'next/image';
import tenetavatar from '../public/dev-ed-wave.png';
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react';



export default function Home() {

  const [darkMode, setDarkMode] = useState(false);


  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Swastik's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>

        <section className='min-h-screen'>

          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons dark:text-white'>tenet</h1>
            <ul className=' flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-2xl dark:text-white'/>
                </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-md ml-8' href='#'>LinkedIn</a>
                </li>
            </ul>
          </nav>

          <div className=' text-center p-10'>
            <h2 className=' text-5xl py-2 text-teal-600 font-medium font-burtons md:text-6xl'>
              Swastik Patel
              </h2>
            <h3 className=' text-2xl py-2 md:text-3xl dark:text-purple-500'>MERN Stack Dvlpr from India.</h3>
            <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-lg dark:text-white'>
              A Freelancer who will provide you all with his efforts and time in order to take your business to the next level.
            </p>
          </div>
          <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle className=' dark:text-blue-400'/>
            <AiFillLinkedin className=' dark:text-blue-500'/>
            <AiFillYoutube className=' dark:text-red-700' />
          </div>

          <div className=' relative mx-auto bg-gradient-to-b from-teal-500 to-purple-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image className=' mx-auto' style={{objectFit:"cover"}} src={tenetavatar} fill  alt='Avatar not Available now.'/>
          </div>

        </section>

        {/* Next Section Starting */}

        <section className=' mt-11'>
          <div>
            <h3 className='text-3xl py-1 dark:text-cyan-500'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-lg dark:text-white'>
              Since the starting of my college days I have very passionate about Web Development and wanted to pursue it seriously.
              The ultimate target of mine is to get a Web Developer job role in a big MNC.
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>


                   {/* cards section */}

          <div className=' gap-2 lg:flex lg:gap-10'>       {/* This div is containing all three cards */}


            <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300'>
              <Image className=' mx-auto' src={design} alt='error404' width={100} height={100} />
              <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className=' py-2'>
                Creating elegant designs suited for your needs based on design theory.
              </p>
              <h4 className=' py-4 text-teal-600'>Design tools I use</h4>
              <p className=' py-1 text-gray-800'>Photoshop</p>
              <p className=' py-1 text-gray-800'>After Effects</p>
              <p className=' py-1 text-gray-800'>Figma</p>

            </div>


            <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300'>
              <Image className=' mx-auto' src={code} alt='error404' width={100} height={100} />
              <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className=' py-2'>
                Creating elegant designs suited for your needs based on design theory.
              </p>
              <h4 className=' py-4 text-teal-600'>Design tools I use</h4>
              <p className=' py-1 text-gray-800'>Photoshop</p>
              <p className=' py-1 text-gray-800'>After Effects</p>
              <p className=' py-1 text-gray-800'>Figma</p>

            </div>


            <div className=' text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-300'>
              <Image className=' mx-auto' src={consulting} alt='error404' width={100} height={100} />
              <h3 className=' text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className=' py-2'>
                Creating elegant designs suited for your needs based on design theory.
              </p>
              <h4 className=' py-4 text-teal-600'>Design tools I use</h4>
              <p className=' py-1 text-gray-800'>Photoshop</p>
              <p className=' py-1 text-gray-800'>After Effects</p>
              <p className=' py-1 text-gray-800'>Figma</p>

            </div>

          </div>
        </section>

        {/* Next Section starting */}

        <section className=' mt-5'>
          <div>
            <h3 className=' text-3xl py-1 dark:text-cyan-500'>Portfolio</h3>

            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the starting of my college days I have very passionate about Web Development and wanted to pursue it seriously.
              The ultimate target of mine is to get a Web Developer job role in a big MNC.
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className=' flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>

            <div className=' basis-1/3 flex-1'>
              <Image className=' rounded-lg object-cover w-full h-full ' src={web1} alt='error404'  />
            </div>

            <div className=' basis-1/3 flex-1'>
              <Image className=' rounded-lg object-cover w-full h-full ' src={web2} alt='error404' />
            </div>

            <div className=' basis-1/3 flex-1'>
              <Image className=' rounded-lg object-cover w-full h-full ' src={web3} alt='error404' />
            </div>

            <div className=' basis-1/3 flex-1'>
              <Image className=' rounded-lg object-cover w-full h-full ' src={web4} alt='error404' />
            </div>

            <div className=' basis-1/3 flex-1'>
              <Image className=' rounded-lg  object-cover w-full h-full' src={web5} alt='error404' />
            </div>

            <div className=' basis-1/3 flex-1'>
              <Image className=' rounded-lg object-cover w-full h-full ' src={web6} alt='error404' />
            </div>

          </div>

        </section>


        
      </main>
    </div>
  )
}
