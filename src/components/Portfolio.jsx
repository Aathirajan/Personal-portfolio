import React from 'react'
import atm from '../assets/portfolio/AtmMachine.png'
import game from '../assets/portfolio/FightingGame.png'
import superHero from '../assets/portfolio/SuperHeroApp.png'
import tipCal from '../assets/portfolio/Tip calculator.png'
import weather from '../assets/portfolio/WeatherApp.png'


const Portfolio = () => {
  
  const portfolios = [
    {
      id: 1,
      name: 'Atm machine',
      live:"https://magical-manatee-b978a0.netlify.app/",
      src: atm,
      tech: 'Tech:HTML,CSS,Javascript,OOPS',
      ghLink: 'https://github.com/Aathirajan/ATM-machine'
    },
    {
      id: 2,
      name: 'Fighting game',
      live:"https://eclectic-daffodil-5e966b.netlify.app/",
      src: game,
      tech: 'Tech: JavaScript,Oops,HTML,Css. ',
      ghLink: 'https://github.com/Aathirajan/Fighting-Game'
    },
    {
      id: 3,
      name: 'Super Hero App',
      live:"https://splendorous-concha-bb1a25.netlify.app/",
      src: superHero,
      tech: 'Tech: SuperHeroAPI,Javascript ',
      ghLink: 'https://github.com/Aathirajan/SuperHeroApp'
    },
    {
      id: 4,
      name: 'Tip Calculator',
      live:"https://timely-paletas-e30e00.netlify.app/",
      src: tipCal,
      tech: 'Tech: Html,Css,Js',
      ghLink: 'https://github.com/Aathirajan/Advanced-Tip-Calculator'
    },
    {
      id: 5,
      name: 'Weather App',
      live:"https://luxury-dasik-87c04a.netlify.app/",
      src: weather,
      tech: 'Tech: RapidAPI,Javascript',
      ghLink: 'https://github.com/Aathirajan/Weather-App'
    },
    
  ]
  return (
    <div name='portfolio' className='bg-[#00171F] w-full pb-5 text-white md:h-fit  '>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=' pb-8'>
          <p className=' text-4xl font-bold inline border-b-4  border-gray-500'>Portfolio</p>
          <p className='font-signature py-6'>Check some of my work right here.</p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 sm:px-0'> 
        {
          portfolios.map(({id, src, name, tech, ghLink,live}) => (
            
            <div key={id} className=' shadow-lg shadow-gray-600 rounded-lg'>
              <p className=' text-center font-signature pb-3'>{name}</p>
            <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105' />
              <p className=' text-center pt-3 font-signature'>{tech}</p>
            <div className=' flex items-center justify-center'>

              
              <a  target="_blank" rel="noreferrer" className='font-signature bg-[#ffb703] rounded-xl w-1/2 px-6 py-3 m-4 duration-200 text-center text-[#00171F]' href={live}>LIVE</a>
              <a target="_blank" rel="noreferrer" className='font-signature bg-[#ffb703] rounded-xl w-1/2 px-6 py-3 m-4 duration-200 text-center text-[#00171F]' href={ghLink}>CODE</a>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio