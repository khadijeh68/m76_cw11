function generateTable() {
    var div = document.createElement("div");
    div.setAttribute("id", "table");
    document.body.appendChild(div);
    document.getElementById("table").innerHTML =
      `<table id='tbl' border='1'>
       <tr>
      <th>Name</th>
      <th>Family</th>
      <th>Mobile</th>
      <th>Email</th>
       </tr>
      <tr>
      <td>Sara</td>
      <td>Modiri</td>
      <td>0912121212</td>
      <td>Sara@test.com</td>
      </tr>
      <tr>
      <td>Sara</td>
      <td>Modiri</td>
      <td>0912121212</td>
      <td>Sara@test.com</td>
      </tr>
      <tr>
      <td>Sara</td>
      <td>Modiri</td>
      <td>0912121212</td>
      <td>Sara@test.com</td>
      </tr>
      </table>`
      // document.getElementById("tbl").style.border = "3px solid black";
  }
  generateTable();