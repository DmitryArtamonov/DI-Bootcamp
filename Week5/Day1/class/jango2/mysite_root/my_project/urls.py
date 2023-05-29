from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('polls/', include('polls.urls')), # include the urls.py from the polls application
    path('', include('blog.urls'))
]