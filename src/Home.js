import { Divider, List, ListItem, ListItemText } from "@mui/material"

import "./Home.css"
import "bootstrap/dist/css/bootstrap.css"

const Home = () => {

    return (
    <>
    <div className="home_container">
        <div className="left_content">
                   
            <List>
          <ListItem disablePadding>
            <ListItemText primary={"Library"}/>
              </ListItem>

              <ListItem disablePadding>
            <ListItemText primary={"Library"}/>
              </ListItem>
              
                     </List>
                     <Divider/>
                     
          
        </div>
        <div className="right_content">
          <h2>Hi</h2>
        </div>
    </div>
    
          
     
    </> 

  )
}

export default Home
