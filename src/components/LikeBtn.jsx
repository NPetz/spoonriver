/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, useState } from "react"



function LikeBtn(props) {



    const [isFav, setFav] = useState(props.favs[props.index])

    useEffect(() => {

        try {
            let o = window.localStorage.getItem('favs')
            if (o) {
                console.log('send info from button')
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
        height: ['42px', '42px', '50px',],
        width: ['42px', '42px', '50px',],
        flexShrink: 0,
        boxShadow: "shallowshade",
        backgroundColor: (isFav === 'true') ? "like" : "background",
        cursor: 'pointer',
        transition: 'all 0.2s',
        position: 'relative',
        ':hover': {
            boxShadow: "glow",
            transform: 'scale(0.98)'
        }
    }

    return (
        <div className='like' sx={style} onClick={() => { setFav((isFav === 'true') ? 'false' : 'true') }}></div>
    )

}

export default LikeBtn