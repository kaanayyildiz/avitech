import React from 'react';
import Slider from 'react-infinite-logo-slider'

export default function InfiniteSlider() {
  return (
    <div className='grayscale opacity-50 items-center justify-center shadow-sm p-4' id='about-us'>
    <Slider
            width="250px"
            duration={100}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src="https://ibb.co/LYBqDYs" alt="skymark" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://ibb.co/my8mNrk" alt="tai" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://ibb.co/DzDkBgT" alt="airbus" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://ibb.co/y5pL2Cz" alt="boeing" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://ibb.co/nDqFkcw" alt="lockheed-martin" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://ibb.co/LYBqDYs" alt="skymark" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://ibb.co/my8mNrk" alt="tai" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://ibb.co/DzDkBgT" alt="airbus" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://ibb.co/y5pL2Cz" alt="boeing" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://ibb.co/nDqFkcw" alt="lockheed-martin" className='w-28' />
            </Slider.Slide>
        </Slider>
        </div>
  );
}
