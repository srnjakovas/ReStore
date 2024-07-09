import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  changeThemeMode: () => void;
}

export default function Header({ changeThemeMode, darkMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">My Store</Typography>
        <Switch onChange={changeThemeMode} checked={darkMode} />
      </Toolbar>
    </AppBar>
  );
}
