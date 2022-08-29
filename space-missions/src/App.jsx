import logo from "./assets/SpaceX_Logo_Black.png";
import { Image} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

// importamos componentes
import { LaunchList } from "./components/LaunchList";
import { LaunchDetail } from "./components/LaunchDetail";
import { RocketDetail } from "./components/RocketDetail";
//

export function App() {

  return (
    <>
      <Image src={logo} width={300} m={4} />
      <Routes>
        <Route path="/" element={<LaunchList/>}></Route>
        <Route path="launch/:launchId" element={<LaunchDetail/>}></Route>
        <Route path="rockets/:rocketId" element={<RocketDetail/>}></Route>
      </Routes>
    </>
  );
}
