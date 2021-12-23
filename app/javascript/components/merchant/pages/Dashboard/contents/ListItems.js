import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ListItemButton } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShopIcon from '@mui/icons-material/Shop';
import InventoryIcon from '@mui/icons-material/Inventory'; // product
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt'; // order
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo'; // advert
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // customer
import BarChartIcon from '@mui/icons-material/BarChart'; // report


export default function ListItems({
  setTitle
}) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const getIcon = (listTitle) => {
    switch (listTitle) {
      case "Dashboard":
        return <DashboardIcon />;
      case "Shops":
        return <ShopIcon />;
      case "Products":
        return <InventoryIcon />;
      case "Orders":
        return <SystemUpdateAltIcon />;
      case "Adverts":
        return <FeaturedVideoIcon />;
      case "Customers":
        return <AccountBoxIcon />;
      case "Reports":
        return <BarChartIcon />;
    }
  }

  const mainListObjects = [
    { title: "Dashboard", href: "/merchant" },
    { title: "Shops", href: "" },
    { title: "Products", href: "" },
    { title: "Orders", href: "" },
    { title: "Adverts", href: "" },
    { title: "Customers", href: "" },
    { title: "Reports", href: "" }
  ]

  // const handleListItemOnClick = useCallback(
  //   (index, title) => {
  //     setSelectedIndex(index);
  //     setTitle(title);
  //   },
  //   [selectedIndex],
  // )

  const handleListItemOnClick = (event, index, title) => {
    setSelectedIndex(index);
    setTitle(title);
  }

  console.log(selectedIndex);


  const mainListItems = (
    <div>
      {
        mainListObjects.map((mainListObject, index) => {
          return (
            <ListItemButton
              key={`mainListItem__${index}`}
              href={mainListObject.href}
              // selected={selectedIndex === index}
              onClick={(event) => handleListItemOnClick(event, index, mainListObject.title)}
            >
              <ListItemIcon>
                {getIcon(mainListObject.title)}
              </ListItemIcon>
              <ListItemText primary={mainListObject.title} />
            </ListItemButton>
          );
        })
      }
    </div>

    // <div>
    //   <ListItem button>
    //     <ListItemIcon>
    //       <DashboardIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Dashboard" />
    //   </ListItem>
    //   <ListItem button>
    //     <ListItemIcon>
    //       <ShoppingCartIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Orders" />
    //   </ListItem>
    //   <ListItem button>
    //     <ListItemIcon>
    //       <PeopleIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Customers" />
    //   </ListItem>
    //   <ListItem button>
    //     <ListItemIcon>
    //       <BarChartIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Reports" />
    //   </ListItem>
    //   <ListItem button>
    //     <ListItemIcon>
    //       <LayersIcon />
    //     </ListItemIcon>
    //     <ListItemText primary="Integrations" />
    //   </ListItem>
    // </div>
  );

  // const secondaryListItems = (
  //   <div>
  //     <ListSubheader inset>Saved reports</ListSubheader>
  //     <ListItem button>
  //       <ListItemIcon>
  //         <AssignmentIcon />
  //       </ListItemIcon>
  //       <ListItemText primary="Current month" />
  //     </ListItem>
  //     <ListItem button>
  //       <ListItemIcon>
  //         <AssignmentIcon />
  //       </ListItemIcon>
  //       <ListItemText primary="Last quarter" />
  //     </ListItem>
  //     <ListItem button>
  //       <ListItemIcon>
  //         <AssignmentIcon />
  //       </ListItemIcon>
  //       <ListItemText primary="Year-end sale" />
  //     </ListItem>
  //   </div>
  // );

  return (
    <div>
      <List>{mainListItems}</List>
      {/**
        <Divider />
        <List>{secondaryListItems}</List>
      */}

    </div>
  );

}

