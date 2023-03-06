import React, {useContext} from 'react'
import './index.css'
import { AppContext } from '../../context/app_context'

const LogOut = () => {

    const { user, setUser } = useContext(AppContext);

    const handleLogout = () => {
        setUser('');
    }

  return (
    <div className='user-logout'>
        <div className='user'>
            {user.name || "Guest"}
        </div>
        <button className="btn-sm" onClick={handleLogout}>
            LOG OUT
        </button>
    </div>
  )
}

export default LogOut
