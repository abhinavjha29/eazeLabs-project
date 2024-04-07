import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import SidebarPage from "./pages/SidebarPage";
import Header from "./components/Header";
import Showcard from "./components/ShowSmallCard";
import ShowBigCard from "./components/ShowBigCard";
import Table from "./components/Table";
import "./App.css";
import ShowSmallCard from "./components/ShowSmallCard";
import Button from "./components/Button";

function App() {
  return (
    <div class="row bg-sky-50 min-h-screen">
      <div class="col-auto">
        <SidebarPage></SidebarPage>
      </div>
      <div class="col p-0">
        <Header />
        <Button />
        <ShowSmallCard />
        <ShowBigCard />
        <Table />
      </div>
    </div>
  );
}

export default App;
