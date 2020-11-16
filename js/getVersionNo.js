function getVersionPromiseBox(url) {
  var getVersion = new Promise((resolve, reject) => {
    $.ajax({
      url: `${host}${url}`,
      method: "POST",
      crossDomain: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: function (data) {
        resolve(data);
      },
    });
  });
  return getVersion;
}

$(document).ready(function () {
  // getVersionPromiseBox(slotto_version)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});
