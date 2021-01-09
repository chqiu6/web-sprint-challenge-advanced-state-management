1. What problem does the context API help solve?
Context API help solves passing down props from parent to children components. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are functions that are dispatched to our reducers.
reducers takes our previous state, action and returns a new state. It takes a action type and our payload that's being provided for it.
store is our state where we store all our data. It is called a single source of truth because our UI updates if we change our state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global while component state is local. Application state will be the whole app while component state is just in one component.
When using either think whether you're planning to use it in just one component or the whole app.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk is a middleware that makes our programming code async. The changes occur happen before our actions are sent to our reducer. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!
My favorite state management system I've learned would be the Context because its simplicity and cleaness. Redux is challenging for me to learn but it can be really useful in larger applications. 
