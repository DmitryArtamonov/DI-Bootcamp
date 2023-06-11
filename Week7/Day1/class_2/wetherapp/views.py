from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.status import (HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT)
from .models import Report
from .serializers import ReportSerializer


class ReportView(APIView):

    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        queryset = Report.objects.all()
        serializer = ReportSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = ReportSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)

        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def put(self, request, pk, *args, **kwargs):
        article = Report.objects.get(pk=pk)
        serializer = ReportSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        article = Report.objects.get(pk=pk)
        article.delete()
        return Response(status=HTTP_204_NO_CONTENT)
