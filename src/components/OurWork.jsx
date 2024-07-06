"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CardLine } from './common/Icon';

const OurWork = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [visibleNumbers, setVisibleNumbers] = useState([]);
    const [cardLinesVisible, setCardLinesVisible] = useState(false);

    const firstSet = [
        { img: '/assets/images/svg/letterBoard.svg', text: 'Inspect property for storm damage or quote preparation.' },
        { img: '/assets/images/svg/twoPerson.svg', text: 'Meet with claims adjuster if applicable' },
        { img: '/assets/images/svg/stockScreen.svg', text: 'Production Planning (permitting/scheduling)' }
    ];

    const secondSet = [
        { img: '/assets/images/svg/wealthMoney.svg', text: 'Estimate repair or replacement cost' },
        { img: '/assets/images/svg/paperRight.svg', text: 'Finalize necessary documentation' },
        { img: '/assets/images/svg/screwDriver.svg', text: 'Construction begins! (Most projects completed in 1 day!)' }
    ];

    const interleavedCards = firstSet.map((item, index) => [item, secondSet[index]]).flat();

    useEffect(() => {
        let timeoutIds = [];

        // Function to show numbers and initiate card line animation
        const showNumbersAndCardLine = () => {
            const numbersOrder = [0, 1, 2, 3, 4, 5]; // Define the order of appearance for numbers
            for (let i = 0; i < numbersOrder.length; i++) {
                timeoutIds.push(setTimeout(() => {
                    setVisibleNumbers(prev => [...prev, numbersOrder[i]]);
                }, i * 500)); // Adjust the timing as needed
            }

            // Simulate card line animation delay
            timeoutIds.push(setTimeout(() => {
                setCardLinesVisible(true); // Trigger card line animation after numbers appear
            }, numbersOrder.length * 500));
        };

        // Function to show cards after numbers and card line animation
        const showCards = () => {
            let interleavedOrder;
            if (window.innerWidth < 768) { // Change order for screens below md size (768px)
                interleavedOrder = [0, 1, 2, 3, 4, 5]; 
            } else {
                interleavedOrder = [0, 3, 1, 4, 2, 5]; 
            }
    
            for (let i = 0; i < interleavedCards.length; i++) {
                timeoutIds.push(setTimeout(() => {
                    setVisibleCards(prev => [...prev, interleavedOrder[i]]);
                }, i * 500)); // Adjust the timing as needed
            }
        };

        // Initial sequence
        showNumbersAndCardLine();
        showCards();

        return () => timeoutIds.forEach(id => clearTimeout(id));
    }, [interleavedCards.length]);

    return (
        <div className='bg-rich-black relative'>
            <div className='max-w-[1194px] mx-auto px-3 py-32 relative'>
                <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl leading-116 tracking-tight text-center text-white mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
                    Our Work Process
                </h2>
                <div className='flex lg:flex-col md:flex-col flex-row-reverse justify-center md:justify-start gap-6 md:gap-[55px] lg:gap-[52px] sm:max-w-[415px] max-w-[380px] xxs:max-w-[400px] md:max-w-[768px] mx-auto lg:max-w-[unset] lg:mx-0'>
                    <div className='xl:max-w-[924px] lg:max-w-[996px] mr-auto xxs:mx-auto xl:mx-0 relative md:order-2 order-1 md:hidden'>
                        <hr className='bg-outer-space h-[775px] sm:h-[750px] border-t-0 md:h-[666px] lg:h-[1px] absolute lg:relative z-[0] top-0 md:top-[-3.5%] lg:left-[unset] lg:top-[unset] left-[48%] translate-y-[28px] w-[1px] lg:w-full' />
                        <div className='flex gap-[118px] sm:gap-[100px] md:gap-[70px] lg:gap-[135px] flex-col lg:flex-row xl:gap-[120px] items-center relative z-[2]'>
                            {[0, 1, 2, 3, 4, 5].map((index) => (
                                <div key={index} className={`card sm:w-[54px] w-[40px] h-[40px] sm:h-[54px] flex items-center justify-center rounded-full bg-yankees-blue relative z-[2] ${visibleNumbers.includes(index) ? 'visible' : ''}`}>
                                    <div className='text-white leading-125 text-xl sm:text-2xl'>
                                        <span
                                            className={`absolute z-[-1] hidden xxs:block ${index % 2 === 0 ? 'md:top-[3%] top-0 sm:top-[15%] rotate-90 md:-rotate-90 lg:rotate-0 lg:top-[-100%] sm:left-[132%] left-[142%] md:left-[-58%] lg:left-[45%]' : 'lg:top-[100%] top-0 sm:top-[15%] md:top-[1%] sm:left-[132%] left-[142%] md:left-[146%] lg:left-[45%] rotate-90 md:rotate-90 lg:rotate-180'}`}
                                        >
                                            <CardLine style={{ visibility: cardLinesVisible ? 'visible' : 'hidden' }} />
                                        </span>
                                        <div>
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex lg:flex-col md:flex-row flex-col justify-center md:justify-start gap-6 md:gap-[55px] lg:gap-[52px] '>
                        <div className='flex items-center flex-col lg:flex-row gap-4 md:gap-12 xl:justify-start justify-center order-1'>
                            {[0, 1, 2].map((index) => (
                                <div key={index} className={`card ${visibleCards.includes(index) ? 'visible' : ''}`}>
                                    <div className='xxs:p-4 p-3 md:p-6 bg-eerie-black rounded-xl max-w-[280px] xxs:max-w-[300px] min-h-[138px] md:min-h-[190px] relative'>
                                        <Image src={interleavedCards[index].img} alt="card image" width={40} height={40} />
                                        <p className='font-medium text-base sm:text-lg md:text-xl !leading-130 text-white mt-3 sm:mt-4 md:mt-6'>{interleavedCards[index].text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='xl:max-w-[924px] lg:max-w-[996px] mr-auto xxs:mx-auto xl:mx-0 relative md:order-2 order-1 hidden md:block'>
                            <hr className='bg-outer-space h-[775px] border-t-0 sm:h-[750px] md:h-[666px] lg:h-[1px] absolute lg:relative z-[0] top-0 md:top-[-3.5%] lg:left-[unset] lg:top-[unset] left-[48%] translate-y-[28px] w-[1px] lg:w-full' />
                            <div className='flex gap-[118px] sm:gap-[100px] md:gap-[70px] lg:gap-[135px] flex-col lg:flex-row xl:gap-[120px] items-center relative z-[2]'>
                                {[0, 1, 2, 3, 4, 5].map((index) => (
                                    <div key={index} className={`card sm:w-[54px] w-[40px] h-[40px] sm:h-[54px] flex items-center justify-center rounded-full bg-yankees-blue relative z-[2] ${visibleNumbers.includes(index) ? 'visible' : ''}`}>
                                        <div className='text-white leading-125 text-xl sm:text-2xl'>
                                            <span
                                                className={`absolute z-[-1] hidden xxs:block ${index % 2 === 0 ? 'md:top-[3%] top-0 sm:top-[15%] rotate-90 md:-rotate-90 lg:rotate-0 lg:top-[-100%] sm:left-[132%] left-[142%] md:left-[-58%] lg:left-[45%]' : 'lg:top-[100%] top-0 sm:top-[15%] md:top-[1%] sm:left-[132%] left-[142%] md:left-[146%] lg:left-[45%] rotate-90 md:rotate-90 lg:rotate-180'}`}
                                            >
                                                <CardLine style={{ visibility: cardLinesVisible ? 'visible' : 'hidden' }} />
                                            </span>
                                            <div>
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex items-center flex-col lg:flex-row gap-4 md:gap-12 xl:justify-end justify-center order-2'>
                            {[3, 4, 5].map((index) => (
                                <div key={index} className={`card ${visibleCards.includes(index) ? 'visible' : ''}`}>
                                    <div className='xxs:p-4 p-3 md:p-6 bg-eerie-black rounded-xl max-w-[280px] xxs:max-w-[300px] min-h-[138px] md:min-h-[190px] relative'>
                                        <Image src={interleavedCards[index].img} alt="card image" width={40} height={40} />
                                        <p className='font-medium text-base sm:text-lg md:text-xl !leading-130 text-white mt-3 sm:mt-4 md:mt-6'>{interleavedCards[index].text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;
