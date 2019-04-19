/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function renderTweets(tweets) {
  for (tweet of tweets) {
      let $tweet = createTweetElement(tweet);
      $('.tweets-container').append($tweet);
      console.log(tweet);
    }
  }

function createTweetElement (data) {

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

//example alt to 27 and line 28: var $img = $("<img>").addClass("profile").attr("src", data.user.avatars.regular);
  return $tweet;
}

//



  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];


$(document).ready(function (){

  $("#create-new").submit(function(event) {
    event.preventDefault();
  
  
    //let $tweet = $("#new-tweet").val();
    console.log($tweet);
    console.log('Submit button');
    $.ajax('/tweets', { method: 'POST', data: $("#create-new").serialize() })
    .then(function (response) {
    console.log('Success: ', response);
    });
  })

  function loadTweets() {
    $.get("/tweets", function(data) {
      renderTweets(data);
    });
  };
  loadTweets();

  renderTweets(data);

  
  //var $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  //console.log($tweet); // to see what it looks like
  //$('.tweet-container').append(createTweetElement(tweetData)); 
  //console.log("line32");
  // to add it to the page so we can make sure it's got all the right elements, classes, etc.

})
