from django.shortcuts import render


def index(request):
    context = {}
    return render(request, 'mysite/index.html', context)