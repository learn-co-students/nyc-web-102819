class Tweet
  attr_accessor :message, :username
  # @@all = []

  def self.all
    # @@all
    sql = <<-SQL
      SELECT *
      FROM tweets;
    SQL

    results = DB[:conn].execute(sql)
    
    results.map do |row|
      Tweet.new(row)
    end
  end

  def initialize(attributes={})
    @message = attributes['message']
    @username = attributes['username']

    # @@all << self
  end

  def save 
    sql = <<-SQL
      INSERT INTO tweets(
        username, message
      )
      VALUES (?, ?);
    SQL

    DB[:conn].execute(sql, self.username, self.message)
  end
end
