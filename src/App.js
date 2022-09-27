import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<HomePage/>}/>
              <Route path={'chats'} element={<ChatsPage/>}/>
              <Route path={'profile'} element={<ProfilePage/>}/>
              <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
