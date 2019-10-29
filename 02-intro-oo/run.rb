require 'pry'

class BankAccount
  attr_reader :account_number#, :balance # <= getter macro
  # attr_writer :balance # <= setter macro
  attr_accessor :balance # <= both getter and setter

  @@all = []

  def initialize(account_number, balance)
    # thing = "thing"
    @account_number = account_number
    @balance = balance

    @@all << self
  end

  def deposit(amount)
    @balance += amount
  end

  def withdraw(amount)
    # @balance -= amount
    self.deposit(-amount)
  end

  def self.all
    @@all
  end

  # def balance # <= getter
  #   @balance
  # end

  # def balance=(amount) # <= setter
  #   @balance = amount
  # end

  # def account_number # <= getter
  #   @account_number
  # end

  # def another_method
  #   puts @account_number
  #   # puts thing
  # end
  
end # class BankAccount

b1 = BankAccount.new(1, 200)
BankAccount.new(2, 300)
BankAccount.new(3, 500)

BankAccount.all

puts 'outside the BankAccount class'

binding.pry
'kthxbye'



# bank_account_1 = {balance: 100, customer_id: 123, account_number: 134}
# bank_account_2 = {balance: 200, customer_id: 567, account_number: 2365}

# def deposit(bank_account, amount)
#   bank_account[:balance] += amount
# end
