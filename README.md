## What is the purpose of this project?

It's just a sample application to show how to leverage advanced object oriented programming, SOLID, compositions and component based design along React.js best practices to gain cleaner code structure, more maintainable and reusable code base also better code coherence.

## What does this application do?

Our web application fetches a list of music bands. Each band has a list of time slots to choose. We have a concert hall which can host only one band at a time, so by selecting a time slot for a specific band, other band's time slots which overlap that time will be disabled. Also each band can perform once, so by selecting a time slot of a specific band, all of the other time slots of that band are going to be disabled.

## A summary of what I did and why, in case you were interested:

For diving deeper into this topic and get more details please have look at this.

But as a summary I can mention these:

- I imagined this application is bigger than it is and tried to implement some concepts suited for that scale.

- Basically I tried to design an architecture into 3 main layers. Somehow similar to MVP or MVVM.

1. UI/Presentation layer: (pages and components) are placed in /views and /components. Also I tried to respect the [separated presentation principle](https://martinfowler.com/eaaDev/SeparatedPresentation.html) and just keep the UI logic there.

2. Logic/Business layer: Logical components are in /services and /logical-components. With this approach I tried to separate service logic including API calls or maybe in future working with vendors and third-parties from application logic. These two groups have access to each other loosely and via interfaces. Also they don't have a tight coupling to the UI layer.

3. Model/State layer: For keeping models/types and global state of the application.

- Also I tried to make a balance between Object Oriented Programming and semi-functional programming paradigms.

- Presentation layer has access to the business layer via an abstraction of interfaces. Except for the custom hooks, it was possible to create an abstraction for them as well but I thought it would be over engineering!

- I've implemented dependency injection with IOC container and constructor injection and used react context to inject them to the presentation layer. Both logical-components and services have their own IOC container and context. Maybe even using the context is not necessary since the IOC container can do the injecting as well! Probably it's a good idea when we are separating our application in isolated modules. But still I just kept them to show the usage!

- I could keep the state in the parent component but just used a state management piece to show the usage. I've chosen [zustand](https://github.com/pmndrs/zustand) for its simplicity and combined it with [immer.js](https://github.com/immerjs/immer) for smoother reactivity of nested objects. It was possible to separate companies and time-slots or even groups inside the state but again I guessed the data is not going to be huge so I tried to keep it simple.

## TODO

- The app definitely should have a lot more unit tests. We can have a couple of E2E tests as well.

- I tried to use a combination of global and scoped styling with SCSS. It could be implemented much nicer with more nesting and the usage of mixins. Also there are some components just for making a consistent and reusable styling for components, like Layout.tsx or CardLayout.tsx.

## Running the web client

Please run:

```
npm i
```

And then

```
npm start
```

Application will start on port 3000
And for running tests:

```
npm run test
```

## Running the server

Please run

```
npm server:start
```

A server will start listening on port 4000
