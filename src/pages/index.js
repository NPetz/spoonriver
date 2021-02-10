/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { useEffect } from 'react'

import LikeBtn from "../components/LikeBtn"




// markup
const IndexPage = ({ data }) => {


  let lastpoem = ''

  useEffect(() => {

    lastpoem = window.localStorage.getItem('lastpoem')
    let el = window.document.getElementById(`${lastpoem}`)
    let title = document.getElementById("title")
    title.addEventListener('click', () => {
      el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
    })

  });





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
          boxShadow: "shallowshade",
          width: ['90vw', '90vw', '46rem',],
          backgroundColor: "bookmark",
          textAlign: 'center',
          color: "background",
          fontSize: ['1rem', '1.5rem', '2rem'],
          zIndex: '1',
          cursor: 'pointer',
        }}>
        <h1>The Spoon River Anthology</h1>
      </div>




      {data.allSpoonRiverJson.edges.map(edge => (


        <div key={edge.node.order.toString()}
          sx={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '1rem',
            alignItems: 'center',
            width: ['90vw', '90vw', '50rem',],
          }}
        >

          <LikeBtn></LikeBtn>


          <div


            id={edge.node.order.toString()}

            sx={{
              borderRadius: "10px",
              boxShadow: "shallowshade",
              width: ['90vw', '46rem', '46rem',],
              fontSize: ['0.3rem', '0.5rem', '0.8rem',],
              backgroundColor: (lastpoem === edge.node.order.toString()) ? "bookmark" : "background",
              color: (lastpoem === edge.node.order.toString()) ? "background" : "primary",
              transition: 'all 0.2s',
              ':hover': {
                backgroundColor: "primary",
                color: 'background',
              }
            }}>



            <a sx={{
              display: 'flex',
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '2em',
              transition: 'all 0.2s',
              ":hover": {
                color: 'inherit',
              }
            }}
              href={`/${edge.node.slug}`}>

              <h2
                sx={{
                  padding: "1rem 2rem",
                  margin: "0",
                }}
              >{edge.node.title}</h2>

              <span sx={{
                padding: "0rem 2rem",
                marginLeft: 'auto',
                textAlign: 'center',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 'bold'
              }}>
                {edge.node.order}
              </span>


            </a>

          </div>
        </div>



      ))}

    </main >
  )



}

export default IndexPage

export const query = graphql`
  {
    allSpoonRiverJson {
      edges {
        node {
          title
          order
          slug
        }
      }
    }
  }
`