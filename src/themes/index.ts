import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material';
import buttonTheme from './button-theme';
import avatarTheme from './avatar-theme';
import typographyTheme from './typography-theme';
import dividerTheme from './divider-theme';
import tabsTheme from './tabs-theme';

let theme = createTheme(deepmerge(buttonTheme, avatarTheme), deepmerge(typographyTheme, dividerTheme));
theme = createTheme(theme, tabsTheme);


export default theme;