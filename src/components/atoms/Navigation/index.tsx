import React, { useState } from 'react';
import { styled, Tabs, TabsProps, Tab } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TabsComponent = styled(Tabs)<TabsProps>(({ theme }) => ({
  minHeight: 'max-content',
  ['& .MuiTabs-flexContainer']: {
    gap: 10,
    [theme.breakpoints.up('lg')]: {
      gap: 15,
    },
    [theme.breakpoints.up('xl')]: {
      gap: 20,
    },
  },
  ['& .MuiTab-textColorPrimary']: {
    color: '#2A0BEA',
    fontWeight: 600,
    fontSize: 12,
    textTransform: 'none',
    padding: 0,
    minWidth: 40,
    minHeight: 18,
    [theme.breakpoints.up('lg')]: {
      fontSize: 14,
      minWidth: 49,
      minHeight: 27,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 16,
      minWidth: 50,
      minHeight: 42,
    },
  },
  ['& .MuiTab-textColorPrimary.Mui-selected']: {
    color: '#2A0BEA',
  },
  ['& .MuiTabs-indicator']: {
    backgroundColor: '#CA0BEA',
    [theme.breakpoints.up('lg')]: {
      height: 3,
    },
    [theme.breakpoints.up('xl')]: {
      height: 4,
    },
  },
  ['& .MuiTabs-scroller.MuiTabs-fixed']: {
    height: 24,
    [theme.breakpoints.up('lg')]: {
      height: 32,
    },
    [theme.breakpoints.up('xl')]: {
      height: 40,
    },
  },
}));

function Navigation() {
  const { pathname } = useRouter();
  const tabIndex = pathname.includes('threads') ? 0 : 1;
  const [value, setValue] = useState(tabIndex);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
        <TabsComponent value={value} onChange={handleChange}>
            <Tab label="Threads" LinkComponent={Link} href='/threads' {...a11yProps(0)} />
            <Tab label="Leaderboards" LinkComponent={Link} href='/leaderboards' {...a11yProps(1)} />
            {/* <Tab label="Newsfeed" {...a11yProps(2)} /> */}
        </TabsComponent>
  );
}

export default Navigation;