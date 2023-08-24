
import React, { useState, useEffect } from "react";


function Message(props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, props.duration || 5000); // Default duration is 5 seconds (5000 milliseconds)

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [props.duration]);

  return (
    <>
      {visible && (
        <div
          aria-live="polite"
          aria-atomic="true"
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "200px" }}
        >
          <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
              {/* <img src="..." className="rounded mr-2" alt="..." /> */}
              <strong className="mr-auto">Message</strong>
              {/* <small>11 mins ago</small> */}
              <button
                type="button"
                className="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
                onClick={() => setVisible(false)} // Allow the user to manually close the toast
              >
                {/* <span aria-hidden="true">&times;</span> */}
              </button>
            </div>
            <div className="toast-body">{props.message}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;
