import React from 'react'

const Food = ({ props }) => {
  const food = [
    {
      Id: 1,
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-chicken-tikka-masala-jpg-1526059261.jpg',
      h2: "Chiken Tikka Masala",
      p: `Chicken tikka masala is a dish consisting of roasted marinated chicken chunks in spiced curry sauce. The curry is usually creamy and orange-coloured. The dish was popularized by cooks from the Indian subcontinent living in Great Britain and is offered at restaurants around the world.`,
      h3: 'Food ',
      span: 'Janvary 24,2022'
    },
    {
      Id: 2,
      img: 'https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg',
      h2: 'Pneer Tikka',
      p: `Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora.`,
      h3: 'Food ',
      span: 'February 24, 2022'
    },
    {
      Id: 3,
      img: 'https://i0.wp.com/cdn.whatsuplife.in/kolkata/blog/2019/11/6ballygunge.jpg',
      h2: 'Maach Bhaat',
      p: `Think Bengali cuisine and the first thing that comes to mind is maach bhaat or roshogolla and mishti doi. It’s sad how Bengali cuisine has been stereotyped to be just that. In reality, there’s so much more. It’s about time we bust the myths and let the world know that it’s not as fishy and sugary as one thinks.`,
      h3: 'Food',
      span: 'Janvary 2,2022'
    },
    {
      Id: 4,
      img: 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg',
      h2: 'Masala Dosa',
      p: 'Masala dosa is a variation of the popular South Indian dosa, which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar. ',
      h3: 'Food ',
      span: 'March 14,2022'
    },
    {
      Id: 5,
      img: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Malai-Kofta-Recipe.jpg",
      h2: 'Malai Kofta',
      p: `Kofta is a Middle Eastern dish made from ground lamb or beef mixed with onions, garlic, and spices. The meat mixture is shaped into balls, patties or logs, and then grilled and served with pita, salads, dips, and sauces.`,
      h3: 'Food ',
      span: 'Februry 24,2022'
    },
  ];

  return (
    <>
      <div style={{ fontSize: '40px', margin: '20px' }}><u>Food</u></div>

      {food.map((e) =>
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

export default Food