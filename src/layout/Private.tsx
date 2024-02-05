import { Footer, Navbar, Sidebar } from '../utils'

const Private = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content">
          <h1>Hello World!</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Private
