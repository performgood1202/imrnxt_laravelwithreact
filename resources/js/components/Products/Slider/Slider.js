import React, {useState, useEffect, useRef} from 'react'
import './SliderLi.scss'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

import greenleft from '../../../assets/img/green-left.png';
import logo2 from '../../../assets/img/green-shape.svg';
import greenright from '../../../assets/img/green-right.png';

const Slider = () => {

    // const [slideIndex, setSlideIndex] = useState(1)

    const indicatorIndex = useRef();

    let _sliderIndex = 1;
    const nextSlide = () => {
        if(_sliderIndex !== dataSlider.length){
            _sliderIndex = _sliderIndex + 1
        } 
        else if (_sliderIndex === dataSlider.length){
            _sliderIndex = 1 
        }
        classRemover(_sliderIndex);
        
    }

    const prevSlide = () => {
        if(_sliderIndex !== 1){
            _sliderIndex = _sliderIndex - 1
        }
        else if (_sliderIndex === 1){
            _sliderIndex = dataSlider.length
        }
        classRemover(_sliderIndex);
    }

    const slides = document.getElementsByClassName("slider");

    const classRemover = (sInd) => {
        console.log(sInd)
        for (const slide of slides ) {
            slide.classList.remove('active');
        }
        indicatorIndex.current.innerText = sInd
        document.getElementById('slide-'+sInd).classList.add('active');
    }
    const myClickHandler = (i) => {
        _sliderIndex = i
        classRemover(_sliderIndex);

    }

    useEffect(() => {
        myClickHandler(1)
    }, []);

    return (
        <section className="product-slider-sec">
        <div className="slider-text container">
            <div className="row">
                <div className="col-md-4">
                    <div className="slider-title">
                        <h2>Product <br />Engineering</h2>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="slider-content">
                        <p>IMR Next’s hardware and software is a complete cable replacement solution that provides bidirectional video, audio and control to enable next-level user immersion.</p>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="slider-pagintaion">
                        <span class="img-4" >
                          <img src={greenleft} onClick={prevSlide} id="logo1" />
                        </span>
                        <span ref={indicatorIndex}></span>
                        <span>{' / '}</span>
                        <span>{dataSlider.length}</span>
                        <span class="img-3" >
                          <img src={greenright} onClick={nextSlide} id="logo3" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
          <ul>
          {dataSlider.map((obj, index) => {
                return (
            <li
            id={"slide-"+(index+1)}
            style={{backgroundImage: `url(${obj.img})`}}
            onClick={() => {myClickHandler(index+1)}}
            className="slider"
            >
              <h3>{obj.title}</h3>
              <div class="section-content">
                <div class="inner">
                  <div class="bio">
                    <h2>{obj.subTitle}</h2>
                    <p>
                      { obj.subTitle }
                    </p>
                    <a
                      href="#"
                      class="artist-profile-link md:hidden"
                    >
                      <img
                        src={obj.img}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </li>
            )
            })}
          </ul>
        </section>
    )
}
export default Slider;