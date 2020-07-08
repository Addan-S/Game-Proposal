console.log("Working...");


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Deck Class - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    class Deck 
    {
        constructor() 
        {
        this.deck = []; 
        this.cards_dealt = []; 
        } 

    
        create_deck() 
        {

            let card = (suit, value,) => 
            {
            this.suit = suit;
            this.value = value; 
            this.name = value + ' of ' + suit;

            return this.name;
            }

            let values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']; 
            let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
        
            
             for(let i = 0; i <  suits.length; i++)
            {
                for(let j = 0; j < values.length; j++)
                {                    
                    this.deck.push(card(suits[i], values[j])); 
                }

            }



            

        }

        print_deck()
        {
            if(this.deck.length == 0)
            {
                console.log("Deck has not been created yet.")
            }
            else
            {
                for(let a = 0; a < this.deck.length; a++)
                {
                    console.log(this.deck[a]);
                }
            } 
        }


        shuffle() 
        {
            let placeHolder, currentIndex = this.deck.length, randIndex; 
            while(currentIndex != 0)
            {
             randIndex = Math.floor(Math.random() * currentIndex);
             currentIndex -= 1;
             placeHolder = this.deck[currentIndex];
             this.deck[currentIndex] = this.deck[randIndex]
             this.deck[randIndex] = placeHolder;
             }
        }


        deal()
        {
            let dealt_card = this.deck.shift(); 
            this.cards_dealt.push(dealt_card); 
            return dealt_card; 
        }


    }

    deck1 = new Deck; 
    deck1.create_deck();
    deck1.print_deck();
    deck1.shuffle();
    console.log("")
    deck1.print_deck();
    


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Opponent Class - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    class Opponent {
        constructor() 
        {
            this.hand = [];
            this.funds = 5000;  
        }
    }








// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Function for adding to pot - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function roundAction() {

    }
