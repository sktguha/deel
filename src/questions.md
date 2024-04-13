**Q1.:** What is the difference between Component and PureComponent?

Give an example where it might break my app.

**ANSWER:**<br>
So a Component is of course a standard React component with lifecycle methods. A pure component is essentially extra functionality on top of a component, where it blocks rerenders if a shallow comparision of the props and state returns them equal. Important thing is that its a shallow comparision. so if any property is changed at a nested level, it may easily miss it . so in such cases we need to define our own shouldComponentUpdate method

An example where it might break an app is, if we consider a TodoList component that has implemented pureComponet and it gets a todos prop which is an array. If the app pushes the new item to todos[], then the purecomponent won't get updated as the todos references hasn't changed.
One way of course is to update the todos[] reference itself, like [newTodo, ...todos] , but still its better not to use the pureComponent in the first place as it doesn't make sense here

Thus it is not advisable to use blindly pureComponent, as it may break the app.

**Q2.:** Context + ShouldComponentUpdate might be dangerous. Why is
that?
**ANSWER:**<br>
So Context + ShouldComponentUpdate combination can be risky in the sense of making the app complex and bloated and still remaining inefficient in terms of multiple rerenders

a) So whenever any value in context API changes, the consumers of the context are always updated. React doesn't do a granular comparision and smartly prevent any rerenders as such. Even with usage of shouldComponentUpdate , its not enough and these can get bypassed

Here a library like Redux really shines in that respect, where it performs much better in such cases

b) Thus it creates a performance problem in the app and makes it harder to reason about


**Q3.:** Describe 3 ways to pass information from a component to its
PARENT.

**ANSWER:**<br>
Three ways can be ,
a) Passing through a callback prop, like in my component example , the component can call a callback function with some data

b) Through state management solutions such as Redux, Mobx, xstate. In such cases its more powerful as the information can passed centrally to any component

c) We can use the inbuilt React context API itself to create and consume context, similar to external state management solutions

**Q4.:** Give 2 ways to prevent components from re-rendering.

**ANSWER:**<br>
a) one way is to implement the shouldComponentUpdate lifecycle method to like compare with previous props and state according to the logic and return false so that the app won't be rerendered

b) These are more indirect ways, so we can make use of immutable data structures so that the references remain the same, thus this way React won't rerender the component unnneccesarily . We can write it by hand using spread operators , array operators etc . we can also use immer which allows to write normal looking mutable code but transforms to immutable code under the hood

**Q5.:** What is a fragment and why do we need it? Give an example where it
might break my app.

**ANSWER:**<br>
So fragments help in grouping multiple children elements without adding extra nodes to the DOM. Thus acts as a lightweight wrapper not producing any extra elements. So its better than using html tags like div as that might lead to styles breaking, among other things. 

They also help in a smaller DOM size which is useful for speed and efficiency .

So there is an edge case where using a fragment can break an app
if there is a code like:
options.map((option)=>{
  return <><span>{option.title}</span><span>{option.name}</span></>
})

Here if the option.title is undefined then React won't be able to find the key for the fragment, as it depends on the first child to find the key. Thus it is important to add a key prop in such cases



**Q6.:** Give 3 examples of the HOC pattern.

**ANSWER:**<br>
a) withAuthentication:

A common use case for HOCs is handling authentication-related logic. we can create an withAuthentication HOC that wraps a component and ensures that it's only rendered when the user is authenticated. If the user is not authenticated, the HOC can redirect them to a login page.

b) Another example is creating an HOC that displays a loading indicator while data is being fetched asynchronously. This HOC can manage the loading state internally and render a loading spinner or message until the data is available. This is generally used in Redux state management using connect HOC of Redux, the API call is made by middleware, and the loading state change is done via the reducers

c) An HOC for error handling can catch errors that occur within the wrapped component and display an error message instead. It can also log the error or perform other error-handling tasks. Thus its an ErrorBoundary and we can implement the componentDidCatch lifecycle method, for example to implement such an ErrorBoundary 


**Q7.:** What's the difference in handling exceptions in promises,
callbacks and async…await?

**ANSWER:**<br>
Here are some differences in these methods, although all three have evolved to deal with processing async logic 

a) In promises we use the second function argument of .then to catch errors or use the .catch method 

b) In callback generally by accepted convention, the first argument is error one. so if an error occurs the first argument is populated with the error details

c) In async await , we use the try catch in javascript to catch errors and handle them as needed. 


**Q8.:** How many arguments does setState take and why is it async.

**ANSWER:**<br>
A setstate takes two arguments, the second being optional. The first argument can be multiple types such as an object or a function.

A setState is async because React batches the multiple state updates into a single one for maximum efficiency . 

**Q9.:** List the steps needed to migrate a Class to Function
Component.

**ANSWER:**<br>
This is not an exhaustive list but I will try to list down the major steps
a) Create new functional component with same name as the class one.
b) The logic in render method can be copied as the return value of the class component
c) Then the setState calls need to be converted to functional useState calls. Although we can mirror the class setState and keep all our state in a single object, but React functional component design suggests to keep the setState calls seperate

d) Convert the props of class components into the arguments of functional components

e) Change the lifecycle methods into their equivalent hooks methods using useEffect etc

f) Change the event listeners and use useCallback to prevent rerenders

g) Replace the class component instances by their functional component instances and test them. It is advisable to keep them behind a flag . Run unit tests and integration tests if available to check for regressions. Check performance also using React devtools , memory check using profiler

h) Update documentation and also inform sister teams once the migration is complete , that they need to use functional component


**Q10.:** List a few ways styles can be used with components.

**ANSWER:**<br>
Few ways can be 

a) Inline styles: This is the default and basic option. We can assign a style prop as an object, and add our styles. This is not that great a solution as it prevents reusabillity and also prevents us from using the full power of css language

b) CSS Modules: using css modules we can import the css class names as js names and can safely assign them to individual React elements without fear of naming collisions as they are local to the component itself.

c) Css-in-jS: we can using some libraries as emotion etc to write our CSS in Javascript itself instead of individual css files. So we can get back styled divs for example and can use those tags in our code



**Q11.:** How to render an HTML string coming from the server.

**ANSWER:**<br>
There can be multiple ways to do it 

a) One is to use the dangerouslySetInnerHTML attribute , so this is very straightforward and can be used to render the string. However as the name suggests it is very risky to do so and exposes the app to security bugs. To reduce the risk we can sanitise it beforehand , ex- using libraries as DOMPurify

b) Another way can be to essentially use a parser and parse the html string and render it by hand. This is a detailed topic but to describe it briefly the incoming html string can be parsed using inbuilt xml parser available in the browser ( assuming a browser environment ) and then it can create the nodes , provided they are in a whitelist of safe nodes ( `<script>` tag for example is not included ) and whitelisted attributes
