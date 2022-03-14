import React from 'react'

const Technology = () => {
  const technology = [
    {
      Id: 1,
      img: 'https://imageio.forbes.com/specials-images/imageserve/60269ef7ada7085ce688069b/Cyber-Security-and-Digital-Data-Protection-Concept/960x0.jpg?fit=bounds&format=jpg&width=960',
      h2: "Cyber Security:Prevention is better than cure",
      p: `Computer security, cybersecurity, or information technology security is the protection of computer systems and networks from information disclosure, theft of or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide.`,
      h3: 'Technology ',
      span: 'Janvary 24,2022'
    },
    {
      Id: 2,
      img: 'https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg',
      h2: 'Blockchain',
      p: `A blockchain game is a video game that includes elements that use cryptography-based blockchain technologies.`,
      h3: 'Technology ',
      span: 'February 24, 2022'
    },
    {
      Id: 3,
      img: 'https://images.idgesg.net/images/article/2017/05/artificial_intelligence_machine_learning_network_thinkstock_671750598-100724432-large.jpg?auto=webp&quality=85,70',
      h2: 'Artifical inteligent (AI) & Machine Learning ',
      p: `Artificial intelligence and machine learning are the part of computer science that are correlated with each other. These two technologies are the most trending technologies which are used for creating intelligent systems.
      Although these are two related technologies and sometimes people use them as a synonym for each other, but still both are the two different terms in various cases.`,
      h3: 'Technology',
      span: 'September 31,2022'
    },
    {
      Id: 4,
      img: 'https://www.control4.com/files/large/b9d80879aba75c9',
      h2: 'Internet of Thing (IOT)',
      p: 'The Internet of things describes physical objects that are embedded with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks.',
      h3: 'Technology ',
      span: 'March 14,2022'
    },
    {
      Id: 5,
      img: "https://cf-assets.www.cloudflare.com/slt3lc6tev37/5UFGteYwYTmakGi1m4hh10/68451375d91f71ce26ebbe4bb8051f04/cryptographic-key.png",
      h2: 'Cryptography',
      p: `Cryptography, or cryptology, is the practice and study of techniques for secure communication in the presence of adversarial behavior.`,
      h3: 'Technology ',
      span: 'Februry 24,2022'
    },
  ];
  return (
    <>
      <div style={{ fontSize: '40px', margin: '20px' }}><u>Technology</u></div>
      {technology.map((e) =>
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

export default Technology