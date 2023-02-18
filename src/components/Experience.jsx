import React from 'react'
import  html from "../assets/html.png";
import  css from "../assets/css.png";
import  javascript from "../assets/javascript.png";
import  reactImage from "../assets/react.png";
import  tailwind from "../assets/tailwind.png";
import  github from "../assets/github.png";
// import  aws from "../assets/aws.png";
// import  java from "../assets/java.png";
import  mongo from "../assets/mongo.png";
import  mysql from "../assets/mysql.png";
import  node  from "../assets/node.png";
// import  py from "../assets/py.png";
// import  spring from "../assets/spring.png";

const stacks = () => {
    
    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        // {
        //     id: 7,
        //     src: java,
        //     title: 'Java',
        //     style: 'shadow-red-500'
        // },
        // {
        //     id: 8,
        //     src: py,
        //     title: 'Python',
        //     style: 'shadow-yellow-300'
        // },
        // {
        //     id: 9,
        //     src: spring,
        //     title: 'SpringTool',
        //     style: 'shadow-green-500'
        // },
        {
            id: 10,
            src: mysql,
            title: 'MySQL',
            style: 'shadow-blue-700'
        },
        {
            id: 11,
            src: mongo,
            title: 'MongoDB',
            style: 'shadow-green-300'
        },
        {
            id: 12,
            src: node,
            title: 'Node',
            style: 'shadow-green-500'
        },
        // {
        //     id: 13,
        //     src: aws,
        //     title: 'AWS',
        //     style: 'shadow-orange-400'
        // },
    ]
  return (
    <div name='stacks' className='bg-[#00171F] w-full h-fit'>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Tech Stacks</p>
                <p className=' font-signature py-6'>Technologies I have worked with.</p>
            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                   tech.map(({id, src, title, style}) => (

                <div key={id} className={`font-signature shadow hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="technologies" className=' w-20 mx-auto' />
                    <p className=' mt-4'>{title}</p>
                </div>

                   )) 
                }
            </div>
        </div>
    </div>
  )
}

export default stacks