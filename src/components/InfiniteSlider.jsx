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
                <img src="https://i.ibb.co/wB8bZB2/skymark.png" alt="skymark" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://i.ibb.co/TYBRQqd/airbus.png" alt="airbus" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://i.ibb.co/Qnks0VW/boeing.png" alt="boeing" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://i.ibb.co/wB8bZB2/skymark.png" alt="skymark" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://i.ibb.co/TYBRQqd/airbus.png" alt="airbus" className='w-28' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://i.ibb.co/Qnks0VW/boeing.png" alt="boeing" className='w-28' />
            </Slider.Slide>
        </Slider>
        </div>
  );
}
