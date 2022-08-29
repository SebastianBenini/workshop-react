import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import * as API from "../service/launches";

import { LaunchItem } from "./LaunchItem"

 export function LaunchList () {

    const [launches, setLaunches] = useState([]);
    useEffect(() => {
      //hacemos una promesa importando el api
      API.getAllLaunches().then(setLaunches).catch(console.log);
    }, []);
    return (
    <>
        <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
        </Heading>
        {launches.length ===0 ? ( <div>Loading..</div>
        ) : ( 
        <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {... launch} />
        ))}
        </section>
        ) }
    </>
    )
 }
 
