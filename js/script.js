/* Created by: Alex.Nelson
 * Created on: Oct 2022
 * This file contains the JavaScript for index.html
 */
function myButtonClicked() {
  /*Input*/
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = document.getElementById("street-name").value

  /*Output*/
  document.getElementById("address").innerHTML =
    "Your street is:" + " " + streetNumber + " " + streetName + "."
}
