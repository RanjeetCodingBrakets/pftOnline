import React, { useState } from 'react';
import './Question.css';
import images from '../../constants/images';

const QuestionData = [
  {
    id: 1,
    question: 'Lorem ipsum is placeholder text commonly',
    answer: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
  {
    id: 2,
    question: 'Lorem ipsum is placeholder text commonly',
    answer: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
  {
    id: 3,
    question: 'Lorem ipsum is placeholder text commonly',
    answer: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
  {
    id: 4,
    question: 'Lorem ipsum is placeholder text commonly',
    answer: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
  {
    id: 5,
    question: 'Lorem ipsum is placeholder text commonly',
    answer: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='img_box position-relative '>
      <img src={images.leaf2} alt='' className='img_leaf2 position-absolute' />
      <img src={images.leaf1} alt='' className='img_leaf1 position-absolute' />
      <img src={images.oil} alt='' className='img_oil position-absolute' />
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-10 mx-auto'>
            <h2 className='text-center question-head'>Frequently Asked Questions</h2>
            <div className='accordion question_box'>
              {QuestionData.map((item, index) => (
                <div className='accordion-item  mb-3' key={item.id}>
                  <h2 className='accordion-header'>
                    <button 
                      className={`accordion-button fs-5  ${activeIndex === index ? '' : 'collapsed'}`}
                      type='button'
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                    <div className='accordion-body'>
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
