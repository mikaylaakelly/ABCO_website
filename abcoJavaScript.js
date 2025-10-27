function _(id) {
  return document.getElementById(id);
}

function submitForm() {
  // Disable submit button and show status
  _("mybtn").disabled = true;
  _("status").innerHTML = "Please wait...";

  // Collect form data
  var formdata = new FormData();
  formdata.append("n", _("n").value); // name
  formdata.append("e", _("e").value); // email
  formdata.append("m", _("m").value); // message

  // Create AJAX request
  var ajax = new XMLHttpRequest();
  ajax.open("POST", "example_parser.php", true);

  // Handle response
  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 200) {
      // Trim whitespace from response
      var response = ajax.responseText.trim();

      if (response === "Success") {
        _("my_form").innerHTML =
          "<h2>Thanks, " +
          _("n").value +
          "! Your message has been sent.</h2>";
      } else {
        _("status").innerHTML = response;
        _("mybtn").disabled = false;
      }
    }
  };

  // Send data
  ajax.send(formdata);
}