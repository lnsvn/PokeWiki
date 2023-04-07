# PokéWiki

## Description

PokéWiki is a web application developed by Team JSONs. This site is a Pokémon search engine designed to have a similar look and feel to the Pokémon TV show and games. Search for any Pokémon in the Pokédex by typing its name or number into the search. Then, you will be presented with the presented with the Pokémon's name, sprite, number, and types. Additionally, you can see a short description and a link to a Wikipedia page if you would like to learn more. There is also a feature to bookmark and load your favorite Pokémon, and a feature that give you a random Pokémon from the database. 

## Link to the Application

https://tcunningham203.github.io/Etsy-Pokedex/

## Table of Contents
- [Visuals](#visuals)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Collaborators](#collaborators)

## Visuals

The CSS for the header and white screen border was created using vector drawings. This allows the drawings to scale infinitely with screen sizes without losing quality. The area within the blue screen area, as well as the buttons, was created with the help of Materialize CSS. However, because the look of the website is very deliberate and going for a specific style, we had to write a lot of custom CSS to alter the Materialize CSS to do what we wanted. The website also changes based on various screen sizes- when the site becomes smaller, the header is altered and the logo's position is changed. The three buttons near the search bar are moved in a row below the search bar. Lastly, the information in the blue box is moved around to fit for a veritcal orientation. 

![AppScreenshot1](/assets/screenshots/WEBSITE-SCREENSHOT0.png?raw=true "Screenshot of Deployed Application- Instruction Screen")
![AppScreenshot2](/assets/screenshots/WEBSITE-SCREENSHOT.png?raw=true "Screenshot of Deployed Application- Results Screen")

## Usage
When you load up the site, the instructions for the user are available in the description box.

As the instructions say, if you know the name of a Pokémon or its number you can type it into the search.

The Pokémon's info is then displayed. Additonally, a link is provided that gives additional information about the etymology of the Pokémon, as well as its appearances in other media or lore significance in stories. 

You can press the button with the die on it to generate a random Pokémon.

If your favorite Pokémon is displayed, you can press the orange button to bookmark it. You can press the purple button to recall the bookmark.

## Roadmap
In this section, we'll briefly discuss some of the challenges and successes with the project, as well as goals for the future. 

In terms of motivations and goals, we wanted our Pokedex to focus primarily on fun facts about Pokemon, as opposed to a traditional pokedex which would focus on pokemon battling and collecting. To accomplish this, we wanted to take information from two existing sites: the PokeAPI and Wikipedia. Wikipedia gives our Pokedex access to additional information like etymology, media appearances, and lore significance- information that a regular pokedex wouldn't have. 

Originally, we considered using the Etsy API for development, so users could view Pokemon products as part of their searches. However, the Etsy API required several authentication steps and contact with the company, which was outside the scope of the time and resources available for this project. Although the Wikipedia API took the project in a different direction, we're very happy with the result and we feel our project remains distinct in its functionality. 

One of the biggest motivations for development was the visuals. We reviewed competition during our development and found existing pokedex projects to have a sterile, generic feel to them. We wanted to evoke the feeling of late 90’s technology and have visuals match those of the TV show and early games. Nostalgia is a large driving factor for our users, and we wanted to capitalize on that.   
 
Although we are happy with the current state of the project, we do have some additional goals we would consider implementing in the future. Here are just a few:

1. Add scraping to allow the wiki information to display directly on our website.
2. Have the type boxes dynamically change colors depending on the type in the box.
3. Add the ability to bookmark multiple pokemon instead of just one.
4. Add functionality to display shiny variants of pokemon images.
5. Replace images with higher resolution images.



## Credits
Materialize CSS

PokeAPI for Pokemon information

Wikipedia API for link in description box

## Collaborators
Team JSONs is composed of 4 collaborators. 

Tim Cunningham: HTML, CSS, Readme, Vector Drawings, Random Pokemon Function 
https://github.com/tcunningham203

Lauren Sullivan: HTML, CSS, Materialize CSS
https://github.com/lnsvn

Frank Olmsted: Javascript, PokeAPI work
https://github.com/frankolms

Sami Saqib: Javascript, WikiAPI work
https://github.com/SamiSaqib10

