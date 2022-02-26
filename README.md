## Running the server
Please go to the /server sub-directory and run:
```
npm i
```
And then
```
npm start
```
A server will start listening on port 4000
## Running the web client
Please go to the /web sub-directory and run:
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
## A summary of what I did and why, in case you were interested:

- I imagined this application is bigger than it is and tried to implement some concepts suited for that scale, regarding my limited time.

- Basically I tried to design the architecture into 3 main pieces. Somehow similar to MVP or MVVM.

1) UI/Presentation layer: (pages and components) are placed in /views and /components. Also I tried to respect seperated presentation principle and just keep the ui logic here.

2) Logic/Business layer: Logical components are in /services and /components-logic. With this approach I tried to separate service layer including API calls or maybe working with vendors and third-parties from application logic. These two groups have access to each other but don't have a tight coupling to UI layer.

3) Model/State layer: For keeping models/types and global state of the application.

- Also tried to make a balance between Object Oriented Programming and semi-functional programming paradigms.

- Presentation layer has access to the business layer via an abstraction of interfaces. Except for the custom hooks, it was possible to create an abstraction for them as well but I thought it would be over engineering!

- I've implemented dependency injection with IOC container and constructor injection and used react context to inject them to the presentation layer. Both components-logic and services have their own ioc container and context. Maybe even using the context is not nesseccary since IOC container can do the injecting as well, but just wanted to show that I understand the concept :)

- I could keep the state in the parent component but just used a state management pieces to show the usage. I've chose zustand for its simplicity and combined it with immer for smoother reactivity of nested objects. It was possible to seperate company and time-slot or even groups inside state but again I guessed the data is not going to be the huge to do it.

- The app definitely should have a lot more unit tests. Even we can have a couple of E2E tests as well.

- I tried to use a combination of global and scoped styling with SCSS. It could be implemented much nicer with more nesting and the usage of mixins. Also there are some components just for making a consitent and reuseable styling for components, like Layout.tsx or CardLayout.tsx.