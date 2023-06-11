from django import forms
from .models import Film, Director, Review, Producer
from django.forms import modelformset_factory

class FilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = ('__all__')

class DirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = ('__all__')

class ReviewForm(forms.ModelForm):
    rating = forms.ChoiceField(
        choices=[(i, str(i)) for i in range(1, 6)],
        widget=forms.RadioSelect()
    )

    class Meta:
        model = Review
        fields = ('__all__')


class ProducerForm(forms.ModelForm):
    class Meta:
        model = Producer
        fields = ('__all__')

PostFormSet = modelformset_factory(Producer, form = ProducerForm)