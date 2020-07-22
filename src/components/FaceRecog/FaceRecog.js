import React from "react";
import "./FaceRecog.css";

const FaceRecog = ({ boxes, imageUrl }) => {
  var boxLocations = [];
  if (boxes.length) {
    boxLocations = boxes.map((box, i) => (
      <div
        key={i}
        className="bounding-box"
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol,
        }}
      ></div>
    ));
  }

  return boxes.length ? (
    <div className="faceCntr ma">
      <div className="absolute mt2">
        <img id="inputImage" alt="" src={imageUrl} width="700" height="auto" />
        <div
          className="bounding-box"
          style={{
            top: boxes[0].topRow,
            right: boxes[0].rightCol,
            bottom: boxes[0].bottomRow,
            left: boxes[0].leftCol,
          }}
        ></div>
        {boxLocations}
      </div>
    </div>
  ) : (
    <div className="faceCntr ma">
      <div className="absolute mt2">
        <img id="inputImage" alt="" src={imageUrl} width="700" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecog;
