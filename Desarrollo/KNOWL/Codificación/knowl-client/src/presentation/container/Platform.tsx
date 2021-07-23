import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import LateralPanel from '../component/LateralPanel'
import Dashboard from '../component/Dashboard'
import Info from '../component/Info'
import Experience from '../component/Experience'
import Knowledge from '../component/Knowledge'
import LoginPage from '../../infrastructure/user/auth/login/LoginPage'


const Platform = () => {
    return (
        <div>
            <Header />
            <LateralPanel />
            <Dashboard />
            <Info />
        </div>
    )
}

export default Platform
