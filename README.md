# Namaste React

# Parcel https://parceljs.org/

- Create Dev Build
- Local Server
- HMR = Hot module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Two Types of Export/Imports

- Default export and import
  export default component
  import component from "path"

- Named Export/Import
  export const component;
  import {component} from "path"

  # React Hooks

  utility function

- useState()
- useEffect()
- Reconciliation Algorithm -> React Fiber (React 16) https://github.com/acdlite/react-fiber-architecture
- Router
- createBrowserRouter
- RouterProvider
- Outlet
- Link
- useRouteError
- Two types of Routing in web page - client side routing (out local application is client side routing , because when we change the menu request not going to backend / server ) - server side routing (make request to server and index.html comes from server side )
- Single page application nothing but render all the components in one app doesn't make any api call to the backend to load the new UI

//Different word for reducing bundling size
-Chunking
-Code splitting
-Dynamic bundling
-Lazy Loading
-On Demand Loading

//Different way of writing CSS
-Styled component (Mostly used on industry)
-MUI react library
-Bootstrap
-Chakra UI
-Sass
-Tailwind css

//Higher order component -> its a function takes a component and returns a new component

//controlled and uncontrolled component
-Controlled components refer to the components where the state and behaviors are controlled by Parent components
-Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves

- Props drilling
- Avoid props drilling - one or two level is fine . when it s goes into more depth its not good

- UseContext avoid props drilling and you can able to access anywhere in the application
- How to access use-context in functional based component
  const { logginuser} = useContext(UserContext)
  console.log(logginuser)
- How to use use-context in class based component  
  <UserContext.Consumer>
  {(data) => console.log(data)}
  </UserContext.Consumer>
- we can update the user value and you can pass the value to all the nested child by using <user.Provider>

- What is difference b/w context and redux
- Context offered by react , redux is external package we need to install in our project
- by using context you can developed mid scale application

Episode 12  
- Redux - works in data layer
- Redux and react are different libraries
- Zustand - used for state management - quite lite weight library
- Redux offer easy debugging , Redux dev tool 
- Modern web development 
  Two ways we can write redux older way 
  and new way  React-Redux , React-ToolKit 


# Redux Toolkit
- Install React-Redux 
- Install Redux-Toolkit 
- Build our store  - appStore.js
- connect our store to our app - app.js
- slice(create slice) - eg - cardSlice.js
- dispatch(action)
- Selector 