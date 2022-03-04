import { Link } from 'react-router-dom'
import './Sidebar.css'
import updateSidebarOption from '../../store/sidebarMenu/action'
import { connect } from 'react-redux'
import { selectedSidebarOption } from '../../store/sidebarMenu/reducer'

const sidebarNavItems = [
    {
        display: 'Users',
        icon: <i className='bx bx-user-circle'></i>,
        to: '/users',
        section: 'users'
    },
]

const Sidebar = ({updateSidebarOption, sidebarOption}) => {

    return (
        <div className='sidebar__container'>
            <div>
                <img alt='friends' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/1024px-Friends_logo.svg.png' className='sidebar__logo'/>
            </div>
            <div className='sidebar__menu'>
                {sidebarNavItems.map( ( item, index ) => (
                    <Link to={item.to} key={index} onClick={() => updateSidebarOption(index)}>
                        <div className={`sidebar__menuItem ${sidebarOption === index ? 'sidebar__active': ''}`}>
                            <div className='sidebar__menuItemIcon'>
                                {item.icon}
                            </div>                        
                            <div className='sidebar__menuItemtext'>
                            {item.display}
                        </div>
                            </div>
                       
                    </Link>
                 ) )}
            </div>
        </div>
    )
}


const mapStateToProps = state =>{
    return{
        sidebarOption: selectedSidebarOption(state)
    }
}

export default connect(mapStateToProps, {updateSidebarOption})(Sidebar)