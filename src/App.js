import { Link } from "react-router-dom";
import "./App.css";
import RoutesComponent from "./Routes";
import { isUserAdmin } from "./helpers";
import { useUser } from "./hooks";
import { Grid } from "@mui/material";
import { Header } from "./components/header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchHomePageProducts } from "./redux";

const App = () => {
  const { userData } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageProducts());
  }, []);

  return (
    // <div>
    //   <Link to='/login'>Login</Link> <br />
    //   <Link to='/register'>Register</Link> <br />
    //   {isUserAdmin(userData) && <Link to='/products/new'>Add product</Link>}
    //   <RoutesComponent />
    // </div>
    <Grid sx={{ minHeight: "100vh" }}>
      <Grid item>
        <Header />
      </Grid>

      <Grid
        item
        sx={{
          paddingTop: 20,
          minHeight: "100vh",
          width: "100%",
          pb: 10,
          backgroundColor: "#f5f5f5",
        }}
      >
        <RoutesComponent />
      </Grid>
    </Grid>
  );
};

export default App;
