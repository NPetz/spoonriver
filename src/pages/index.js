/** @jsx jsx */
import { jsx } from "theme-ui"

import data from "../../data/spoonRiver.json"


// markup
const IndexPage = () => {
  return (
    <main sx={{
      display: "flex",
      flexDirection: 'column',
      gap: '2rem',
      padding: "2rem",
      alignItems: 'center',
    }}>

      <title>The Spoon River Anthology</title>
      <div id='title'
        sx={{
          borderRadius: "10px",
          boxShadow: " rgba(0, 0, 0, 0.2) 0px 20px 30px",
          width: ['90vw', '46rem', '46rem',],
          backgroundColor: "#eee",
          textAlign: 'center',
          color: '#fafafa',
          caretColor: "#262626",
          textShadow: "5px 5px 11px rgba(0,0,0,0.2), -5px -5px 11px rgba(255,255,255,0.8)",
          fontSize: '2rem',
          zIndex: '1',
        }}>
        <h1>The Spoon River Anthology</h1>
      </div>
      {data.map(poem => (




        <div
          key={poem.order.toString()}
          sx={{
            borderRadius: "10px",
            boxShadow: " rgba(0, 0, 0, 0.2) 0px 20px 30px",
            width: ['90vw', '46rem', '46rem',],
            backgroundColor: "#eee",
            color: '#fafafa',
            caretColor: "#262626",
            textShadow: "3px 3px 15px rgba(0,0,0,0.2), -3px -3px 15px rgba(255,255,255,0.8)",
          }}>
          <a sx={{
            textDecoration: 'none',
            color: 'inherit',
            ":hover": {
              color: 'inherit',
            }
          }}
            href={`/${poem.slug}`}>
            <h2
              sx={{
                padding: "1rem 2rem",
                margin: "0",
              }}
            >{poem.title}</h2>
          </a>
        </div>



      ))
      }

    </main >
  )
}

export default IndexPage
