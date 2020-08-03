import React from "react";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  const onSubmit2 = () => {
    onSubmit();
    let inputUrl = document.getElementById("link");
    inputUrl.value = "";
  };
  const enterEven = (event) => {
    if (event.keyCode === 13) onSubmit2();
  };
  return (
    <div>
      <p className="f3">
        This Smart Brain can detect faces in a picture. Give it a try..
      </p>
      <div className="center" style={{ width: "65%" }}>
        <div className="pa4 br3 shadow-5">
          <input
            id="link"
            onChange={onInputChange}
            onKeyDown={enterEven}
            className="f4 pa2 w-60 center"
            type="text"
            placeholder="Enter url of an Image"
          ></input>
          <button
            onClick={onSubmit2}
            className="w-40 grow br3 f4 link ph1 mt3 pv2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
