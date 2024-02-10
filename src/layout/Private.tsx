import { Outlet } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from '../utils'

const Private = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <h1>Roles</h1>
        </section>
        <section className="content">
          <Outlet />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Private
