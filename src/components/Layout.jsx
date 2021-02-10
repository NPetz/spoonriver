import React from "react"

function Layout({ children }) {
    return (
        <main style={{
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center'
        }}>
            {children}
        </main>
    )
}

export default Layout