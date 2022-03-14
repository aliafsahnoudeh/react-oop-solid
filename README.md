## What is this project

It's just a sample application to show advanced object oriented programming and SOLID principles beside the React.js best practices.
Our web application just fetches a list of music bands and each band has a list of time slots to choose. We have a concert hall which can host only one band at a time, so by selecting a time slot for a specific band, other band's time slots which overlap will be disabled. Also each band can perform once so by selecting a time slot of a specific band, all of the other time slots of that band are going to be disabled.

## A summary of what I did and why, in case you were interested:

- I imagined this application is bigger than it is and tried to implement some concepts suited for that scale.

- Basically I tried to design the architecture into 3 main pieces. Somehow similar to MVP or MVVM.

1. UI/Presentation layer: (pages and components) are placed in /views and /components. Also I tried to respect seperated presentation principle and just keep the ui logic there.

2. Logic/Business layer: Logical components are in /services and /logic-components. With this approach I tried to separate service layer including API calls or maybe in future working with vendors and third-parties from application logic. These two groups have access to each other but don't have a tight coupling to the UI layer.

3. Model/State layer: For keeping models/types and global state of the application.

- Also tried to make a balance between Object Oriented Programming and semi-functional programming paradigms.

- Presentation layer has access to the business layer via an abstraction of interfaces. Except for the custom hooks, it was possible to create an abstraction for them as well but I thought it would be over engineering!

- I've implemented dependency injection with IOC container and constructor injection and used react context to inject them to the presentation layer. Both logic-components and services have their own ioc container and context. Maybe even using the context is not nesseccary since IOC container can do the injecting as well! Probably it's a good idea when we are separating our application in isolated moduels. But still just kept them to show the usage.

- I could keep the state in the parent component but just used a state management pieces to show the usage. I've chose zustand for its simplicity and combined it with immer for smoother reactivity of nested objects. It was possible to seperate company and time-slot or even groups inside state but again I guessed the data is not going to be the huge to do it.

## TODO

- The app definitely should have a lot more unit tests. Even we can have a couple of E2E tests as well.

- I tried to use a combination of global and scoped styling with SCSS. It could be implemented much nicer with more nesting and the usage of mixins. Also there are some components just for making a consitent and reuseable styling for components, like Layout.tsx or CardLayout.tsx.

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
