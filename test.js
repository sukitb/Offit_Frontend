

  function secondsToHms(sec) {
    sec = Number(sec);
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);

    const hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hr ") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " min " : " min ") : "";

    return hDisplay + mDisplay;
  }

  function urlCheck(url) {
    if (url.includes("youtube.com")) {
        youtube_parser(url)
    } else {
      return url
    }
  }

  function youtube_parser(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
    console.log(url)
  }

  urlCheck("https://www.youtube.com/watch?v=ml6cT4AZdqI")


  