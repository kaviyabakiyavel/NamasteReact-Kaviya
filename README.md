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
- Two types of Routing in wwe page 
      - client side routing (out local application is client side routing , because when we change the menu request not going to backend / server )
      - server side routing (make request to server and index.html comes from server side )
- Single page application nothing but render all the components in one app doesn't make any api call to the backend to load the new UI 
