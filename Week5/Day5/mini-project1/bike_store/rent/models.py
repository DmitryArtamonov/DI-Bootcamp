from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Customer (models.Model):
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    phone_number = PhoneNumberField(null=True, blank=True)
    address = models.CharField(max_length=250, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    country = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class VehicleType(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.name


class VehicleSize(models.Model):
    name = models.CharField(max_length=20, null=True, blank=True)

    def __str__(self):
        return self.name


class Vehicle(models.Model):
    date_created = models.DateField(null=True, blank=True)
    real_cost = models.FloatField(null=True, blank=True)
    vehicle_type = models.ForeignKey(VehicleType, related_name='vehicles', on_delete=models.CASCADE)
    vehicle_size = models.ForeignKey(VehicleSize, related_name='vehicles', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.vehicle_type} {self.vehicle_size}'


class Rental(models.Model):
    rental_date = models.DateField(null=True, blank=True)
    return_date = models.DateField(null=True, blank=True)
    customer = models.ForeignKey(Customer, related_name='rentals', on_delete=models.CASCADE)
    vehicle = models.ForeignKey(Vehicle, related_name='rentals', on_delete=models.CASCADE)


class RentalRate(models.Model):
    daily_rate = models.FloatField(null=True, blank=True)
    vehicle_type = models.ForeignKey(VehicleType, related_name='rental_rates', on_delete=models.CASCADE)
    vehicle_size = models.ForeignKey(VehicleSize, related_name='rental_rates', on_delete=models.CASCADE)


class Address(models.Model):
    address = models.CharField(max_length=250, null=True, blank=True)
    address2 = models.CharField(max_length=250, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=True)
    country = models.CharField(max_length=50, null=True, blank=True)
    postal_code = models.IntegerField(null=True, blank=True)


class RentalStation(models.Model):
    # This model represents a location where vehicles will be stored, and where customers can come and rent or return them.(models.Model):
    # name
    capacity = models.IntegerField(null=True, blank=True)
    address = models.ForeignKey(Address, related_name='rental_stations', on_delete=models.CASCADE)


