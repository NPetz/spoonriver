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
                <h1>{poem.title}</h1>
                {poem.text.split(/\n+/).map((verse, i) => (


                    <p key={i}>{verse}</p>


                ))
                }

            </article>
        </main>
    )
}