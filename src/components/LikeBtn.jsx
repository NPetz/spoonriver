/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, useState } from "react"
import { Transform } from "stream"



function LikeBtn(props) {



    const [isFav, setFav] = useState(props.favs[props.index])

    useEffect(() => {

        try {
            let o = window.localStorage.getItem('favs')
            if (o) {
                o = JSON.parse(o)

                o[props.index] = isFav
                o = JSON.stringify(o)
                window.localStorage.setItem('favs', o)
            }
        } catch (error) {

            console.log(error);

        }

    }

    )


    let style = {
        height: ['36px', '42px', '50px',],
        width: ['36px', '42px', '50px',],
        flexShrink: 0,
        boxShadow: 'shallowshade',
        backgroundColor: "like",
        cursor: 'pointer',
        transition: 'all 0.2s',
        position: 'relative',
        zIndex: 2,
        opacity: (isFav === 'true') ? 1 : 0.3,
        ':hover': {
            opacity: (isFav === 'true') ? 0.2 : 1,
            transform: 'scale(1.1)',
        },

        ...props.style
    }

    return (
        <div className='like' sx={style} onClick={() => { setFav((isFav === 'true') ? 'false' : 'true') }
        }></div >
    )

}

export default LikeBtn