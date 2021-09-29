import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../../App";
import App404route from "./app404route";

function AllRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                {/* <Route path="/widgets/:name/:id" component={CodeDetails}></Route> */}

                {/* Paths that don't match */}
                <Route path="*" component={App404route} />
            </Switch>
        </Router>
    );
}

export default AllRoutes