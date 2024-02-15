import React from "react";

import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/HomePage/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <AddPost />

      <PostList />
      <MainRoutes />
    </div>
  );
};

export default App;
