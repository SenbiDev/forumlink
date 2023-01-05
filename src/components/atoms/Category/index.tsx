import React, { useEffect, useState } from 'react';
import { styled, Tabs, TabsProps, Tab } from '@mui/material';
import { Poppins } from '@next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../../hooks/hooks';
import useWidth from '../../../hooks/useWidth';

const poppinsFont = Poppins({
  weight: '600',
  style: 'normal',
});

const TabsComponent = styled(Tabs)<TabsProps>(({ theme }) => ({
  minHeight: 0,
  [theme.breakpoints.up('lg')]: {
    width: '80px',
  },
  ['& .MuiTabs-flexContainer']: {
    gap: 14,
    [theme.breakpoints.up('lg')]: {
      gap: 5,
    },
  },
  ['& .MuiTab-textColorPrimary']: {
    color: 'white',
    backgroundColor: '#2A0BEA',
    fontFamily: poppinsFont.style.fontFamily,
    fontWeight: 600,
    fontSize: 10,
    textTransform: 'Capitalize',
    padding: 5,
    minWidth: 71,
    minHeight: 28,
    borderRadius: 4,
    lineHeight: 'inherit',
    [theme.breakpoints.up('lg')]: {
      alignItems: 'flex-start',
      fontSize: 12,
      minHeight: '22px',
      padding: 0,
      color: '#080818',
      backgroundColor: 'unset',

    },
  },
  ['& .MuiTab-textColorPrimary.Mui-selected']: {
    color: 'white',
    backgroundColor: '#CA0BEA',
    [theme.breakpoints.up('lg')]: {
      color: '#CA0BEA',
      backgroundColor: 'unset',

    },
  },
  ['& .MuiTabs-indicator']: {
    backgroundColor: 'unset',
    position: 'unset',
    left: 'unset',
    right: 'unset',
    bottom: 'unset',
    top: 'unset',
    width: 'unset',
    height: 'unset',
    transition: 'unset',
  },
}));

function Category() {
  const { threads } = useAppSelector((state) => state);
  const { asPath } = useRouter();
  const pathSplit = asPath.split('=');
  const categoryParam = pathSplit.slice(1).join('').replace(/%20/g, ' ') || 'all thread';
  const map = new Map();

  const categoryList = threads.map(({ category }: { category: string }) => category);
  const uniqueCategoryList = [...new Set<string>(categoryList)];
  uniqueCategoryList.forEach((category: string, index: number) => {
    map.set(category, ++index);
  });
  const tabIndex: { [index: string]: number } = Array.from(map).reduce((obj, [key, value]) => (
    Object.assign(obj, { [key]: value })
  ), {});

  tabIndex['all thread'] = 0;
  const index = tabIndex[categoryParam] ?? 0;
  const [value, setValue] = useState(0);
  const breakpoints = useWidth();
  const orientation = breakpoints === 'lg' || breakpoints === 'xl' ? 'vertical' : 'horizontal';

  useEffect(() => {
    setValue(index);
  }, [index]);

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
        <TabsComponent orientation={orientation} variant="scrollable" scrollButtons={false} allowScrollButtonsMobile value={value} onChange={handleChange}>
            <Tab key={tabIndex['all thread']} label={'all thread'} LinkComponent={Link} href={'/threads?category=all thread'} {...a11yProps(tabIndex['all thread'])} />
            {
                uniqueCategoryList.map((category: string, index: number) => (
                    <Tab key={index} label={category} LinkComponent={Link} href={`/threads?category=${category}`} {...a11yProps(index)} />
                ))
            }
        </TabsComponent>
  );

}

export default Category;