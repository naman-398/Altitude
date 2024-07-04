"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CardLine } from './common/Icon';
import Image from 'next/image';

const OurWork = () => {
    const cardLines = useRef([]);
    const numbers = useRef([]);
    const cards = useRef([]);
    const hrRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        cards.current.forEach((card, index) => {
            tl.to([card, numbers.current[index]], {
                duration: 1,
                filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 1))',
                stagger: 0.5,
            }, index * 0.5)
            .to(hrRef.current, {
                duration: 1,
                filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 1))',
                ease: 'none'
            }, index * 0.5);
        });

    }, []);

    return (
        <div className='bg-rich-black relative'>
            <div className='max-w-[1194px] mx-auto px-3 py-32 relative'>
                <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl leading-116 tracking-tight text-center text-white mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
                    Our Work Process
                </h2>
                <div className='flex lg:flex-col justify-center md:justify-start md:flex-row flex-row-reverse gap-6 md:gap-[55px] lg:gap-[52px] sm:max-w-[415px] max-w-[400px]  md:max-w-[768px] mx-auto lg:max-w-[unset] lg:mx-0'>
                    <div className='flex items-center flex-col lg:flex-row gap-4 md:gap-12 xl:justify-start justify-center'>
                        {[
                            { img: '/assets/images/svg/letterBoard.svg', text: 'Inspect property for storm damage or quote preparation.' },
                            { img: '/assets/images/svg/twoPerson.svg', text: 'Meet with claims adjuster if applicable' },
                            { img: '/assets/images/svg/stockScreen.svg', text: 'Production Planning (permitting/scheduling)' }
                        ].map((card, index) => (
                            <div ref={el => cards.current[index] = el} key={index}>
                                <div className='xxs:p-4 p-3 md:p-6 bg-eerie-black rounded-xl max-w-[280px] xxs:max-w-[300px] md:min-h-[190px] relative'>
                                    <Image src={card.img} alt="letterboard" width={40} height={40} />
                                    <p className='font-medium text-base sm:text-lg md:text-xl !leading-130 text-white mt-3 sm:mt-4 md:mt-6'>{card.text}</p>
                                </div>
                            </div>
                        ))}
                        <div className='md:hidden flex items-center flex-col gap-4 md:gap-12'>
                            {[
                                { img: '/assets/images/svg/wealthMoney.svg', text: 'Estimate repair or replacement cost' },
                                { img: '/assets/images/svg/paperRight.svg', text: 'Finalize necessary documentation' },
                                { img: '/assets/images/svg/screwDriver.svg', text: 'Construction begins! (Most projects completed in 1 day!)' }
                            ].map((card, index) => (
                                <div ref={el => cards.current[index + 3] = el} key={index + 3}>
                                    <div className='p-4 md:p-6 bg-eerie-black rounded-xl max-w-[300px] md:min-h-[190px] relative'>
                                        <Image src={card.img} alt="letterboard" width={40} height={40} />
                                        <p className='font-medium text-base sm:text-lg md:text-xl !leading-130 text-white mt-3 sm:mt-4 md:mt-6'>{card.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='xl:max-w-[924px] lg:max-w-[996px] mx-auto xl:mx-0  relative'>
                        <hr ref={hrRef} className=' bg-outer-space h-[700px] sm:h-[750px] md:h-[666px] lg:h-[1px] absolute lg:relative z-[0] top-0 md:top-[-3.5%] lg:left-[unset] lg:top-[unset] left-[48%] translate-y-[28px] w-[1px] lg:w-full' />
                        <div className='flex gap-[105px] sm:gap-[95px] md:gap-[70px] lg:gap-[135px] flex-col lg:flex-row xl:gap-[120px] items-center relative z-[2]'>
                            {[...Array(6)].map((_, index) => (
                                <div className='sm:w-[54px] w-[40px] h-[40px] sm:h-[54px] flex items-center justify-center rounded-full bg-yankees-blue relative z-[2]'>
                                <div key={index} className=' text-white leading-125 text-xl sm:text-2xl '>
                                    <span
                                        className={`absolute z-[-1] hidden xxs:block ${index % 2 === 0 ? 'md:top-[3%] top-0 sm:top-[15%] rotate-90 md:-rotate-90 lg:rotate-0 lg:top-[-100%] sm:left-[132%]  left-[142%] md:left-[-58%] lg:left-[45%]' : 'lg:top-[100%] top-0 sm:top-[15%] md:top-[1%] sm:left-[132%] left-[142%] md:left-[146%] lg:left-[45%] rotate-90 md:rotate-90 lg:rotate-180'}`}
                                        ref={el => cardLines.current[index] = el}
                                    >
                                        <CardLine />
                                    </span>
                                    <div ref={el => numbers.current[index] = el}>
                                        {index + 1}
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='md:flex items-center gap-12 flex-col lg:flex-row xl:justify-end justify-center hidden'>
                        {[
                            { img: '/assets/images/svg/wealthMoney.svg', text: 'Estimate repair or replacement cost' },
                            { img: '/assets/images/svg/paperRight.svg', text: 'Finalize necessary documentation' },
                            { img: '/assets/images/svg/screwDriver.svg', text: 'Construction begins! (Most projects completed in 1 day!)' }
                        ].map((card, index) => (
                            <div ref={el => cards.current[index + 6] = el} key={index + 6}>
                                <div className='p-4 md:p-6 bg-eerie-black rounded-xl max-w-[300px] md:min-h-[190px] relative'>
                                    <Image src={card.img} alt="letterboard" width={40} height={40} />
                                    <p className='font-medium text-base sm:text-lg md:text-xl !leading-130 text-white mt-3 sm:mt-4 md:mt-6'>{card.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default OurWork;
