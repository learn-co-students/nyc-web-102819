require 'pry'
require 'rest-client'

class BookApp
  def run
    welcome_message
    input = get_user_input
    response = call_api(input)
    books = get_books_from_response(response)
    books.each.with_index(1) do |book, i|
      title = book["volumeInfo"]["title"]
      authors = book["volumeInfo"]["authors"]
      year = book["volumeInfo"]["publishedDate"]
      
      render_book(i, title, authors, year)
    end
  end

  private

  def render_book(index, title, authors, year)
    puts "#{index}."
    puts "Title: #{title}"
    puts "Authors: " + authors.to_s
    puts "Publication Year: #{year}"
    puts '*' * 25
  end

  def get_books_from_response(response)
    response["items"]
  end
  
  def welcome_message
    puts "Welcome to Book App."
  end
  
  def get_user_input
    puts "What terms do you want to search?"
    gets.chomp
  end

  def call_api(input)
    url = "https://www.googleapis.com/books/v1/volumes?q=#{input}"
    response = RestClient.get(url)
    parse_response(response)
  end

  def parse_response(response)
    JSON.parse(response)
  end
end
