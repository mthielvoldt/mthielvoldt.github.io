

$('#contact-submit').click(function (e) {
  e.preventDefault();
  console.log("sending request");
  $.ajax({
    url: 'https://liteinvite.com/contact',
    type: 'POST',
    data: {
      from: $('#contact-from').val(),
      subject: 'personalPage ' + $('#contact-subject').val(),
      message: $('#contact-message').val()
    },
    crossDomain: true,
    complete: onXhrComplete
  })
});

function onXhrComplete(xhr, status) {
  $('#contact-from').val('');
  $('#contact-subject').val('');
  $('#contact-message').val('');
  if (status === "success") {
    $('#contact-submit').after("<span> Message Sent.</span>");
  } else {
    $('#contact-submit').after("<span> Sadly, there was a problem sending.</span>");
  }
}