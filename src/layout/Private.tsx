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
          <h1>Hello World!</h1>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Private
