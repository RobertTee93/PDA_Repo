### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) #should be check_for_ace
    if card.value = 1 # should be another equals
      return true
    else
      return false
    end
  end




  dif highest_card(card1 card2) #should be def not dif, should be a comma between (card1, card2)
  if card1.value > card2.value
    return card.name #should be card1
  else
    card2 #should be return card2
  end
end
end #Too many ends should only be 1 for function and 1 for if statement



def self.cards_total(cards) #dont need the self just be cards_total
  total  #Should be total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total #Return should be outside of the for loop, total should be converted to string
  end
end


#class should have an end


```
