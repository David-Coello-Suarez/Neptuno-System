import { useState } from 'react'
import * as info from '../../package.json'

const Footer = () => {
  const [yearDate] = useState(new Date().getFullYear())

  return (
    <footer className="main-footer">
      <div className="pull-right hidden-xs">
        <b>Ver.:</b> {info.version}
      </div>
      <strong>
        Copyright © 2024-{yearDate} <a href="https://adminlte.io">Almsaeed Studio</a>.
      </strong>{' '}
      All rights reserved.
    </footer>
  )
}

export default Footer
