
1. Set up Django and Django Rest Framework (DRF): Created a Django project and a 'notes' app. Defined a simple Note model with user authentication. (notes/models.py)

2. Create serializer and APIView: Defined a serializer to convert the Note instances to JSON and an APIView to handle HTTP requests for the Note model. Ensured only authenticated users can post notes. (notes/serializers.py, notes/views.py)

3. Define URL routes: Defined URL routes for our API endpoints. (notes/urls.py, NotesAPI/urls.py)

4. Fetch API in JavaScript: Used JavaScript's Fetch API to make HTTP requests from our HTML page to the Django REST API. (templates/index.html)

5. Handle CSRF token and session cookies: Manually fetched the CSRF token from the cookie and included it in the request header. Also sent the session cookie to authenticate the user in the API requests. (templates/index.html)

6. Render HTML in Django view: Added a new Django view to render the HTML page and updated the URLs to include this view. (notes/views.py, NotesAPI/urls.py)

7. Handle CORS (if needed): To allow cross-origin requests, installed and configured the django-cors-headers package. (settings.py)

8. Display the data: Created a form and a list in our HTML page. Handled form submission in JavaScript and fetched and displayed the notes using the Fetch API. (templates/index.html)


Fot logging:
username - user_test
pass - 1234