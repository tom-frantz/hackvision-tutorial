import {NONAME} from "dns";
import React, {useEffect, useState} from 'react';


interface BulbasaurComponentProps {
}

interface Pokemon {
    name: string;
    imageURL: string;
}

const BULBASAUR_ENDPOINT = "https://pokeapi.co/api/v2/pokemon/1"

const BulbasaurComponent: React.FC<BulbasaurComponentProps> = (props: BulbasaurComponentProps) => {
    const [bulbasaur, setBulbasaur] = useState<Pokemon | undefined>(undefined)

    // The first argument is the function that will run in the useEffect, and the second (an empty array)
    useEffect(() => {
        // The fetch function is asynchronous, and returns a promise.
        // To handle a promise, supply custom callback functions to the `then` and `catch` methods.
        fetch(BULBASAUR_ENDPOINT)
            .then(response => response.json())
            .then((results: any) => {
                // View the results in the console
                console.log(results)

                // Set the name and the sprite. You can find out what paths to from the API documentation.
                setBulbasaur({
                    name: results.name,
                    imageURL: results.sprites.front_default
                });
            });

    }, []);

    // Return nothing if there's no result yet.
    if (bulbasaur === undefined) {
        return null
    }

    // Display Bulbasaur's name and his image.
    return <div>
        <h1>{bulbasaur?.name}</h1>
        <img src={bulbasaur?.imageURL}/>
    </div>
};

export default BulbasaurComponent;
