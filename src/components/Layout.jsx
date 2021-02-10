import React from "react"

function Layout({ children }) {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
            {children}
        </div>
    )
}

export default Layout