from django.urls import path
from .views import AppCreateView
from rest_framework.routers import SimpleRouter
router = SimpleRouter()
router.register('', AppCreateView, basename='app')
urlpatterns = router.urls

# urlpatterns = [
#     path('', AppCreateView.as_view())]
