from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from students_app.views import Student_list, Student_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('students/<int:pk>/', Student_detail.as_view(), name='student_detail'),
    path('students/', Student_list.as_view(), name = 'students_list')
]

if settings.DEBUG:
   urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
