/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function (){
    const tweetData = {
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
  }
  
  function createTweetElement (data) {
    var $tweet = $("<article>").addClass("tweet");
    var $header =  $("<header>");
    $tweet.append($header);
    var $img = $("<img>").addClass("profile");
    $img.attr("src", data.user.avatars.regular);
    $header.append($img);
    var $username = $("<h2>").addClass("username").text(data.user.name);
    $header.append($username);
//alt to 27 and line 28: var $img = $("<img>").addClass("profile").attr("src", data.user.avatars.regular);
    return $tweet;
  }
  //var $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  //console.log($tweet); // to see what it looks like
  $('.tweet-container').append(createTweetElement(tweetData)); 
  console.log("line32");
  // to add it to the page so we can make sure it's got all the right elements, classes, etc.

})
