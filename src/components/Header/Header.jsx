/* eslint-disable linebreak-style */
import MapboxAutocomplete from "react-mapbox-autocomplete";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import useStyles from "./styles";

// eslint-disable-next-line react/prop-types
function Header({ setViewPort, setIsLocationChanged }) {
  const classes = useStyles();

  const suggestionSelect = (result, latitude, longitude) => {
    setViewPort((currentViewPort) => {
      return {
        ...currentViewPort,
        latitude: Number(latitude),
        longitude: Number(longitude),
      };
    });
    setIsLocationChanged(true);
  };

  const searchClasses = `${classes.search} ${classes["react-mapbox-ac-suggestion"]} ${classes["react-mapbox-ac-input"]}`;

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5">Travel Advisor</Typography>
          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore new places
            </Typography>
            <MapboxAutocomplete
              publicKey="pk.eyJ1IjoiaGFuem8taGFzYXNoaSIsImEiOiJjbG94MmNwNWIxNGtuMmlscXlhcnNvcnlwIn0.7FFymtOb11K34zPuc4uTpA"
              onSuggestionSelect={suggestionSelect}
              inputClass={searchClasses}
              placeholder={"Search..."}
            ></MapboxAutocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
