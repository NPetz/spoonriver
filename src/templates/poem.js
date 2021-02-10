/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/Layout"
import PoemNavBtn from "../components/PoemNavBtn"

export default function Poem({ pageContext: { edge } }) {

    let poem = edge.node
    let nextPoem = edge.next
    let previousPoem = edge.previous



    return (
        <Layout>
            <div sx={{
                display: "flex",
                flexDirection: 'column',
                gap: '2rem',
                padding: "2rem",
                alignItems: 'center',
            }}>
                <article>
                    <h1 sx={{
                        borderRadius: "10px",
                        boxShadow: "shallowshade",
                        width: ['90vw', '46rem', '46rem',],
                        textAlign: 'center',
                        color: 'background',
                        backgroundColor: 'primary',
                        fontSize: '2rem',
                    }}>
                        {poem.title}</h1>

                    <p sx={{
                        textAlign: 'center',
                        borderRadius: "10px",
                        boxShadow: "shallowshade",
                        width: ['90vw', '46rem', '46rem',],
                        backgroundColor: "background",
                        padding: '2rem 4rem',
                        whiteSpace: 'pre',
                        color: 'text',
                        fontSize: '1rem',
                        fontSmooth: 'true',
                        margin: '0',
                        lineHeight: '1.5rem'
                    }}>{poem.text}</p>



                </article>


                <div
                    sx={{
                        display: 'flex',
                        justifyContent: 'stretch',
                        gap: '2rem',
                        width: ['90vw', '46rem', '46rem',],
                    }}
                >

                    {previousPoem &&
                        <PoemNavBtn path={`/${previousPoem.slug}`} >Previous</PoemNavBtn>
                    }

                    <PoemNavBtn path="/" >Home</PoemNavBtn>

                    {nextPoem &&
                        <PoemNavBtn path={`/${nextPoem.slug}`} >Next</PoemNavBtn>

                    }

                </div>

                <script>{window.addEventListener('visibilitychange', () => {

                    window.localStorage.setItem('lastpoem', `${poem.order}`);

                })}
                </script>
            </div>
        </Layout >

    )
}