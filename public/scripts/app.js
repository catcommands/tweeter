/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// ************** Function method GET *************

function loadTweets() {
  $.get("/tweets", function(data) {
    renderTweets(data);
  });
};

// *********** AJAX + Function method POST ************

function createTweet(tweet) {
  $.ajax('/tweets', { method: 'POST', data: tweet })
    .then(function() {
      loadTweets();
    });
}


$(document).ready(function(){
  $(".button").click(function(){
    $(".new-tweet").slideToggle();
    $("#new-tweet").focus()
  });

  $("#create-new").on("submit", function(event) {
    event.preventDefault();
    let tweetSize = $("textarea").val().length;

    if (tweetSize > 140 ) {
      $(".error").text("Limit exceeded").toggle(true)
      return;
    }

    if (tweetSize === 0) {
      $(".error").text("Empty tweet invalid").toggle(true);
      return;
    }

    $(".error").text('').toggle(false);
    const tweet = $("#create-new").serialize();
    createTweet(tweet);
  });

  loadTweets();
});


// *********** Render all tweets to main page ***********

function renderTweets(tweets) {
  for (tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $('.tweets-container').prepend($tweet);
    console.log(tweet);
  }
}

function createTweetElement(data) {
  let {user, content, created_at} = tweet;
  let {name, avatars, handle} = user;
  let {text} = content;
  let src = avatars.regular;

  $tweet = $('<article>').addClass('tweet');
  $header = $('<header>');

  $img = $('<img>').addClass('profile').attr('src', src);
  $header.append($img);

  $h3 = $('<h3>').text(name);
  $header.append($h3);

  $h5 = $('<h5>').text(handle);
  $header.append($h5);
  $tweet.append($header);

  $pExample = $('<p>').addClass('tweet-text').text(text);
  $tweet.append($pExample);

  $footer = $('<footer>');
  $tweet.append($footer);

  $pDate = $('<p>').addClass('date').text(created_at);
  $footer.append($pDate);

  $div = $('<div>').addClass('icons');

  $footer.append($div);
  $iconFlag = $(`<i class='fa fa-flag'></i>`);
  $div.append($iconFlag);

  $iconRetweet = $(`<i class='fa fa-retweet'></i>`);
  $div.append($iconRetweet);

  $iconHeart = $(`<i class='fa fa-heart'></i>`);
  $div.append($iconHeart);
  return $tweet;
};