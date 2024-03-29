# API Cheatsheet 
This is the API Cheat sheet. In this cheat sheet, we'll show you some basics on how to call and consume 3rd party APIs for your project

## Getting Started
This Cheat sheet will refer to the [Pokemon API, or PokeAPI](https://pokeapi.co/) for it's examples

## Testing an API 
To test APIs, in most cases, you can simply call them in your browser.

Try, for example, [https://pokeapi.co/api/v2/pokemon/1](https://pokeapi.co/api/v2/pokemon/1). This API call will fetch the results for Bulbasaur! It may be overwhelming when you get this response, as it will likely be a large wall of JSON, but don't worry, executing the same call in [PokeAPI](https://pokeapi.co/) will auto collapse all the field to make it more manageable

## JSON 
Most API responses will return some structure in JSON. This is pretty commonplace amongst the industry, and JSON can be easily navigated with libraries or natively in most languages. [Go here to learn more about JSON](https://www.w3schools.com/js/js_json_intro.asp)

## Consuming an API.
TODO

## Consuming your own API
To connect to your own API, you can follow the same approach as above. It follows all the same principles, you'll just access localhost instead of any other servers.

You may have CORS errors (Cross-Origin Resource Sharing), but this is easily solvable working with flask. Simply use the flask-cors package and wrap your app appropriately. For more information, follow the example in app.py

See the FlaskComponent.tsx for a working example