import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateMemberComponent from "./Components/Member/CreateMemberComponent";
import ListMemberComponent from "./Components/Member/ListMemberComponent";
import UpdateMemberComponent from "./Components/Member/UpdateMemberComponent";
import ViewMemberComponent from "./Components/Member/ViewMemberComponent";
import RegisterUserComponent from "./Components/RegisterUser/RegisterUserComponent";
import LoginUserComponent from "./Components/LoginUser/LoginUserComponent";
import Gallery from "./Components/Header/Gallery";
import Chart from './Components/Chart';
import SearchMemberComponent from './Components/Member/SearchMemberComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={LoginUserComponent}></Route>
            <Route path="/gallery-page" exact component={Gallery}></Route>
            <Route path="/add-user" component={RegisterUserComponent}></Route>
            <Route path="/member" component={ListMemberComponent}></Route>
            <Route path="/search" exact component={SearchMemberComponent}></Route>
            <Route path="/add-member" component={CreateMemberComponent}></Route>
            <Route path="/update-member" component={UpdateMemberComponent}></Route>
            <Route path="/view-member/:id" component={ViewMemberComponent}></Route>
            <Route path="/statistics" exact component={Chart}></Route>

          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
