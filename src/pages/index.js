/** @jsx jsx */
import { jsx } from "theme-ui"

import data from "../../data/spoonRiver.json"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

// logic




// markup
const IndexPage = () => {


  return (
    <main sx={{
      display: "flex",
      flexDirection: 'column',
      gap: '3rem',
      padding: "2rem",
      alignItems: 'center',
    }}>

      <title>The Spoon River Anthology</title>

      <div id='title'
        sx={{
          borderRadius: "10px",
          boxShadow: " 3px 3px 30px #131711, -3px -3px 30px #F4F6F3",
          width: ['90vw', '46rem', '46rem',],
          backgroundColor: "#F4F6F3",
          textAlign: 'center',
          color: "background",
          caretColor: "#262626",
          textShadow: "1px 1px 10px #131711, -1px -1px 10px #F4F6F3",
          fontSize: '2rem',
          zIndex: '1',
        }}>
        <h1>The Spoon River Anthology</h1>
        <div id="btn">⇩⇩⇩</div>

      </div>




      {data.map(poem => (


        <div key={poem.order.toString()}
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '1rem',
            alignItems: 'center',
          }}
        >

          <div className='like' sx={{
            width: '4rem',
            height: '4rem',
            borderRadius: '1rem',
            boxShadow: "1px 1px 10px #131711, -1px -1px 10px #F4F6F3",
            ':hover': {
              backgroundColor: 'accent'
            }
          }}></div>
          <div

            id={poem.order.toString()}
            sx={{
              borderRadius: "10px",
              boxShadow: "1px 1px 10px #131711, -1px -1px 10px #F4F6F3",
              width: ['90vw', '46rem', '46rem',],
              backgroundColor: "background",
              color: 'background',
              caretColor: "#262626",
              textShadow: "0.5px 0.5px 5px #131711, -0.5px -0.5px 5px #F4F6F3",
            }}>



            <a sx={{
              display: 'flex',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'color 0.3s',
              ":hover": {
                color: '#F4F6F3',
              }
            }}
              href={`/${poem.slug}`}>

              <h2
                sx={{
                  padding: "1rem 2rem",
                  margin: "0",
                }}
              >{poem.title}</h2>
              <span sx={{
                padding: "0rem 2rem",
                marginLeft: 'auto',
                textAlign: 'center',
                display: 'grid',
                placeItems: 'center',
                fontSize: '2em',
                fontWeight: 'bold'
              }}>{poem.order}</span>


            </a>

          </div>
        </div>



      ))}

      <script>

        {


          window.addEventListener('pageshow', () => {

            let lastpoem = window.localStorage.getItem('lastpoem')


            if (lastpoem) {

              let el = document.getElementById(`${lastpoem}`)
              el.style.backgroundColor = 'whitesmoke'

              let btn = document.getElementById("btn")
              btn.addEventListener('click', () => {
                el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
              })

            }
          })
        }


      </script>
    </main >
  )
}

export default IndexPage
