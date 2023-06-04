from django import forms
from .models import Customer

class CustomerForm(forms.ModelForm):

    class Meta:
        model = Customer
        fields = ['first_name', 'last_name']

            #('__all__')

    # first_name = forms.CharField(max_length=50)
    # last_name = forms.CharField(max_length=50)

    # def save(self):
    # #  security feature: save only validated data
    #
    #     new_customer = Customer.object.create(
    #         first_name=self.cleaned_data['first_name'],
    #         last_name=self.cleaned_data['last_name']
    #         )
    #
    #     return new_customer

