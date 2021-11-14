import React, {useEffect, useState} from 'react';


interface FlaskComponentProps {
}

const FLASK_ENDPOINT = "http://localhost:5000/"

const FlaskComponent: React.FC<FlaskComponentProps> = (props: FlaskComponentProps) => {
    const [message, setMessage] = useState<string | undefined>(undefined)

    // The first argument is the function that will run in the useEffect, and the second (an empty array)
    useEffect(() => {
        // The fetch function is asynchronous, and returns a promise.
        // To handle a promise, supply custom callback functions to the `then` and `catch` methods.
        fetch(FLASK_ENDPOINT)
            .then(response => response.json())
            .then((results: any) => {
                // View the results in the console
                console.log(results)

                setMessage(results.message);
            });

    }, []);

    if (message === undefined) {
        return null
    }

    return <h1>Message: {message}</h1>
};

export default FlaskComponent;
