require("minitest/autorun")
require("minitest/rg")
require('pry')

require_relative('../card.rb')
require_relative('../testing_task_2.rb')

class TestCardGame < Minitest::Test

  def setup
    @card1 = Card.new("hearts", 10)
    @card2 = Card.new("clubs", 1)
    @card3 = Card.new("diamonds", 4)
    @card4 = Card.new("diamonds", 2)
    @cards = [@card1, @card2, @card3]

    @game = CardGame.new()
  end

  def test_check_for_ace()
    assert_equal(true, @game.check_for_ace(@card2))
    assert_equal(false, @game.check_for_ace(@card3))
  end

  def test_highest_card()
    assert_equal(@card1, @game.highest_card(@card1, @card3))
    assert_equal(@card3, @game.highest_card(@card3, @card4))
  end

  def test_cards_total
    assert_equal("You have a total of 15", @game.cards_total(@cards))
  end

end
