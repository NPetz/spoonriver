/** @jsx jsx */
import { jsx } from "theme-ui"


export default function Poem({ pageContext: { poem } }) {

    return (
        <main sx={{
            display: "flex",
            flexDirection: 'column',
            gap: '2rem',
            padding: "2rem",
            alignItems: 'center',
        }}>
            <article>
                <h1 sx={{
                    borderRadius: "10px",
                    boxShadow: "1px 1px 10px #131711, -1px -1px 10px #F4F6F3",
                    width: ['90vw', '46rem', '46rem',],
                    backgroundColor: "background",
                    textAlign: 'center',
                    color: "#F4F6F3",
                    caretColor: "#262626",
                    textShadow: "1px 1px 10px #131711, -1px -1px 10px #F4F6F3",
                    fontSize: '2rem',
                }}>
                    {poem.title}</h1>

                <p sx={{
                    borderRadius: "10px",
                    boxShadow: "1px 1px 10px #131711, -1px -1px 10px #F4F6F3",
                    width: ['90vw', '46rem', '46rem',],
                    backgroundColor: "background",
                    caretColor: "#262626",
                    padding: '2rem 4rem',
                    whiteSpace: 'pre',
                }}>{poem.text}</p>

                {/* {poem.text.split('\n').map((verse, i) => (

                    (verse === '') ? <br key={i}/> :  <p sx={{
                        lineHeight: '2em',
                        margin: '0',
                        padding: '0',
                        wordSpacing: 'auto',
                        whiteSpace: 'pre',
                    }} key={i}>{verse}</p>

                ))
                } */}

            </article>
        </main>
    )
}