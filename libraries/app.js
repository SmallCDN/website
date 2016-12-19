$(function () {
  var libraries;

  $.get('https://sml.lc/api/libraries', function (data) {
    libraries = data;
    $.each(data, (i, v) => {
      $('#libraries').append(
        '<li>' +
        '<div class="collapsible-header">' + v.latestVersion.info.name + '</div>' +
        '<div class="collapsible-body"><table class="info"><tbody>' +
        '<tr><td><b>Description</b></td>' +
        '<td>' + v.latestVersion.info.description + '</td></tr>' +
        '<tr><td><b>Version</b></td>' +
        '<td>' + v.latestVersion.version + '</td></tr>' +
        '<tr><td><b>Author</b></td>' +
        '<td>' + v.latestVersion.info.author + '</td></tr>' +
        '<tr><td><b>License</b></td>' +
        '<td>' + v.latestVersion.info.license + '</td></tr>' +
        '<tr><td><b>Homepage</b></td>' +
        '<td><a target="_blank" href="' + v.latestVersion.info.homepage + '">' + v.latestVersion.info.homepage + '</a></td></tr>' +
        '</tbody></table></div>' +
        '</li>'
      );
    });
  });

  $('#search').keydown((e) => {
    if (e.keyCode !== 13) return;
    if ($('#search').val()) {
      $.get(`https://sml.lc/api/search/${$('#search').val()}`, function (data) {
        $("#libraries").html("");
        $.each(data, (i, v) => {
          $('#libraries').append(
            '<li>' +
            '<div class="collapsible-header">' + v.latestVersion.info.name + '</div>' +
            '<div class="collapsible-body"><table class="info"><tbody>' +
            '<tr><td><b>Description</b></td>' +
            '<td>' + v.latestVersion.info.description + '</td></tr>' +
            '<tr><td><b>Version</b></td>' +
            '<td>' + v.latestVersion.version + '</td></tr>' +
            '<tr><td><b>Author</b></td>' +
            '<td>' + v.latestVersion.info.author + '</td></tr>' +
            '<tr><td><b>License</b></td>' +
            '<td>' + v.latestVersion.info.license + '</td></tr>' +
            '<tr><td><b>Homepage</b></td>' +
            '<td><a target="_blank" href="' + v.latestVersion.info.homepage + '">' + v.latestVersion.info.homepage + '</a></td></tr>' +
            '</tbody></table></div>' +
            '</li>'
          );
        });
      });
    } else {
      $('#libraries').html("");
      $.each(libraries, (i, v) => {
        $('#libraries').append(
          '<li>' +
          '<div class="collapsible-header">' + v.latestVersion.info.name + '</div>' +
          '<div class="collapsible-body"><table class="info"><tbody>' +
          '<tr><td><b>Description</b></td>' +
          '<td>' + v.latestVersion.info.description + '</td></tr>' +
          '<tr><td><b>Version</b></td>' +
          '<td>' + v.latestVersion.version + '</td></tr>' +
          '<tr><td><b>Author</b></td>' +
          '<td>' + v.latestVersion.info.author + '</td></tr>' +
          '<tr><td><b>License</b></td>' +
          '<td>' + v.latestVersion.info.license + '</td></tr>' +
          '<tr><td><b>Homepage</b></td>' +
          '<td><a target="_blank" href="' + v.latestVersion.info.homepage + '">' + v.latestVersion.info.homepage + '</a></td></tr>' +
          '</tbody></table></div>' +
          '</li>'
        );
      });
    }
  });
});