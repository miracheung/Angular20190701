from django.db import models

# Create your models here.
class Expenses(models.Model):
    # ID, Name, Speaker, Venue, Duration
    description = models.CharField(max_length=100)
    amount = models.PositiveIntegerField()
    types = models.CharField(max_length=100)
    date =models.DateField(auto_now=False, auto_now_add=False)

    class Meta:
        verbose_name_plural = 'Expenses'


# class User(models.Model):
#     # ID, Name, Speaker, Venue, Duration
#     email = models.CharField(max_length=100,unique=True)
#     username = models.CharField(max_length=100,unique=True)
#     password = models.CharField(max_length=100)





# from django.db import models

# # Create your models here.
# class Expenses(models.Model):
#     # ID, Name, Speaker, Venue, Duration
#     UTILITY = 'U'
#     GROCERY = 'G'
#     RESTAURANT = 'R'
#     TYPE_OF_CHOICES = [
#       (UTILITY, 'Utility'),
#       (GROCERY, 'Grocery'),
#       (RESTAURANT, 'Restaurant'),
#     ]
#     description = models.CharField(max_length=100)
#     amount = models.PositiveIntegerField()
#     # types = models.CharField(max_length=100)
#     types = models.CharField(
#         max_length=100,
#         choices=TYPE_OF_CHOICES,
#         default=UTILITY,
#     )
#     date =models.DateField(auto_now=False, auto_now_add=False)
