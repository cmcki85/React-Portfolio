import React from 'react'

import Navbar from './nav-bar';
import Footer from './footer';

class Layout extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <main 
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0 1.0875rem 1.45rem`,
                    }}>
                    {this.props.children}
                </main>
                <Footer />
            </>
        )
    }
}

export default Layout;