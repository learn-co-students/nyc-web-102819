class User
  attr_reader :username#, :tweets

  def initialize(username)
    @username = username
    # @tweets = []
  end

  def post_tweet(message)
    tweet = Tweet.new(message, self)

    # add_tweets(tweet)
  end

  def tweets
    # √get all the tweets
    # filter the tweets by user (i.e, just get mine)
    # return a brand new array of tweets (that are mine)

     Tweet.all.select do |tweet|
      tweet.user == self
     end
  end
  
  def add_tweets(tweet)
    self.tweets << tweet
  end
end