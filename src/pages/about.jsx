import { motion } from 'framer-motion'

import { CloseButtonContainer } from "../components/CloseButtonContainer";
import { TitlePage } from "../components/TitlePage";

import ImageFeature from '../assets/images/misc/1.jpg'
import Image from 'next/image';
import { CardTeam } from '../components/CardTeam';
import { Layout } from '../components/Layout';

export default function About() {
    // const variants = {
    //     hidden: { opacity: 0 },
    //     enter: { opacity: 1 },
    //     exit: { opacity: 0 },
    // }

    return (
        <Layout>

        <div
            className="flex items-start bg-neutral-900 w-screen h-screen pt-20 overflow-y-scroll"
        >
            <CloseButtonContainer />
            <div className="flex flex-col w-full items-start justify-center text-center max-w-7xl px-2 mx-auto">
                <TitlePage>
                    ABOUT <span>US</span>
                </TitlePage>

                <div className="grid grid-cols-2 w-full gap-8">
                    <div className='relative bg-primary p-7'>
                        <h2
                            className='text-neutral-900 font-bold text-2xl text-left'
                        >Design is not just what it looks like and feels like. Design is how it works.</h2>
                    </div>
                    
                    <div className='text-left'>
                        <p className="text-neutral-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores reprehenderit culpa obcaecati asperiores doloremque aliquid quis numquam recusandae odit dolorum delectus rem veniam rerum, quisquam est eveniet? Soluta, dignissimos!
                        </p>
                    </div>
                </div>

                <div className='mt-24 mb-4'>
                    <Image src={ImageFeature} alt='picture group' />
                </div>

                <div className='flex justify-between gap-4'>
                    <CardTeam picture={1}/>
                    <CardTeam picture={2}/>
                    <CardTeam picture={3}/>
                </div>
            </div>        
        </div>
        </Layout>
    )
}