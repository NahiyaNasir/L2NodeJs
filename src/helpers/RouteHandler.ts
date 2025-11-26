import { IncomingMessage, ServerResponse } from "http";

 export  type RouteHandler= (req:IncomingMessage,res:ServerResponse)=> void
 export const routes:Map<string, Map<string,RouteHandler>>=new Map()
  function addRoutes(method:string,path:string,handler:RouteHandler){
     if(!routes.has(method)) routes.set(method,new Map())
         routes.get(method)!.set(path,handler)
        
  }
    export  default  addRoutes


//     | Part                       | Meaning                                           |
//| -------------------------- | ------------------------------------------------- |
//? | `RouteHandler`             | defines the type of a route handler function      |
//? | `routes`                   | a map storing all routes, grouped by HTTP method  |
//? | `addRoutes`                | function to add a route into the map              |
//? | `export default addRoutes` | allows importing this function as the main export |
