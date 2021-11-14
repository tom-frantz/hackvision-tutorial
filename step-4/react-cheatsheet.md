# React Cheatsheet
## Getting Started
It's important to make sure you have installed Node & NPM when working with React. Both can be installed by downloading Node from [here](https://nodejs.org/en/download/).

As a general note of practice, it's best to download the LTS version, as most libraries will take time to update to the latest version.
## Creating a project
To create a new React project (with typescript)
```
npx create-react-app --template=typescript project
```

To create a new React project without typescript
```
npx create-react-app step-2
```

## Running a project
To run a project once it's completely ready:
```
npm run start
```

## Updating dependencies
When installing 3rd party packages (such as Material-UI or Redux), it's important to install new node packages with the following command 
```
npm install
```

## React and Building UIs
### Props and state
In React, components are rendered out directly based on props and state. They will render JSX, using those values.

State is controlled data within react, and whenever it's updated, the component with the state will automatically rerender, without you manually having to call a rerender.

Props act similarly to state, but they're managed by other components. Whenever a React component is rerendered, it will check to see if it's props have changed, and then rerender accordingly.

### Creating components
- Make a new file `PlaceholderName.tsx`
- Write an interface for the component's props
```typescript
interface PlaceholderNameProps {
    prop1: string
    prop2: number
}
```

- Write out the component body. Feel free to make it however you want
```typescript jsx
const PlaceholderName = (props: PlaceholderNameProps) => {
    return <h1>Hello! prop one: {props.prop1}, prop two: {props.prop2}</h1>
}

export default PlaceholderName
```

[You can find more about React here](https://beta.reactjs.org/learn)