import React from 'react'

const Fitness = () => {
  const fitness = [
    {
      Id: 1,
      img: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      h2: "Sweat now shine later",
      p: `Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan.`,
      h3: 'Fitness ',
      span: 'Janvary 24,2022'
    },
    {
      Id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdf6g7uniI6jBGZblgSvfdGwaNqwS6U53w&usqp=CAU',
      h2: 'Balance',
      p: `Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan.`,
      h3: 'Fitness ',
      span: 'February 24, 2022'
    },
    {
      Id: 3,
      img: 'https://s3.envato.com/files/326194671/DSC_4013.jpg',
      h2: 'Aerobic',
      p: `Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan.`,
      h3: 'Fitness',
      span: 'Janvary 2,2022'
    },
    {
      Id: 4,
      img: 'https://image.shutterstock.com/image-photo/woman-exercise-workout-gym-fitness-260nw-749969473.jpg',
      h2: 'Sprint',
      p: 'Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan.',
      h3: 'Fitness ',
      span: 'March 14,2022'
    },
    {
      Id: 5,
      img: 'https://fitnessone.in/img/gallery/about.png',
      h2: 'Flexibility',
      p: `Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan.`,
      h3: 'Fitness ',
      span: 'Februry 24,2022'
    },
  ];
  return (
    <>
      <div style={{ fontSize: '40px', margin: '20px' }}><u>Fitness</u></div>

      {fitness.map((e) =>
        <>
          <h2 className='heading-h2' style={{ cursor: 'pointer' }}>{e.h2}</h2>

          <img src={e.img} alt='image not found' className='img' style={{ cursor: 'pointer' }} />

          <div className='container'>

            <p className='para'>{e.p}</p>
            <h3 className='heading-h3'>{e.h3}/<span>{e.span}</span></h3>

          </div>
          <hr />
        </>
      )}




    </>
  )
}

export default Fitness