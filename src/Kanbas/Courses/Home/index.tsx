import React from 'react';

import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <table id="wd-home">
      <tr>
        <td valign="top">
        {/* <button>Collapse All</button><button>View Progress</button>
        <select id="wd-select-many-genre">
   <option selected value="Publish All">Publish All</option>
   <option value="Publish Just 1">Publish Just 1</option>
</select><button>+ Module</button> */}
          <Modules />
        </td>
        <td valign="top">
          <CourseStatus />
        </td>
      </tr>
    </table>
  );
}
