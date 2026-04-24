function _(id) {
  return document.getElementById(id);
}

function submitForm() {
  _("mybtn").disabled = true;
  _("status").innerHTML = "Sending...";

  var formdata = new FormData();
  formdata.append("n", _("n").value);
  formdata.append("e", _("e").value);
  formdata.append("m", _("m").value);

  var ajax = new XMLHttpRequest();

  // IMPORTANT: this must match your GoDaddy file path
  ajax.open("POST", "example_parser.php", true);

  ajax.onload = function () {
    _("mybtn").disabled = false;

    if (ajax.status === 200) {
      var response = ajax.responseText.trim();

      if (response === "Success") {
        _("status").innerHTML = "Message sent successfully!";
        _("status").style.color = "lightgreen";
        _("my_form").reset();
      } else {
        _("status").innerHTML = response;
        _("status").style.color = "red";
      }
    } else {
      _("status").innerHTML = "Server error. Try again later.";
      _("status").style.color = "red";
    }
  };

  ajax.onerror = function () {
    _("status").innerHTML = "Request failed.";
    _("status").style.color = "red";
    _("mybtn").disabled = false;
  };

  ajax.send(formdata);
}