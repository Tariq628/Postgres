from django.http.response import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import Test
from django.shortcuts import render, HttpResponse, redirect

from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import CsrfViewMiddleware

import json
# Create your views here.


def testform(request):
    return render(request, 'testform.html')


@csrf_exempt
def testform(request):
    if request.is_ajax():
        print(request.body)
        request_data = json.loads(request.body)
        del request_data['csrfmiddlewaretoken']
        new = Test.objects.create(**request_data)

        return HttpResponse("OK")
    return render(request,"testform.html")

# def testform(request):
#     if request.method == 'POST':
#         firstName=request.POST.get('firstName')
#         lastName=request.POST.get('lastName')
#         print(firstName, lastName)
#         new = Test(firstName=firstName, lastName = lastName)
#         new.save()
#     return render(request,"testform.html")

def base(request):
    return render(request, 'base.html')

def home(request):
    return render(request,'index.html')

def userList(request):
    return render(request, 'user-management/list.html')

# def userEdit(request):
#     if request.is_ajax():
#         print(request.body)
#         request_data = json.loads(request.body)
#         del request_data['csrfmiddlewaretoken']
#         # new = Test.objects.create(**request_data)

#         return HttpResponse("OK")
#     return render(request, 'user-management/view.html')
def userEdit(request):
    pass
#     if request.method == "POST":
#     username = request.POST["username"]
#     fname = request.POST["fname"]
#     lname = request.POST["lname"]
#     email = request.POST["email"]
#     password1 = request.POST["password1"]
#     password2 = request.POST["password2"]
#     if len(username) < 10:
#         messages.error(request, "Username must be greatrer than 10 characters")
#         return redirect("home")
#     if password1 != password2:
#         messages.error(request, "Your passwords didn't match")
#         return redirect("home")
#     if not username.isalnum():
#         messages.error(request, "Username only should be lower letters or numbers")
#         return redirect("home")

#     myuser = User.objects.create_user(username, email, password1)
#     myuser.first_name = fname
#     myuser.last_name = lname
#     myuser.save()
#     messages.success(request, "Your iCoder account has been successfully created")
#     return redirect("home")
# else:
#     return HttpResponse("404 - Not Found")

    return render(request, 'user-management/view.html')

def createUser(request):
    if request.method == "POST":
        f_name = request.POST.get("f_name")
        l_name = request.POST.get("l_name")
        email = request.POST.get("email")
        contact = request.POST.get("contact")
        pass1 = request.POST.get("pass1")
        pass2 = request.POST.get("pass2")
        address = request.POST.get("address")
        country = request.POST.get("country")
        if pass1 == pass2:
            print(f_name, l_name, email, pass1, contact, address, country)
            myuser = User.objects.create_user(f_name, email, pass1)
            myuser.first_name = f_name
            myuser.last_name = l_name
            myuser.save()
        else:
            return HttpResponse("Psssworf didn't match")


    return render(request, 'user-management/create-user.html')

def manualPayments(request):
    return render(request, 'user-management/manual-payments.html')

def sales(request):
    return render(request, 'sales.html')
