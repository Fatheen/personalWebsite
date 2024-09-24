import {FiGithub} from 'react-icons/fi'
// import {HiOutlineExternalLink} from 'react-icons/hi'
import Image from 'next/image'
import Head from 'next/head'


const projects = () => {
    return (
        <div className='h-screen mx-5 sm:mx-auto pt-32'>
            <Head>
                <title>Projects | Mohammed Fatheen Ahmed</title>
            </Head>
            <h1 className='font-bold text-3xl text-center'></h1>
            <div className='max-w-5xl md:px-4 py-8 pb-32 mx-auto space-y-28'>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Inventory Manager</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-5 aspect-h-3'>
                            <img src='https://appinventiv.com/wp-content/uploads/2017/01/A-Smart-Decision-Making-with-the-Inventory-Management-App-for-Your-Business-1.png' layout='fill'  alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                            Inventory Manager Project for Warehouses. This React web application allows users to track current inventory, add new inventory, ship products and look at back at statistics. 
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    React, JavaScript, Google Firebase
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/Fatheen/inventoryManage' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Music Finder</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-4 aspect-h-3'>
                            <img src='https://cdn-icons-png.flaticon.com/512/9448/9448086.png' layout='fill' alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                           Music Recommendation system using Python and Flask. Uses SciKit-Learn's Nearest Neighbors Algorithm to suggest similar songs in a dataset of over a million tracks. 
                            <a className='text-blue-500' href='https://addons.mozilla.org/addon/wordy-birdy-scramble-game/'> Visit Extension</a>  
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                   Python, Flask, SciKit-Learn, React
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/Fatheen' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>

                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'> AI Recipe</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-5 aspect-h-3'>
                            <img src='https://res.cloudinary.com/postman/image/upload/t_team_logo/v1655212273/team/bbdaca99ba1637cf9eda51b963caeb078f040ad4b4091aec9d4c9593bfab8a3f.png' layout='fill'  alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
              Full-stack web application that takes in pictures of ingredients and provides recipes that can be created using a combination of those ingredients using Node.js, express and Spoonacular API. 
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    Node.js, Express, React, Google Cloud
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/Fatheen/Fatheen' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>


                <section className='p-4 md:p-8 bg-gray-100 rounded-lg shadow-2xl'>
                    <h1 className='font-bold text-lg md:text-xl text-blue-500 pb-4'>Bike Path</h1>
                    <div className='grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center'>
                        <div className='aspect-w-5 aspect-h-3'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9X6X1wUmRDKOXGPC6WiPA8LdC7-bt9F_sOA&s' layout='fill'  alt=''/>
                        </div>
                        <blockquote className='sm:col-span-2'>
                            <p className='text-xs md:text-base'>
                            a biking navigation app using React and JavaScript, integrating OpenRouteService API for route
 calculation and Mapbox for interactive maps.
                            </p>
                            <cite className='inline-flex items-center mt-8 not-italic'>
                                <span className='hidden w-6 h-px bg-gray-400 sm:inline-block'></span>
                                <p className='text-xs md:text-base text-gray-500 sm:ml-3'>
                                    React, JavaScript, Google Firebase
                                </p>
                            </cite>
                            <div className='flex pt-8 space-x-4'>
                                <div>
                                    <a href='https://github.com/Fatheen/' target='_blank' rel='noopner noreferrer'>
                                        <FiGithub size='30px'/>
                                    </a>
                                </div>
                                {/* <div> */}
                                {/*     <HiOutlineExternalLink size='30px'/> */}
                                {/* </div> */}
                            </div>
                        </blockquote>
                    </div>
                </section>

               
            </div>
        </div>
    )
}

export default projects
