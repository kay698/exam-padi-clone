import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./routes/LoginPage";
import Signup from "./routes/SignupPage";
import ResetPassword from "./routes/ResetPassword/resetPasswordPage.jsx";
import ConfirmEmail from "./routes/ResetPassword/confirmEmailPage.jsx";
import Subscription from "./routes/SubscriptionPage";
import OrderSummary from "./routes/OrderPage";
import Home from "./routes/Dashboard/HomePage";
import Test from "./routes/componentsTesting";
import Lessons from "./routes/Dashboard/LessonsPage";
import Reports from "./routes/Dashboard/ReportPage";
import Library from "./routes/Dashboard/LibraryPage";
import History from "./routes/Dashboard/LibraryPage/SubPages/historyPage";
import SavedLessons from "./routes/Dashboard/LibraryPage/SubPages/savedLessons";
import RecommendedLessons from "./routes/Dashboard/HomePage/SubPages/recommendedLessons";
import RecentlyViewedLessons from "./routes/Dashboard/HomePage/SubPages/recentlyViewedlessons";
import Downloads from "./routes/Dashboard/LibraryPage/SubPages/downloadsPage";
import Achievements from "./routes/Dashboard/ReportPage/SubPages/acheivements";
import Topic from "./routes/Dashboard/TopicPage";
import TestScores from "./routes/Dashboard/ReportPage/SubPages/testScores";
import WAEC from "./routes/Dashboard/CBTPage/NecoSat/waec";
import JAMB from "./routes/Dashboard/CBTPage/NecoSat/jamb";
import NECO from "./routes/Dashboard/CBTPage/NecoSat/neco";
import SAT from "./routes/Dashboard/CBTPage/NecoSat/sat";
import Profile from "./routes/Dashboard/Profile";
import EditProfile from "./routes/Dashboard/Profile/SubPages/editProfile";
import ChangePassword from "./routes/Dashboard/Profile/SubPages/changePassword";
import Receipts from "./routes/Dashboard/Profile/SubPages/receipts";
import { SubjectProvider } from "./context/SubjectContext";
import { ModeProvider } from "./context/Mode";
import "antd/dist/antd.css";

function App() {
  return (
    <SubjectProvider>
      <ModeProvider>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/confirm-email" component={ConfirmEmail} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/subscription" component={Subscription} />
            <Route path="/order-summary" component={OrderSummary} />
            <Route path="/lessons" component={Lessons} />
            <Route path="/reports" component={Reports} />
            <Route path="/library" component={Library} />
            <Route path="/history" component={History} />
            <Route path="/downloads" component={Downloads} />
            <Route path="/saved" component={SavedLessons} />
            <Route path="/recently-viewed" component={RecentlyViewedLessons} />
            <Route path="/recommended-lessons" component={RecommendedLessons} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/test-scores" component={TestScores} />
            <Route path="/cbt-waec" component={WAEC} />
            <Route path="/cbt-neco" component={NECO} />
            <Route path="/cbt-sat" component={SAT} />
            <Route path="/cbt-jamb" component={JAMB} />
            <Route path="/profile" component={Profile} />
            <Route path="/profile-edit" component={EditProfile} />
            <Route path="/profile-change-password" component={ChangePassword} />
            <Route path="/profile-receipts" component={Receipts} />
            <Route path="/test" component={Test} />
            <Route
              path="/lesson"
              render={(props) => (
                <Topic {...props} component={Topic} title={props.subjectName} />
              )}
            />
            <Route path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
      </ModeProvider>
    </SubjectProvider>
  );
}

export default App;
