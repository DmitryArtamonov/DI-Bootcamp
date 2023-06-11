from rest_framework import serializers
from .models import Post

class PosrSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'category', 'published_date', 'last_update')