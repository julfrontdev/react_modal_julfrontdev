"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const Modal = _ref => {
  let {
    showModal,
    setShowModal,
    modalContentText,
    modalBackgroundColor,
    modalContentColor,
    modalBorder,
    modalFontSize,
    style
  } = _ref;
  // Get last employee added from Redux
  const employeesList = (0, _reactRedux.useSelector)(state => state.employees.employees);
  const employeesListLastAdded = employeesList => {
    const lastAdded = employeesList[employeesList.length - 1];
    return lastAdded;
  };
  const lastAddedFirst = employeesListLastAdded(employeesList).firstName;
  const lastAddedLast = employeesListLastAdded(employeesList).lastName;
  console.log(lastAddedFirst);
  console.log(lastAddedLast);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showModal ? /*#__PURE__*/_react.default.createElement("div", {
    className: "background",
    style: _objectSpread({
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
      justifyContent: "center"
    }, style)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrapper",
    style: {
      borderRadius: modalBorder
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: modalContentColor,
      fontSize: modalFontSize
    }
  }, "Employee", " ", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "#FCDE9C"
    }
  }, lastAddedFirst), " ", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      color: "#FCDE9C"
    }
  }, lastAddedLast), " added")), /*#__PURE__*/_react.default.createElement("div", {
    className: "close-modal-button",
    "aria-label": "Close modal",
    onClick: () => setShowModal(prev => !prev) /// toggle modal
    ,
    style: {
      color: modalContentColor,
      fontSize: "1.5rem",
      fontWeight: "lighter",
      outline: "1px solid white",
      width: "50%",
      height: "3rem",
      borderRadius: "20px",
      margin: "40px auto 10px auto",
      padding: ".5rem",
      cursor: "pointer"
    },
    onMouseOver: e => (e.target.style.background = "white") && (e.target.style.color = "#8D6A9F"),
    onMouseOut: e => (e.target.style.background = "transparent") && (e.target.style.color = "white")
  }, "Close"))) : null);
};

// PropTypes for Modal
Modal.propTypes = {
  showModal: _propTypes.default.bool.isRequired,
  setShowModal: _propTypes.default.func.isRequired,
  //
  modalBackgroundColor: _propTypes.default.string,
  modalContentColor: _propTypes.default.string,
  modalBorder: _propTypes.default.string,
  modalFontSize: _propTypes.default.string
  // content: PropTypes.string.isRequired,
};
var _default = Modal;
exports.default = _default;