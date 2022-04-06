import React from 'react'

const Bollywood = () => {

  const bollywood = [
    { Id: 1, img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Attack_film_poster.jpg/220px-Attack_film_poster.jpg', h2: "John Abraham in Attack", p: `John Abraham is an Indian actor, film producer and former model who appears in Hindi films. After modelling for numerous advertisements and companies, he made his film debut with Jism, earning a Filmfare Award for Best Male Debut nomination.`, h3: 'Bollywood ', span: 'Janvary 24,2022' },
    { Id: 2, img: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Antim-_The_Final_Truth.jpg', h2: 'Aayush Sharma in Antim:The Final Truth', p: `A man from humble origins works his way up to an influential position within organised crime. Nothing seems able to stop him until he runs into a police officer who takes his job to uphold justice very seriously.`, h3: 'Bollywood ', span: 'February 24, 2022' },
    { Id: 3, img: 'https://images.news18.com/ibnlive/uploads/2021/07/1625839961_farhan-akhtar.jpg?impolicy=website&width=510&height=356', h2: 'Farhan Aktar in Toofan', p: `Toofaan is a 2021 Indian Hindi-language sports drama film directed and produced by Rakeysh Omprakash Mehra, produced by Ritesh Sidhwani under Excel Entertainment and ROMP Pictures and starring producer Farhan Akhtar as a national level boxer alongside Mrunal Thakur and Paresh Rawal in the lead roles.`, h3: 'Bollywood', span: 'Janvary 2,2022' },
    { Id: 4, img: 'https://cdn.gulte.com/wp-content/uploads/2021/12/Review1.jpg', h2: 'Allu Arjun in Pushpa:The Rise', p: 'Allu Arjun is an Indian actor who predominantly works in Telugu films. He is one of the highest paid actors in South India and known for his dancing abilities, Allu is a recipient of several awards, including five Filmfare Awards South and five Nandi Awards.', h3: 'Bollywood ', span: 'March 14,2022' },
    { Id: 5, img: "https://m.media-amazon.com/images/M/MV5BZmM4ZGNmZTgtNDllNi00MzUxLTg5NjQtZjdmMDEyMWVlY2E4XkEyXkFqcGdeQXNuZXNodQ@@._V1_.jpg", h2: 'Parineeti Chopra in saina', p: `Saina Nehwal, a badminton enthusiast, considers pursuing the sport full-time. When she starts training under an efficient coach, she soon becomes the best and ranks number one in the sport.`, h3: 'Bollywood ', span: 'Februry 24,2022' }];
  return (
    <>
      <h1 style={{ marginLeft: '30px', padding: '20px' }}>Bollywood</h1>
      <div className='tourism'>
        {
          bollywood.map((e) =>
            <>
              <div className='tourism1'>
                <img src={e.img} alt={e.h2} className='tourism-img' />
                <h2 className='tourism-h2'>{e.h2}</h2>
                <p className='article-para' style={{ marginLeft: '380px', padding: '10px' }}>{e.p}</p>
                <h3 className='tourism-h3'>{e.h3}/ <span>{e.span}</span></h3>
              </div>

            </>)
        }
        {/* sidebar */}
        <div className='side-bar'>
          <h1 style={{ padding: '20px' }}>Top Post</h1>
          {
            bollywood.map((e) =>
              <>
                <div className='sidebar1'>
                  <img src={e.img} alt={e.h2} className='sidebar-img' />
                  <h2 className='sidebar-h2'>{e.h2}</h2>
                  <h3 className='sidebar-h3'>{e.h3}/ <span>{e.span}</span></h3>
                </div>
                <hr />
              </>)
          }
        </div>


        {/* Advertitisement */}
        <div className='add'>
          <h2>Advertisement</h2>
        </div>
      </div></>
  )
}

export default Bollywood