from django.shortcuts import render, get_object_or_404
from .models import *
from django.views.generic import View
from .forms import CustomerForm


def get_all_rentals(request):
    rentals_list = list(Rental.objects.filter(return_date__isnull=True))
    rentals_list.extend(list(Rental.objects.filter(return_date__isnull=False).order_by('rental_date')))
    context = {'rental_list': rentals_list}
    return render(request, 'rental_list.html', context)


def get_rental(request, pk):
    rental = get_object_or_404(Rental, id=pk)
    context = {'rental': rental}
    return render(request, 'rental.html', context)


def get_all_customers(request):
    customers = Customer.objects.all().order_by('last_name', 'first_name')
    context = {'customers': customers}
    return render(request, 'customers.html', context)


def get_customer(request, pk):
    customer = get_object_or_404(Customer, id=pk)
    context = {'customer': customer}
    return render(request, 'customer.html', context)


def get_vehicles_by_groups(request):
    vehicles = Vehicle.objects.all()
    groups = VehicleType.objects.all()
    context = {'vehicles': vehicles,
               'groups': groups}
    return render(request, 'vehicles.html', context)


def get_vehicle(request, pk):
    vehicle = get_object_or_404(Vehicle, id=pk)
    is_rented = bool(Rental.objects.filter(vehicle=pk, return_date__isnull=True))
    context = {'vehicle': vehicle, 'is_rented': is_rented}
    return render(request, 'vehicle.html', context)

class AddCustomer(View):
    def get(self, request):
        form = CustomerForm()
        return render(request, 'customer_add.html', context={'form': form} )

    def post(self, request):
        data = request.POST
        print('oooooooooooooooo')
        filled_form = CustomerForm(data)
        filled_form.save()

        form = CustomerForm()
        return render(request, 'customer_add.html', context={'form': form} )



