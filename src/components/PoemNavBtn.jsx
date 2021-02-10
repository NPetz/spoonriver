/** @jsx jsx */
import { jsx } from "theme-ui"


function PoemNavBtn({ children, path }) {

    return (
        <a
            sx={{
                display: 'block',
                width: '100%',
                borderRadius: "1rem",
                boxShadow: "shallowshade",
                backgroundColor: "background",
                textAlign: 'center',
                color: "primary",
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                padding: '1rem',
                textDecoration: 'none',
                transition: 'all 0.2s',
                ":hover": {
                    color: 'background',
                    backgroundColor: 'primary',
                }

            }}

            href={path}
        >

            {children}

        </a>
    )

}

export default PoemNavBtn