import React from 'react'
import galaxos from '../assets/portfolio/AtmMachine.png'
import infowars from '../assets/portfolio/FightingGame.png'
import library from '../assets/portfolio/SuperHeroApp.png'
import musicon from '../assets/portfolio/Tip calculator.png'
import paintings from '../assets/portfolio/WeatherApp.png'
// import projectManager from '../assets/portfolio/projectManager.jpg'
// import randomrecipe from '../assets/portfolio/randomrecipe.jpg'


const Portfolio = () => {
  
  const portfolios = [
    {
      id: 1,
      name: 'Atm machine',
      src: galaxos,
      tech: 'Tech:HTML,CSS,Javascript,OOPS',
      ghLink: 'https://github.com/Aathirajan/ATM-machine'
    },
    {
      id: 2,
      name: 'Fighting game',
      src: infowars,
      tech: 'Tech: JavaScript,Oops,HTML,Css. ',
      ghLink: 'https://github.com/Aathirajan/Fighting-Game'
    },
    {
      id: 3,
      name: 'Super Hero App',
      src: library,
      tech: 'Tech: SuperHeroAPI,Javascript ',
      ghLink: 'https://github.com/Aathirajan/SuperHeroApp'
    },
    {
      id: 4,
      name: 'Tip Calculator',
      src: musicon,
      tech: 'Tech: Html,Css,Js',
      ghLink: 'https://github.com/Aathirajan/Advanced-Tip-Calculator'
    },
    {
      id: 5,
      name: 'Weather App',
      src: paintings,
      tech: 'Tech: RapidAPI,Javascript',
      ghLink: 'https://github.com/Aathirajan/Weather-App'
    },
    // {
    //   id: 6,
    //   name: 'MYSPEND',
    //   src: projectManager,
    //   tech: 'Tech: JavaScript, Express.js, React.js, MongoDB. ',
    //   ghLink: 'https://github.com/Rodvak/ProductManager'
    // },
    // {
    //   id: 7,
    //   name: 'RANDOMRE',
    //   src: randomrecipe,
    //   tech: 'Tech: JavaScript, Express.js, React.js, Recipes API. ',
    //   ghLink: 'https://github.com/Rodvak/splor'
      
    // },

  ]
  return (
    <div name='portfolio' className='bg-[#00171F] w-full pb-5 text-white md:h-fit  '>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=' pb-8'>
          <p className=' text-4xl font-bold inline border-b-4  border-gray-500'>Portfolio</p>
          <p className='font-signature py-6'>Check some of my work right here.</p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0'>
        {
          portfolios.map(({id, src, name, tech, ghLink}) => (
            
            <div key={id} className=' shadow-lg shadow-gray-600 rounded-lg'>
              <p className=' text-center font-signature pb-3'>{name}</p>
            <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105' />
              <p className=' text-center pt-3 font-signature'>{tech}</p>
            <div className=' flex items-center justify-center'>

              {/* create an onClick event inside the button to take people into the links. you can have the link in the array at the top, so you can loop over into it */}
              {/* <button className='font-signature w-1/2 px-6 py-3 m-4 duration-200'>Demo</button> */}
              <a className='font-signature bg-[#ffb703] rounded-xl w-1/2 px-6 py-3 m-4 duration-200 text-center text-[#00171F]' href={ghLink}>VIEW CODE</a>
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