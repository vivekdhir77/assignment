// import React from 'react';

// import Labs from "./Labs";
// import Kanbas from "./Kanbas";
// // import About from "./About";
// import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
// function App() {
//   return (
//     <HashRouter>

//       <div>
//         {/* <About/> */}
//         <Routes>
//           <Route path="/" element={<Navigate to="/Labs" />} />
//           <Route path="/Labs/*" element={<Labs />} />
//           <Route path="/Kanbas/*" element={<Kanbas />} />
//         </Routes>
//       </div>
//     </HashRouter>
//     // <div>
//     //   <Labs/>
//     // </div>
//   );
// }

// export default App;

import React from "react";
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;