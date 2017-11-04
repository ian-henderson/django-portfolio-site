from django.shortcuts import render


def home(request):
    context = {}
    return render(request, 'mysite/base.html', context)