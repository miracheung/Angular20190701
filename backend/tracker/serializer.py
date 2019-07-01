from rest_framework import serializers

from tracker.models import Expenses


class ExpensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenses
        fields = ('id','description', 'amount', 'types', 'date')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id','email', 'username', 'password')
