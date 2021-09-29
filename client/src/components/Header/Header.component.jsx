import React, {useState} from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuIcon from '@material-ui/icons/Menu';

import { BrowserView, MobileView } from 'react-device-detect';

import { useStyles } from './Header.styles';

const links = [
  {
    href: '/teams',
    title: 'Teams',
  },
  {
    href: '/users',
    title: 'Users',
  },
];

const Header = (props) => {
  const {seasons, selectedSeason, setCurrentSeason} = props;
  console.log('selected: ', selectedSeason);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;
  const classes = useStyles();
  const colourClass = classes.white;
  const renderMobileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={() => { setAnchorEl(null); }}
      onExit={() => { setAnchorEl(null); }}
    >
      { links.map((link) => (
        <MenuItem href={link.href} key={link.title}>
          <Typography className={classes.links}>{link.title}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
      <AppBar
        position="static"
        className={classes.appBar}
        color="primary"
      >
        <div className={classes.toolBarContainer} data-cy="vinn-header">
          <Toolbar className={classes.toolBar}>
            {/* <a href="/" aria-label="Navigate to Vinn homepage">
              <img
                src={}
                width="52"
                height="16"
                alt="vinn logo"
                className={classes.logo}
              />
            </a> */}
            <Typography>
              Vinn Race League
              </Typography>
            <div className={classes.grow} />
            <BrowserView>
              <Typography classes={{root: classes.white}} className={classes.links}>
                {links.map((link) => (
                  <Link
                    color="#fff"
                    classes={{root: classes.white}}
                    key={link.title}
                    href={link.href}
                    className={clsx(colourClass, classes.link)}
                    aria-label={link.title}
                  >
                    {link.title}
                  </Link>
                ))}
              </Typography>
            </BrowserView>
            <MobileView>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              className={classes.sectionMobile}
              onClick={handleMenu}
            >
              <MenuIcon className={colourClass} />
            </IconButton>
            {renderMobileMenu}
            </MobileView>
            <FormControl>
              <InputLabel id="select-season">Season</InputLabel>
              <Select
                className={classes.seasonSelect}
                variant="outlined"
                labelId="select-season"
                id="demo-simple-select"
                value={selectedSeason ? selectedSeason : 0}
                label="Season"
                onChange={setCurrentSeason}
              >
                <MenuItem disabled value={0}>Select A Season</MenuItem>
                {seasons.map((season) => (
                  <MenuItem value={season.id}>{season.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Toolbar>
        </div>
      </AppBar>
  );
}

export default Header;
