from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.status import (HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT)
from datetime import datetime

from .models import Student
from .serializers import StudentSerializer

class Student_list(APIView):

    def get(self, request, *args, **kwargs):
        date_joined_str = self.request.query_params.get('date_joined')

        if date_joined_str:
            date_joined_dt = datetime.strptime(date_joined_str, "%Y-%m-%d").date()
            queryset = Student.objects.filter(date_joined__date=date_joined_dt)
        else:
            queryset = Student.objects.all()

        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = StudentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)

        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class Student_detail(APIView):

    def get(self, request, pk, *args, **kwargs):

        student = get_object_or_404(Student, pk=pk)
        serializer = StudentSerializer(student)
        return Response(serializer.data, status=HTTP_200_OK)


    def put(self, request, pk, *args, **kwargs):
        student = Student.objects.get(pk=pk)
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


    def delete(self, request, pk, *args, **kwargs):
        student = Student.objects.get(pk=pk)
        student.delete()
        return Response(status=HTTP_204_NO_CONTENT)





