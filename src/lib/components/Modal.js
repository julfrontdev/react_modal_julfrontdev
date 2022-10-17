import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Modal = ({
  showModal,
  setShowModal,
  modalContentText,
  modalBackgroundColor,
  modalContentColor,
  modalBorder,
  modalFontSize,
  style,
}) => {
  // Get last employee added from Redux
  const employeesList = useSelector((state) => state.employees.employees);
  const employeesListLastAdded = (employeesList) => {
    const lastAdded = employeesList[employeesList.length - 1];
    return lastAdded;
  };
  const lastAddedFirst = employeesListLastAdded(employeesList).firstName;
  const lastAddedLast = employeesListLastAdded(employeesList).lastName;
  console.log(lastAddedFirst);
  console.log(lastAddedLast);

  return (
    <>
      {showModal ? (
        <div
          className="background"
          style={{
            backgroundColor: modalBackgroundColor,
            borderRadius: modalBorder,
            opacity: "0.85",
            fontWeight: "bold",
            padding: "2rem",
            margin: "0 auto",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "2",
            minWidth: "340px",
            width: "99vw",
            height: "98.5vh",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...style,
          }}
        >
          <div
            className="modal-wrapper"
            style={{
              borderRadius: modalBorder,
            }}
          >
            <div className="modal-content">
              <p style={{ color: modalContentColor, fontSize: modalFontSize }}>
                {/* Display text using the prop modalContentText: */}
                {/* {modalContentText} */}
                {/* Display dynamic employee name: */}
                Employee{" "}
                <span style={{ color: "#FCDE9C" }}>{lastAddedFirst}</span>{" "}
                <span style={{ color: "#FCDE9C" }}>{lastAddedLast}</span> added
              </p>
            </div>
            <div
              className="close-modal-button"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)} /// toggle modal
              style={{
                color: modalContentColor,
                fontSize: "1.5rem",
                fontWeight: "lighter",
                outline: "1px solid white",
                width: "50%",
                height: "3rem",
                borderRadius: "20px",
                margin: "40px auto 10px auto",
                padding: ".5rem",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.target.style.background = "white") &&
                (e.target.style.color = "#8D6A9F")
              }
              onMouseOut={(e) =>
                (e.target.style.background = "transparent") &&
                (e.target.style.color = "white")
              }
            >
              Close
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

// PropTypes for Modal
Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired, //
  modalBackgroundColor: PropTypes.string,
  modalContentColor: PropTypes.string,
  modalBorder: PropTypes.string,
  modalFontSize: PropTypes.string,
  // content: PropTypes.string.isRequired,
};

export default Modal;
