import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from "./Bubbles";

test("Fetches data and renders the bubbles", () => {
  //arrange
  const {rerender, queryAllByTestId} = render(<Bubbles colors={[]}/>)
  //check that there are no episodes yet
  const initEpisodes = queryAllByTestId(/color-box/i)
  expect(initEpisodes).toHaveLength(0);

  //Act
  let rer = rerender(<Bubbles colors={dummyData}/>);
  const episode = queryAllByTestId(/color-box/i)
  // //assert
  expect(episode).toHaveLength(10);
});


const dummyData = [{"color":"aliceblue","code":{"hex":"#f0f8ff"},"id":1},{"color":"limegreen","code":{"hex":"#99ddbc"},"id":2},{"color":"aqua","code":{"hex":"#00ffff"},"id":3},{"color":"aquamarine","code":{"hex":"#7fffd4"},"id":4},{"color":"lilac","code":{"hex":"#9a99dd"},"id":5},{"color":"softpink","code":{"hex":"#dd99ba"},"id":6},{"color":"bisque","code":{"hex":"#dd9a99"},"id":7},{"color":"softyellow","code":{"hex":"#dcdd99"},"id":8},{"color":"blanchedalmond","code":{"hex":"#ffebcd"},"id":9},{"color":"blue","code":{"hex":"#6093ca"},"id":10}]