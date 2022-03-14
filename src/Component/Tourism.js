import React from 'react'
import { Link } from 'react-router-dom';

const Tourism = ({ props }) => {
  const tourism = [
    {
      Id: 1,
      img: 'https://images.moneycontrol.com/static-mcnews/2021/08/Kerala-toursim-770x433.jpg',
      h2: "Kerala: God's Own Country",
      p: `Kerala, a state situated on the tropical Malabar Coast of southwestern India,'is one of the most popular tourist destinations in the countryNamed as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters.`,
      h3: 'Tourism ',
      span: 'Janvary 24,2022'
    },
    {
      Id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPyRZHXLeXT6OxmDQdU2AtwWKGN_xHzf_IA&usqp=CAU',
      h2: 'Madhya Pradesh:The Heart of Incredible India',
      p: `Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.Begun in the 10th century, its Hindu and Jain temples at Khajuraho are renowned for theircarvings of erotic scenes, most prominently Kandariya Mahadeva,a temple with more than 800 sculptures.`,
      h3: 'Tourism ',
      span: 'February 24, 2022'
    },
    {
      Id: 3,
      img: 'https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2020/10/25/file77vf0pn8ouod3o2ghgf-906630-1603571712.jpg?itok=0QRkAjVH',
      h2: 'Karnataka: One state Many Worids',
      p: `Karnataka is a state in southwest India with Arabian Sea coastlines. The capital, Bengaluru (formerly Bangalore), is a high-tech hub known for its shopping and nightlife. To the southwest, Mysore is home to lavish temples including Mysore Palace, former seat of the region’s maharajas.`,
      h3: 'Tourism',
      span: 'Janvary 2,2022'
    },
    {
      Id: 4,
      img: 'https://media.easemytrip.com/media/Blog/India/637350613416802581/637350613416802581qElw1X.png',
      h2: 'Sikkim: Small But Beautiful',
      p: 'Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers.',
      h3: 'Tourism ',
      span: 'March 14,2022'
    },
    {
      Id: 5,
      img: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/07/amritsar-3083693_960_720.jpg",
      h2: 'Punjab: India Begin Here',
      p: `Punjab, a state bordering Pakistan, is the heart of India’s Sikh community. The city of Amritsar, founded in the 1570s by Sikh Guru Ram Das, is the site of Harmandir Sahib, the holiest gurdwara (Sikh place of worship). Known in English as the Golden Temple, and surrounded by the Pool of Nectar, it's a major pilgrimage site.`,
      h3: 'Tourism ',
      span: 'Februry 24,2022'
    },
  ];
  return (
    <>
      <div style={{ fontSize: '40px', margin: '20px' }}><u>Tourism</u></div>

      {tourism.map((e) =>
        <>
          <h2 className='heading-h2' style={{ cursor: 'pointer' }}>{e.h2}</h2>
          <Link to='/kerala'>
            <img src={e.img} alt='image not found' className='img' style={{ cursor: 'pointer' }} />
          </Link>
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

export default Tourism