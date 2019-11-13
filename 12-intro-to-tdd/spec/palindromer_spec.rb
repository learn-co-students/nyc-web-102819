require_relative '../lib/palindromer'

RSpec.describe Palindromer do
  describe '#check' do 
    let(:palindromer) { Palindromer.new }

    it 'returns true when given a palindrome' do
      string = 'poop'

      result = palindromer.check(string)

      expect(result).to be true 
    end

    it 'returns true when given a palindromic phrase with spaces' do 
      string = 'never odd or even'

      result = palindromer.check(string)

      expect(result).to be true
    end

    it 'return true when given a palindrome with mixed case' do
      string = 'Never Odd Or Even'

      result = palindromer.check(string)

      expect(result).to be true
    end

    xit 'returns false when given numbers'
    
    it 'returns false when not given a palindrome' do
      string = 'not_a_palindrome'

      result = palindromer.check(string)

      expect(result).to be false 
    end
  end
end