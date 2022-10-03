import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import {useState} from "react";
import {ThemeContext, themes} from "./context"
import ChatPage from "./pages/ChatPage";

function App() {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () =>{
        setTheme(prevState => prevState === themes.light ? themes.dark : themes.light)
    }
  return (
      <ThemeContext.Provider value={{themes: theme, toggleTheme: toggleTheme}}>
          <div className="App">
              <Routes>
                  <Route path={'/'} element={<MainLayout/>}>
                      <Route index element={<HomePage/>}/>
                      <Route path={'chats'} element={<ChatsPage/>}/>
                      <Route path={'chats/:id'} element={<ChatPage/>}/>
                      <Route path={'profile'} element={<ProfilePage/>}/>
                      <Route path={'*'} element={<NotFoundPage/>}/>
                  </Route>
              </Routes>
          </div>
      </ThemeContext.Provider>
  );
}

export default App;
