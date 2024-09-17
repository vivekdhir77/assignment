export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <table cellSpacing="10">
        <tbody>
          <tr>
            <td><label htmlFor="wd-name">Assignment Name</label></td>
          </tr>
          <tr>
            <td><input id="wd-name" value="A1 - ENV + HTML" /></td>
          </tr>

          <tr>
            <td>
              <textarea id="wd-description" cols={40} rows={10}>
                The assignment is available online Submit a link to the landing page of Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos itaque excepturi eligendi adipisci reiciendis. Soluta repellat temporibus nostrum, vel incidunt ipsum eos? Ad deleniti labore consequatur animi eos, tenetur hic.
              </textarea>
            </td>
          </tr>

          <tr>
            <td><label htmlFor="wd-points">Points</label></td>
          </tr>
          <tr>
            <td><input id="wd-points" value={100} /></td>
          </tr>

          <tr>
            <td><label>Submission Type:</label></td>
          </tr>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" name="check-entry" id="wd-chkbox-txt-entry"/>
                      <label htmlFor="wd-chkbox-txt-entry">Text Entry</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="check-entry" id="wd-chkbox-website-url"/>
                      <label htmlFor="wd-chkbox-website-url">Website URL</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="check-entry" id="wd-chkbox-media-rec"/>
                      <label htmlFor="wd-chkbox-media-rec">Media Recordings</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="check-entry" id="wd-chkbox-studen-ann"/>
                      <label htmlFor="wd-chkbox-studen-ann">Student Annotations</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="check-entry" id="wd-chkbox-file-uploads"/>
                      <label htmlFor="wd-chkbox-file-uploads">File Uploads</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td><label htmlFor="wd-Submission-Type">Submission Type</label></td>
          </tr>
          <tr>
            <td>
              <select id="wd-Submission-Type">
                <option selected value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </td>
          </tr>

          <tr>
            <td><label htmlFor="wd-Grade-Type">Display Grade as:</label></td>
          </tr>
          <tr>
            <td>
              <select id="wd-Grade-Type">
                <option selected value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
              </select>
            </td>
          </tr>

          <tr>
            <td><label htmlFor="wd-Group">Assignment Group:</label></td>
          </tr>
          <tr>
            <td>
              <select id="wd-Group">
                <option selected value="Assignments">Assignments</option>
              </select>
            </td>
          </tr>

          <tr>
            <td><label htmlFor="wd-assign">Assign to</label></td>
          </tr>
          <tr>
            <td><input id="wd-assign" value={"Everyone"} /></td>
          </tr>

          <tr>
            <td><label htmlFor="wd-due">Due:</label></td>
          </tr>
          <tr>
            <td><input type="date" id="wd-due" value="2000-01-21"/></td>
          </tr>

          <tr>
            <td><label htmlFor="wd-from">Available From:</label></td>
            <td><input type="date" id="wd-from" value="2000-01-21"/></td>
          
            <td><label htmlFor="wd-to">Until:</label></td>
            <td><input type="date" id="wd-to" value="2000-01-21"/></td>
          </tr>
          <tr>
            <td><hr /></td>
          </tr>

          <tr>
            <td>
              <button id="Save">Save</button>
              <button id="Cancel">Cancel</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
