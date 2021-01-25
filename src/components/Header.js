import { AppBar, Toolbar, IconButton, Button, Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" href="/">
          Heisenbier
        </Typography>
        <Button color="inherit" href="/brassagem">
          Brassagem
        </Button>
        <Button color="inherit" href="/">
          Home
        </Button>

        <Button color="inherit" href="/config">
          Config
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
