import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img
              src="https://avatars.githubusercontent.com/u/51972354?v=4"
              className="img-circle"
              alt="User Image"
            />
          </div>
          <div className="pull-left info">
            <p>Alexander Pierce</p>
            <a href="#">
              <i className="fa fa-circle text-success"></i> Online
            </a>
          </div>
        </div>
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">MAIN NAVIGATION</li>
          <li className="active">
            <Link to={'rolusu'}>
              <i className="fa fa-th" />
              <span>Roles</span>
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
