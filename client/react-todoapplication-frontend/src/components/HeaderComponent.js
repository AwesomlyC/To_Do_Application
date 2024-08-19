import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className='container'>
                    <div className="d-flex justify-content-between w-100">
                        <a className="navbar-brand" href="/">Home Page</a>
                        <div className="navbar-brand text-center flex-grow-1">
                            <span className="navbar-brand" style={{color:`white`}}>WhatsOnTheList</span>
                        </div>
                        <a className="navbar-brand" href="/about">About</a>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}
export default HeaderComponent