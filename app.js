$(window).load(function() {
  let vodURL = 'vods.json';
  //get JSON data from vods.json
  $.getJSON(vodURL, function(json) {
    let vod = '';
    for (let i = 0; i < json.vodObj.length; i++) {
      let ntverse = json.vodObj[i].nt[2].verse;
      let otverse = json.vodObj[i].ot[2].verse;
      //check if verse exists, if it does add %3A before the verse numbers. this is to correct the format in the link to biblegateway
      function ntversecheck(ntverse) {
        return ntverse ? (ntverse = '%3A' + ntverse) : (ntverse = '');
      }
      function otversecheck(otverse) {
        return otverse ? (otverse = '%3A' + otverse) : (otverse = '');
      }
      //create output from each iteration
      vod += `<div class="vod"><h3>${json.vodObj[i].month}
        ${
          json.vodObj[i].day
        }</h3><p><a href="https://www.biblegateway.com/passage/?search=${
        json.vodObj[i].nt[0].book
      }+${json.vodObj[i].nt[1].chapter}${ntversecheck(
        ntverse
      )}&version=ESV" target="_blank">
        ${json.vodObj[i].nt[0].book}
        ${json.vodObj[i].nt[1].chapter}
        ${
          json.vodObj[i].nt[2].verse
        }</a></p><p><a href="https://www.biblegateway.com/passage/?search=${
        json.vodObj[i].ot[0].book
      }+${json.vodObj[i].ot[1].chapter}${otversecheck(
        otverse
      )}&version=ESV" target="_blank">
        ${json.vodObj[i].ot[0].book}
        ${json.vodObj[i].ot[1].chapter}
        ${json.vodObj[i].ot[2].verse}</a></p>
        </div>`;
      //send output from each iteration to DOM ID vods
      document.getElementById('vods').innerHTML = vod;
    }
  });
});
