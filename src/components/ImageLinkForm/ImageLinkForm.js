import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div style={{ position: 'relative', zIndex: 1}}>
            <p className='f3-l f4 ph0-l ph4'>
                {'This Magic Brain will detect faces in your pictures.'}
            </p>
            <div className='center'>
                <div className='form pa4-l pa3 br3 shadow-5 w-40-l w-50 center'>
                    <input className='f4 br1 b--white pa2 w-70 center'
                        type='text'
                        onChange={onInputChange} />
                    <button className=
                        'f4-l f5 tc w-30 grow link br2 ph3-l ph2 pv2 white bg-light-red ba b--white'
                        onClick={onButtonSubmit}>
                        {'Detect'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;