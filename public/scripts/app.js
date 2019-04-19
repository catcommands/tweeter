/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){
  $(".button").click(function(){
    $(".new-tweet").toggle();
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

function loadTweets() {
  $.get("/tweets", function(data) {
    renderTweets(data);
  });
};

function createTweet(tweet) {
  $.ajax('/tweets', { method: 'POST', data: tweet }) //taken from compass
    .then(function() {
      loadTweets();
    });
}

function renderTweets(tweets) { //rendering all the tweets to page
for (tweet of tweets) {
    let $tweet = createTweetElement(tweet);
    $('.tweets-container').prepend($tweet);
    console.log(tweet);
  }
}
//THis is another way to do code.
// function createTweetElement(tweet) {
//   return $(`
//     <article class="tweet">
//       <header>
//         <img class="profile" src="${tweet.user.avatars.regular}">
//         <h3>${tweet.user.name}</h3>
//         <h5>${tweet.user.handle}</h5>
//       </header>
//       <p class="tweet-text">${tweet.content.text}</p>
//       <footer>
//         <p class="date">${tweet.created_at}</p>
//         <div class="icons">
//           <i class="fa fa-flag"></i>
//           <i class="fa fa-retweet"></i>
//           <i class="fa fa-heart"></i>
//         </div>
//       </footer>
//     </article>
//   `);
// }

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

  //example alt to 27 and line 28: var $img = $("<img>").addClass("profile").attr("src", data.user.avatars.regular);
  return $tweet;
}

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
