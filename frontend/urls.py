
from django.urls import path
from . import views

urlpatterns = [
 path('',views.home,name='home'),
 path('base',views.base,name='base'),
 path('test',views.testform, name='test'),
 path('userlist',views.userList,name='userList'),
 path('useredit',views.userEdit,name='userEdit'),
 path('createuser/',views.createUser,name='createUser'),
 path('manualpayments',views.manualPayments,name='payments'),
 path('sales',views.sales,name='sales'),
]