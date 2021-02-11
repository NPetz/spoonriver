/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, useState } from "react"



function LikeBtn(props) {

    const [isFav, setFav] = useState(props.isFav === 'true')

    useEffect(() => {
        window.localStorage.setItem(`${props.index}`, JSON.stringify(isFav))
    })



    let style = {
        height: ['42px', '42px', '50px',],
        width: ['42px', '42px', '50px',],
        flexShrink: 0,
        boxShadow: "shallowshade",
        backgroundColor: (isFav) ? "like" : "background",
        cursor: 'pointer',
        transition: 'all 0.2s',
        ':hover': {
            filter: 'drop-shadow(0px 0px 10px #e86252);',
        }
    }

    return (
        <div className='like' sx={style} onClick={() => { setFav(!isFav) }}></div>
    )

}

export default LikeBtn