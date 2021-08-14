
function waitForTikTokUrl() {
  if (window.location.href.includes('tiktok.com/@')) {
    if (document.querySelector('meta[property="twitter:creator:id"]')) {
      var username = document.querySelector('meta[property="twitter:creator:id"]').content;
      drawMassDownloadLink(username);
      drawVideoDownloadLinks()
      document.addEventListener('scroll', function(e) {
        drawVideoDownloadLinks();
      });
    }
  }
}

function drawMassDownloadLink(username) {
  var btn = document.createElement('a');
  btn.text = 'Download all videos from @' + username;
  btn.href = 'https://tiktokder.com/download-all-tiktok-videos-of-user-at-once?username=' + username;
  btn.target = 'blank';
  btn.style.position = 'fixed';
  btn.style.bottom = '0';
  btn.style.right = '0';
  btn.style.border = '1px solid ';
  btn.style.display = 'block';
  btn.style.padding = '1rem';
  btn.style.color = '#fff';
  btn.style.borderRadius = '8px';
  btn.style.fontWeight = '900';
  btn.style.zIndex = '99999999';
  btn.style.background = 'linear-gradient(90deg, #f65169, #fab429)';
  document.querySelector('body').appendChild(btn);
}

function drawVideoDownloadLinks() {
  var videos = document.querySelectorAll('.video-card-mask:not(.has-down-btn)');
  for (var i = 0; i < videos.length; i++) {
    var btn = document.createElement('a');
    btn.href = '#';
    btn.text = 'Download';
    btn.target = 'blank';
    btn.style.display = 'inline-block';
    btn.style.padding = '5px';
    btn.style.color = '#fff';
    btn.style.fontWeight = '900';
    btn.style.borderRadius = '8px';
    btn.style.background = 'linear-gradient(90deg, #f65169, #fab429)';
    btn.addEventListener('click', function(e) {
      window.open(e.target.parentNode.parentNode.querySelector('video').src);
      e.preventDefault();
    })
    videos[i].appendChild(btn);
    videos[i].classList.add('has-down-btn');
  }
}

setInterval(waitForTikTokUrl, 1000);

waitForTikTokUrl();
