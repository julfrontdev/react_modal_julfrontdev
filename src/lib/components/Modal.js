import React from "react";
import PropTypes from "prop-types";

const Modal = ({
  showModal,
  setShowModal,
  modalBackgroundColor,
  modalContentColor,
  modalBorder,
  modalFontSize,
  modalStaticTextContentFirstPart,
  modalDynamicTextContentFirstPart,
  modalDynamicTextContentLastPart,
  modalStaticTextContentLastPart,
  style,
}) => {
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
                {modalStaticTextContentFirstPart}{" "}
                <span style={{ color: "#FCDE9C" }}>
                  {modalDynamicTextContentFirstPart}
                </span>{" "}
                <span style={{ color: "#FCDE9C" }}>
                  {modalDynamicTextContentLastPart}
                </span>{" "}
                {modalStaticTextContentLastPart}
              </p>
            </div>
            <div
              className="close-modal-button"
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
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

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  modalBackgroundColor: PropTypes.string,
  modalContentColor: PropTypes.string,
  modalBorder: PropTypes.string,
  modalFontSize: PropTypes.string,
  modalStaticTextContentFirstPart: PropTypes.string,
  modalDynamicTextContentFirstPart: PropTypes.string,
  modalDynamicTextContentLastPart: PropTypes.string,
  modalStaticTextContentLastPart: PropTypes.string,
};

export default Modal;
