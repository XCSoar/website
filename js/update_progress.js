---
layout: nil
---
$(document).ready(function() {
  $.get("/get_rss.php?url=http://bugs.xcsoar.org/roadmap/", function(html) {
    var percent = -1;

    $(html).find("div.milestone").each(function(i) {
      var found = false;
      $(this).find(".info h2 em").each(function(i) {
        if ($(this).text() == "{{ site.xcsoar_next_milestone }}") found = true
      });
      if (found) {
        $(this).find(".info .percent").each(function(i) {
          percent = $(this).text();
        });
      }
    });

    if (percent == -1)
      return;

    percent = Number(String(percent).replace("%", ""));

    $('#status_ok .bar').css("width", percent + '%');
    $('#status_ok #percent').text(percent);

    $('#status_err').css("display", "none");
    $('#status_ok').css("display", "block");
  }, "html");
});
