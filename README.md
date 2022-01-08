# Indian Poker

Just a small project to replicate the gambling game called Indian Poker. I learnt of the existence of this game from the anime adaptation of [Kakegurui - Compulsive gambler](https://en.wikipedia.org/wiki/Kakegurui_%E2%80%93_Compulsive_Gambler)

## Various warnings

There is no end-to-end encryption or anything like that. In general, this is a very unsecure project so if you are going to use this for real, make sure to implement proper security protocols. Maybe ill do this one day, probably not. Tale of the story is that this project isnt meant to be secure

Im still finding a way on how to maintain a repo and its docs, please try to assist me if possible!

## How to play actual Indian Poker

Following information came from [this wiki](https://kakegurui.fandom.com/wiki/Indian_Poker)

Each group of 4 plays with a 40 card deck with all the jokers and face cards removed. The dealer will pass out the first card, which players may look at. A second card will then be dealt, which the player may not look at, and has to place on their forehead. The strongest match is a pair, where the numbers match, the next strongest is a suit, which is self-explanatory, and the weakest is a pig, where neither number nor suit match. If multiple players have the same hand then the largest number wins. When placing bets players can either call, raise or fold.

<details>
        <summary>Fake game</summary>
        This game will be played with two players for the sake of being short, but in ordinary scenarios will be played with 4 players

        D = Dealer
        P1 = Player 1
        P2 = Player 2

        D issues two cards to P1 and P2
        Both players raise a card to their forehead
        P1 places a 5-D on their forehead
        P2 places a 4-S on their forehead
        Both players put down their card without seeing it
        P1 starts with a bet of $100
        P2 raises to $150
        P1 calls
        Both players reveal their cards
        P1 had a 5-D and a 2-H
        P2 had a 4-S and a 8-S
        P1 had a pig, so they loose
        P2 had a suit, so they win
</details>