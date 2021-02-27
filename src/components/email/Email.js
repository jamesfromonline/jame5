import React, { useState, useEffect } from 'react'
import Mailto from 'react-protected-mailto'
import KUTE from 'kute.js'


const Email = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        if (!visible) {
            KUTE.fromTo(
                "#button1",
                { path: "#button1" },
                { path: "#button2" },
                {
                    duration: 500,
                    repeat: 0
                }
            ).start()
            setVisible(true)
        }
    }

    const contactText = visible ? (
        <Mailto email='jamesobriendev@gmail.com' />
    ) : 'show email'



    return (
        <div onClick={toggleVisible} style={{ zIndex: 2 }} className='email email--hidden'>
            <svg fill='#111' className='email__background' xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200">
                <path id="button1" className="email__button--hidden" d="M81.3,2c33.466-.191,59.84,1.733,89.709,7.058C196.3,13.567,213.862.793,237.531,5.025c21.3,3.808,47.417,6.154,70.556,2.017h20.16c17.143-4.247,45.675-9.775,56.445,6.05,15.067,22.14-6.516,63.753,2.016,93.774,5.019,17.662,15.724,50.889,4.032,68.566L373.6,191.564c-10.149,5.094-27.179-.356-40.318,2.016-13.852,2.5-37.73,6.852-53.421,4.034-10.708-1.924-25.775-5.438-39.311-3.025-15.29,2.725-36.86,5.655-55.437,2.016-11.172-2.188-24.2-9.971-38.3-7.058L131.7,193.58l-33.262-1.008C73.759,197.8,30.716,207.2,15.781,184.505c-5.6-8.5-14.266-22.735-11.088-38.316,1.365-6.689,6.239-14.694,4.032-24.2A88.019,88.019,0,0,1,7.717,84.682c3.741-19.37-8.515-52.634,0-67.557C16.985-6.741,58.719,12.815,81.3,2Z" />
                <path id="button2" style={{ visibility: 'hidden' }} className="email__button--visible" d="M66.978,6.752C102.19,6.534,141.192-.767,169.914,4.7c16.716,3.18,29.2.489,66.909,3.082,6.61,0.455,17.157-5.822,36.027-4.11,24.438,0.107,104.591-6.533,103.505,5.995-1.937,22.354.134,51.5,2.519,71.064,4.363,35.786,11.126,52.8,12.352,88.361-1.925,10.857-13.382,2.4-20.587,9.247-12.351,0-13.383,11.3-25.734,11.3-12.6,2.414-18.988-5.248-33.969-7.192-11.665-1.712-27.45,1.712-39.115,0-21.845-.39-46.03,12.927-70,8.22-10.978-3.082-37.4,5.137-48.38,2.055-13.3-2.532-72.386,3.844-83.378,2.055-36.557-5.951-24.969-3.07-54.556-17.467C9.072,157.848.867,153.319,2.129,129.019c0.482-9.293,6.421-21.005,5.147-27.741-3-15.884,4.988-21.507,2.059-36.989C5.762,45.409-1.8,23.157,10.364,9.834,16.764,3.829,52,16.367,66.978,6.752Z" />
            </svg>
            {/* <svg fill='#111' xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200">
                <path id="button-hidden_1" data-name="button-hidden 1" class="cls-1" d="M81.3,2c33.466-.191,59.84,1.733,89.709,7.058C196.3,13.567,213.862.793,237.531,5.025c21.3,3.808,47.417,6.154,70.556,2.017h20.16c17.143-4.247,45.675-9.775,56.445,6.05,15.067,22.14-6.516,63.753,2.016,93.774,5.019,17.662,15.724,50.889,4.032,68.566L373.6,191.564c-10.149,5.094-27.179-.356-40.318,2.016-13.852,2.5-37.73,6.852-53.421,4.034-10.708-1.924-25.775-5.438-39.311-3.025-15.29,2.725-36.86,5.655-55.437,2.016-11.172-2.188-24.2-9.971-38.3-7.058L131.7,193.58l-33.262-1.008C73.759,197.8,30.716,207.2,15.781,184.505c-5.6-8.5-14.266-22.735-11.088-38.316,1.365-6.689,6.239-14.694,4.032-24.2A88.019,88.019,0,0,1,7.717,84.682c3.741-19.37-8.515-52.634,0-67.557C16.985-6.741,58.719,12.815,81.3,2Z" />
            </svg> */}
            <span className='email__default-msg text text--white text--bold'>{contactText}</span>
        </div>
    )
}

export default Email