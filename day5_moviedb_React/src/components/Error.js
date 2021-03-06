import React from "react";

function Error() {
  return (
    <div className="error">
      <h3>Sorry! We could not find this movie</h3>
      <div className="gif">
        <iframe
          className="iframe"
          src="https://gifer.com/embed/v0K"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Error;
