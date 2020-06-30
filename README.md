# Poker <hr>
Since this is the first game I will be building, I chose to keep it somewhat simple and attempt to make a poker game. I'll start off by having the user face off against one computer and gradually add more contenders after I can make it function in a 1 v 1 match. <hr>

### Poker Origins 
As early as the sixteenth century, Germans played a bluffing game called "Pochen." It later developed into a French version, called "Poque," which was eventually brought over to New Orleans and played on the riverboats that plied the Mississippi. 

In the 1830s, the game was refined further and became known as Poker. During the Civil War, the key rule about drawing cards to improve one's hand was added. A variation - Stud Poker - appeared at about the same time. There are hundreds of versions of Poker, and the game is played not only in private homes, but also in countless Poker rooms at famous casinos. Poker can be played socially for pennies or matchsticks, or professionally for thousands of dollars.

There is plenty of luck in Poker, but the game requires incredibly great skill as well, and each player is the master of his own fate.

Source: [Basics Of Poker](https://bicyclecards.com/how-to-play/basics-of-poker/)
<hr>

### Card Values/Scoring
*For this variation of Poker I will not be including wildcards such as,  a joker, the two one-eyed jacks, or the four deuces. This means that the game will be played without the possibility of getting a hand with 5 of a kind. For those not familiar with how to get 5 of a kind here it is.* <br>

**Five of a Kind:** *This is the highest possible hand and can occur only in games where at least one card is wild, such as a joker, the two one-eyed jacks, or the four deuces. Examples of five of a kind would be four 10s and a wild card or two queens and three wild cards.* **We will not be playing with this hand.** <br>
#### Various hands you can get  (in descending order):

1. **Straight Flush:** This is the highest possible hand when only the standard pack is used, and there are no wild cards. A straight flush consists of five cards of the same suit in sequence, such as 10, 9, 8, 7, 6 of hearts. The highest-ranking straight flush is the A, K, Q, J, and 10 of one suit, and this combination has a special name: a royal flush or a royal straight flush. The odds on being dealt this hand are 1 in almost 650,000. <br> <br>

2. **Four of a Kind:** This is the next highest hand, and it ranks just below a straight flush. An example is four aces or four 3s. It does not matter what the fifth, unmatched card is.
<br> <br>

3. **Full House:** This colorful hand is made up of three cards of one rank and two cards of another rank, such as three 8s and two 4s, or three aces and two 6s. <br> <br>

4. **Flush:** Five cards, all of the same suit, but not all in sequence, is a flush. An example is Q, 10, 7, 6, and 2 of clubs. <br> <br>

5. **Straight:** Five cards in sequence, but not all of the same suit is a straight. An example is 9♥(hearts), 8♣(club), 7♠(spade), 6♦(diamond), 5♥(heart). <br> <br>

6. **Three of a Kind:** This combination contains three cards of the same rank, and the other two cards each of a different rank, such as three jacks, a seven, and a four. <br> <br>

7. **Two Pairs:** This hand contains a pair of one rank and another pair of a different rank, plus any fifth card of a different rank, such as Q, Q, 7, 7, 4. <br> <br>

8. **One Pair:** This frequent combination contains just one pair with the other three cards being of different rank. An example is 10, 10, K, 4, 3. <br> <br>

9. **No Pair:**  This very common hand contains "nothing." None of the five cards pair up, nor are all five cards of the same suit or consecutive in rank. When more than one player has no pair, the hands are rated by the highest card each hand contains, so that an ace-high hand beats a king-high hand, and so on. <br> <br>

**Side Note:** Two hands that are identical, card for card, are tied since the suits have no relative rank in Poker. In such a case, the tied players split the pot. Note that if two hands contain the same high pair, then the ranking of the next card in the hands determines which one wins. For example: 9, 9, 7, 4, 2 beats 9, 9, 5, 3, 2. Likewise, two hands that have identical pairs would be decided by the fifth card. For example: Q, Q, 6, 6, J beats Q, Q, 6, 6, 10.Two hands that are identical, card for card, are tied since the suits have no relative rank in Poker. In such a case, the tied players split the pot. Note that if two hands contain the same high pair, then the ranking of the next card in the hands determines which one wins. For example: 9, 9, 7, 4, 2 beats 9, 9, 5, 3, 2. Likewise, two hands that have identical pairs would be decided by the fifth card. For example: Q, Q, 6, 6, J beats Q, Q, 6, 6, 10. <br> <br> Source: [Basics Of Poker](https://bicyclecards.com/how-to-play/basics-of-poker/) <hr>

### Card Hierarchy: 
1. Ace
2. King
3. Queen
4. Jack
5. 10
6. 9
7. 8
8. 7
9. 6
10. 5
11. 4
12. 3
13. 2
14. 1 
<hr>


### Technical Challenges
- One challenge I know that I have to overcome is creating the logic for the card values/scoring.
- Another challenge I can already see is knowing when there's a winner (maybe by setting a max score and first to reach it wins; or there can be a timer that the user sets and whoever has the most points/money at the end wins.)
- There are a lot of different hand combinations...creating that will be a challenge. 
<hr>

### Wireframe
![](./wireframe/WF-Image.png) <hr>


### Additional Features 

<hr>

### Timeline 





