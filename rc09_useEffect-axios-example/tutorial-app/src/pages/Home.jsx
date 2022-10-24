import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://cw-axios-example.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    const { data } = await axios(url);
    console.log(data);
    setTutorials(data);
  };

  // didMount
  useEffect(() => {

    getTutorials();
    }, [])


  return (
    <>
      <AddTutorial />
      <TutorialList tutorials = {tutorials} />
    </>
  );
};

export default Home;
