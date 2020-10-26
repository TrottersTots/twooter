import React, {useState} from "react";
import '../styles/Sidebar.css'
import SidebarOption from './SidebarOption';
import TwootModal from './TwootModal';
import UserProfile from "./UserProfile";
import { Button } from "@material-ui/core";
import {BrowserRouter as Router, Link} from "react-router-dom";
// Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// - - -


function Sidebar({logged_in, history}) {

    const [show_makeTwoot, setMakeTwoot] = useState(false);

    return (
      <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />
            <Router>
              <Link to='/' onClick={() => {
                  history.push('/');
              }}>
                <SidebarOption active Icon={HomeIcon} text="Home" />
              </Link>
              <Link to='/explore' onClick={() => {
                  history.push('/explore');
              }}>
                <SidebarOption Icon={SearchIcon} text="Explore" />
              </Link>

              {logged_in ? (
                  <>
                  
                  <Link to="/notifications"onClick={() => {
                  history.push('/notifications');
              }}>
                    <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
                  </Link>
                  <Link to='/messages'onClick={() => {
                  history.push('/messages');
              }}>
                    <SidebarOption Icon={MailOutlineIcon} text="Messages" />
                  </Link>
                  <Link to='/more'onClick={() => {
                  history.push('/more');
              }}>
                    <SidebarOption Icon={MoreHorizIcon} text="More" />
                  </Link>

                  <Button 
                    variant="outlined" 
                    className="sidebar__tweet" 
                    fullWidth
                    onClick= {() => setMakeTwoot(true)}>
                      Twoot
                  </Button>
                  <TwootModal 
                    show_makeTwoot={show_makeTwoot}
                    setMakeTwoot={setMakeTwoot}
                  />
                  
                  <UserProfile 
                    displayName='Justin Stitt'
                    userName='Justin_Stitt'
                    verified={true}/>

                </>)
              :('')}
            </Router>
      </div>
    );
}
Sidebar.defaultProps = {
  logged_in : false
}
export default Sidebar;
