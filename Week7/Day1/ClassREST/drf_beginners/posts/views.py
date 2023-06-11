from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework.response import

from .models import Post
from .serializer import PosrSerializer

class PostView(APIView):

    def get(self, request, *args, **kwargs):



# @csrf_exempt
# def post_view(request):
#     queryset = Post.objects.all()
#     serializer = PosrSerializer(queryset, many=True)
#     return JsonResponse(data = serializer.data, safe=False)



# Create your views here.
