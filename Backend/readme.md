get '/car-parks'
get '/car-park' ## send a query parameter with car space name eg park = car space name.... this gets a specific park
get 'car-park/available'  ## returns parks with open spaces
patch '/book-park' ## the query parameters to send are = id, park, username  note id should be set to the email