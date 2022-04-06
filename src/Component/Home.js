import React from 'react'

const demo = {
  textAlign: 'center',
  // marginTop:'400px',
  paddingTop: '300px',
  color: 'white',
}

const Home = () => {
  const latest = [{ Id: 1, img: 'https://s3.envato.com/files/326194671/DSC_4013.jpg', h2: 'Aerobic', p: `Physical fitness is a state of health and well-being and, more specifically, the ability to perform aspects of sports, occupations and daily activities. Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest along with a formal recovery plan.`, h3: 'Fitness', span: 'Janvary 2,2022' },
  { Id: 2, img: 'https://images.news18.com/ibnlive/uploads/2021/07/1625839961_farhan-akhtar.jpg?impolicy=website&width=510&height=356', h2: 'Farhan Aktar in Toofan', p: `Toofaan is a 2021 Indian Hindi-language sports drama film directed and produced by Rakeysh Omprakash Mehra, produced by Ritesh Sidhwani under Excel Entertainment and ROMP Pictures and starring producer Farhan Akhtar as a national level boxer alongside Mrunal Thakur and Paresh Rawal in the lead roles.`, h3: 'Bollywood', span: 'Janvary 2,2022' },
  { Id: 3, img: 'https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg', h2: 'Pneer Tikka', p: `Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora.`, h3: 'Food ', span: 'February 24, 2022' },]

  const article = [{ Id: 4, img: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/07/amritsar-3083693_960_720.jpg", h2: 'Punjab: India Begin Here', p: `Punjab, a state bordering Pakistan, is the heart of India’s Sikh community. The city of Amritsar, founded in the 1570s by Sikh Guru Ram Das, is the site of Harmandir Sahib, the holiest gurdwara (Sikh place of worship). Known in English as the Golden Temple, and surrounded by the Pool of Nectar, it's a major pilgrimage site.`, h3: 'Tourism ', span: 'Februry 24,2022' },
  { Id: 5, img: "https://cf-assets.www.cloudflare.com/slt3lc6tev37/5UFGteYwYTmakGi1m4hh10/68451375d91f71ce26ebbe4bb8051f04/cryptographic-key.png", h2: 'Cryptography', p: `Cryptography, or cryptology, is the practice and study of techniques for secure communication in the presence of adversarial behavior.`, h3: 'Technology ', span: 'Februry 24,2022' },
  { Id: 6, img: "https://m.media-amazon.com/images/M/MV5BZmM4ZGNmZTgtNDllNi00MzUxLTg5NjQtZjdmMDEyMWVlY2E4XkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg", h2: 'Parineeti Chopra in saina', p: `Saina Nehwal, a badminton enthusiast, considers pursuing the sport full-time. When she starts training under an efficient coach, she soon becomes the best and ranks number one in the sport.`, h3: 'Bollywood ', span: 'Februry 24,2022' },
  { Id: 7, img: "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Malai-Kofta-Recipe.jpg", h2: 'Malai Kofta', p: `Kofta is a Middle Eastern dish made from ground lamb or beef mixed with onions, garlic, and spices. The meat mixture is shaped into balls, patties or logs, and then grilled and served with pita, salads, dips, and sauces.`, h3: 'Food ', span: 'Februry 24,2022' }]

  const side = [{ Id: 8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPyRZHXLeXT6OxmDQdU2AtwWKGN_xHzf_IA&usqp=CAU', h2: 'Madhya Pradesh:The Heart of Incredible India', h3: 'Tourism ', span: 'February 24, 2022' },
  { Id: 9, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrdf6g7uniI6jBGZblgSvfdGwaNqwS6U53w&usqp=CAU', h2: 'Balance', h3: 'Fitness ', span: 'February 24, 2022' },
  { Id: 10, img: 'https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg', h2: 'Blockchain', h3: 'Technology ', span: 'February 24, 2022' },
  { Id: 11, img: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Antim-_The_Final_Truth.jpg', h2: 'Aayush Sharma in Antim:The Final Truth', h3: 'Bollywood ', span: 'February 24, 2022' },
  { Id: 12, img: 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg', h2: 'Masala Dosa', h3: 'Food ', span: 'March 14,2022' }]
  return (
    <>
      <div className='image1' >
        <div style={demo}>
          <h1 style={{ textDecoration: 'none', padding: '10px' }}>Kerala:God's Own Country</h1>
          <h3>Tourism / January 24, 2022</h3>
        </div>
      </div>
      <div className='side-img1'></div>
      <div className='side-img2'></div>


      {/* The latest blog */}

      <h1 style={{ marginLeft: '30px', padding: '20px' }}>The Latest</h1>
      <div className='top-post'>
        {
          latest.map((e) =>
            <>
              <div className='top'>
                <img src={e.img} className='top1' alt={e.h2} />
                <hr />
                <h2 >{e.h2}</h2>
                <p className='top-para'>{e.p}</p>
                <h3>{e.h3} / <span>{e.span}</span></h3>

              </div>
            </>)
        }
      </div>

      {/* Artical blog*/}


      <h1 style={{ marginLeft: '30px', padding: '20px' }}>Article</h1>
      <div className='article'>
        {
          article.map((e) =>
            <>
              <div className='article1'>
                <img src={e.img} alt={e.h2} className='article-img' />
                <h2 className='article-h2'>{e.h2}</h2>
                <p className='article-para'>{e.p}</p>
                <h3 className='article-h3'>{e.h3}/ <span>{e.span}</span></h3>
              </div>
            </>)
        }

        {/* sidebar */}

        <div className='homeside-bar'>
          <h1 style={{ padding: '20px' }}>Top Post</h1>
          {
            side.map((e) =>
              <>
                <div className='homesidebar1'>
                  <img src={e.img} className='homesidebar-img' alt={e.h2} />
                  <h2 className='homesidebar-h2'>{e.h2}</h2>
                  <h3 className='homesidebar-h3'>{e.h3}/ <span>{e.span}</span></h3>
                </div>
                <hr />
              </>)
          }
        </div>

        {/* Advertitisement */}
        <div className='add'>
          <h2>Advertisement</h2>
        </div>

      </div>
    </>
  )
}

export default Home