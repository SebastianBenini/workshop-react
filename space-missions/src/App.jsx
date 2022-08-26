import { useState, useEffect } from "react";
import * as API from "./service/launches";
import logo from "./assets/SpaceX_Logo_Black.png";
import { Heading, Image} from "@chakra-ui/react";
import { LaunchItem } from "./components/LaunchItem"

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image src={logo} width={300} m={4} />
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {... launch} />
        ))}
      </section>
    </>
  );
}
