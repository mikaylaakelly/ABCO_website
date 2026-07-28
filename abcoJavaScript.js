function _(id) {
  return document.getElementById(id);
}

function submitForm() {

  _("mybtn").disabled = true;
  _("status").innerHTML = "Sending...";

  var templateParams = {
    name: _("n").value,
    email: _("e").value,
    message: _("m").value
  };

  emailjs.send(
    "service_sf64wdj",
    "template_ji00hef",
    templateParams
  )
  .then(function(response) {

    console.log("SUCCESS", response);

    _("status").innerHTML = "Message sent successfully!";
    _("status").style.color = "lightgreen";

    _("my_form").reset();
    _("mybtn").disabled = false;

  })
  .catch(function(error) {

    console.log("FAILED", error);

    _("status").innerHTML = "Message failed to send. Please try again.";
    _("status").style.color = "red";

    _("mybtn").disabled = false;

  });

}