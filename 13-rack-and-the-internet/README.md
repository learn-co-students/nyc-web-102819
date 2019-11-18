## Scope of Mod 2

* MVC - Model View Controller, architecture/design pattern
* RESTful routing
* parameters - how data gets sent into a web application
* forms
* styling and CSS
* databases and ActiveRecord, object relations

## Intro to the Internet

## Questions

- CRUD is an acronym that stands for **\_\_\_\_**, **\_\_\_\__**, **\_\_\_\_**, & **\_\_\_\_**

- The client sends a packet of information called a **\_** to the server which in turn sends back another packet of information called a **\_\_\_\_**.

- **\_\_\_\_**s are methods that communicate to the server which CRUD action we want to execute

- When we enter a URL into our web browser it sends a **\_\_\_\_** request to the server

- The **\_\_\_\_** and **\_\_\_\_** keys in the request headers are what tells our application which method to invoke

- When a method is invoked after an HTTP request it must respond with **\_\_\_\_** that details the markup for the webpage that the user sees.

## What is the Internet?

* a series of tubes - moving information through a physical infrastructure
* networks of networks of networks - computers hooked up to one another and communicating
* a flow of information - packets - that don't flow linearly

## What is the web?

* HTML - hypertext markup language
* utilized HTTP - hypertext transfer protocol

## Request/Response Cycle
> * <https://www.tutorialspoint.com/http/http_requests.htm>

- Request
- Response

## HTTP Verbs
> * <https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods>
> * <https://www.w3schools.com/tags/ref_httpmethods.asp>

  - GET
    - The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
  - POST
    - The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
  - PUT
    - The PUT method replaces all current representations of the target resource with the request payload.
  - PATCH
    - The PATCH method is used to apply partial modifications to a resource.
  - DELETE
    - The DELETE method deletes the specified resource.

## CRUD Actions
> Associate each CRUD action with its associated HTTP Verb
> * More Advanced: <https://thoughtbot.com/upcase/videos/rest>

- Create  ->  POST
- Read    ->  GET
- Update  ->  PATCH (PUT)
- Delete  ->  DELETE

## Rack
> * <https://medium.com/whynotio/what-is-rack-in-ruby-7e0615f1d9b6> 
> * More Advanced: <https://thoughtbot.com/upcase/videos/rack>

- a gem that allows our applications to speak to webservers (software designed to implement HTTP and WWW communication)
- an architecture with an interface that can be implmented by our applications


## RESTful routes
> * <http://www.restular.com/>
 
* a **route** is a combination of a path and an HTTP verb
