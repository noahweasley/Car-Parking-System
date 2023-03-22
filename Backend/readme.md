# Backend for the car park space booking app


## Installation

clone the repository and run npm or yarn install 

```bash
npm install or yarn install
```

## Endpoints

```python
import foobar

# returns all car parks
get /api/car-parks

# returns car parks with open or available spaces
get /api/available

# returns a specific car park
get '/api/car-park?park-name'

# books space for a user while saving details
patch '/api/book-park?'
```
 ### NOTE

The query parameters to send for patch book-park are = id, park, username  note id should be set to the email.

get 'api/car-park' send a query parameter with car space name eg park = car space name.... this gets a specific park. eg api/car-park?noahs ark car park


## Backend Base Url

https://car-spacebooking.onrender.com/






get '/api/car-parks'
get '/car-park' ## send a query parameter with car space name eg park = car space name.... this gets a specific park
get 'car-park/available'  ## returns parks with open spaces
patch '/book-park' ## the query parameters to send are = id, park, username  note id should be set to the email
