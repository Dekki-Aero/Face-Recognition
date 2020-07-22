import React, { Component } from "react";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import FaceRecog from "./components/FaceRecog/FaceRecog";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import { partclsOptns } from "./constants";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "api_key_from_clarifai",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      boxes: [],
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value, boxes: [], imageUrl: "" });
  };

  calculateFaceLocations = (response) => {
    const faceBoxes = response.outputs[0].data.regions.map(
      (info) => info.region_info.bounding_box
    );
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return faceBoxes.map((box) => {
      return {
        leftCol: box.left_col * width,
        topRow: box.top_row * height,
        rightCol: width - box.right_col * width,
        bottomRow: height - box.bottom_row * height,
      };
    });
  };

  displayFaceBox = (boxes) => {
    this.setState({ boxes: boxes });
  };

  getPredictions = (url) => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, url)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocations(response))
      )
      .catch((err) => console.log(err));
  };

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input }, () =>
      this.getPredictions(this.state.imageUrl)
    );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={partclsOptns} />
        <Navigation />
        {/* <Rank /> */}
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecog boxes={this.state.boxes} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
