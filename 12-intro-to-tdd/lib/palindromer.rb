class Palindromer
  def check(string)
    new_string = string.split.join.downcase
    new_string == new_string.reverse 
  end
end