window.onload = function() {
    // Get the current URL
    var currentUrl = window.location.href;

    // Function to share on Twitter
    document.getElementById('twitter-share').addEventListener('click', function() {
        var twitterIntentUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentUrl);
        window.open(twitterIntentUrl, '_blank');
    });

    // Function to share on LinkedIn
    document.getElementById('linkedin-share').addEventListener('click', function() {
        var linkedInShareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(currentUrl);
        window.open(linkedInShareUrl, '_blank');
    });

    // Function to copy URL to clipboard
    document.getElementById('url-share').addEventListener('click', function() {
        var urlInput = document.createElement('input');
        urlInput.setAttribute('value', currentUrl);
        document.body.appendChild(urlInput);
        urlInput.select();
        document.execCommand('copy');
        document.body.removeChild(urlInput);
        alert('URL copied to clipboard: ' + currentUrl);
    });

    // Function to create email with page URL in the body
    document.getElementById('email-share').addEventListener('click', function() {
        var subject = "Check out this link";
        var body = "I thought you might be interested in this link: " + currentUrl;
        var mailtoLink = 'mailto:?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        window.location.href = mailtoLink;
    });
}; 