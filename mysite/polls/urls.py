from django.conf.urls import url
from . import views

app_name = 'polls'
urlpatterns = [
    #ex: /polls/
    url('', views.IndexVeiw.as_view(), name='index'),    
    #ex /polls/5/
    url('<int:pk>/', views,DetailView.as_view(), name='detail'),
    #ex /polls/5/results/
    url('<int:pk>/results/' views.ResultsView.as_view(), name='results'),
    #ex: /polls/5/vote/
    url('<int:question_id>/vote/', views.vote, name='vote'),
    
]

