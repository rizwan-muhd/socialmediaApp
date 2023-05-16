import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import AddIcon from '@mui/icons-material/Add';

export default function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon position tabs example"
      sx={{
        position:"fixed" ,bottom:"0px"
      }}
    >
      <Tab icon={<PhoneIcon />} />
      <Tab icon={< AddIcon />} iconPosition="start" />
      <Tab icon={<FavoriteIcon />} iconPosition="end" />
      <Tab icon={<PersonPinIcon />} iconPosition="bottom"/>
    </Tabs>
  );
}