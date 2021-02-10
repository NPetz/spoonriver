/** @jsx jsx */
import { jsx } from "theme-ui"


function LikeBtn() {

    return (
        <div className='like' sx={{
            width: ['3rem', '4rem', '5rem',],
            height: ['3rem', '4rem', '5rem',],
            minHeight: '3rem',
            minWidth: '3rem',
            borderRadius: '1rem',
            boxShadow: "shallowshade",
            cursor: 'pointer',
            transition: 'all 0.2s',
            ':hover': {
                backgroundColor: 'like'
            }
        }}></div>
    )

}

export default LikeBtn