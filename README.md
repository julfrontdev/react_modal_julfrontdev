![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

# react_modal_julfrontdev

The Modal is made for [React](https://reactjs.org).

Features include:

- modal,
- style with props,
- static or dynamic text content.

# Installation and usage

The easiest way to use react_modal_julfrontdev is to install it from npm and build it into your app with Webpack.

```
yarn add react_modal_julfrontdev
```

or

```
npm install react_modal_julfrontdev
```

Then use it in your app:

#### With React Hooks (props example)

```js
import React, { useState } from "react";
import { Modal } from "react_modal_julfrontdev";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalBackgroundColor="#544343"
        modalCloseButton="Close"
        modalContentColor="white"
        modalBorder="0px"
        modalFontSize="1.8rem"
        modalStaticTextContentFirstPart="Employee"
        modalDynamicTextContentFirstPart={lastAddedFirstName}
        modalDynamicTextContentLastPart={lastAddedLastName}
        modalStaticTextContentLastPart="added successfully"
      />
    </div>
  );
}
```

## Props

Props you may want to specify include:

- `setShowModal`- callback function to show or hide modal,
- `modalBackgroundColor` - to set modal background color,
- `modalCloseButton`- to set close button text content,
- `modalContentColor` - to set modal content color,
- `modalBorder` - to change modal border,
- `modalFontSize` - to change modal font size,
- `modalStaticTextContentFirstPart` - to change modal first part static text content,
- `modalDynamicTextContentFirstPart` - to dynamically change modal first part text content,
- `modalDynamicTextContentLastPart` - to dynamically change modal last part text content,
- `modalStaticTextContentLastPart` - to change modal last part static text content,

## Thanks

Thank you to [Antoine Bourin](https://github.com/AntoineBourin) who made this possible!
