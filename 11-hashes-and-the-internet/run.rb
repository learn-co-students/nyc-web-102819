require_relative './lib/book_app'

# url = "https://www.googleapis.com/books/v1/volumes?q=ruby+programming"

=begin

DELIVERABLES

Create a CLI that asks a user for a search term and then returns a list of books from the Google books API.

Steps:
√1. User should see some kind of welcome and a prompt: "What terms do you want to search?"
√2. Save user input
√3. Make an API request using the user's search terms
√4. Parse and interpret the JSON to get just the data we want - title, author, year
5. Render the data to the user in some "Pretty" way


=end

my_app = BookApp.new
my_app.run