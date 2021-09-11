from django.contrib import admin
from django.urls import path, include
from .views import MyTokenVerifyView
urlpatterns = [
    # path("allauth/", include("allauth.urls")),
    path("admin/", admin.site.urls),
    path("api/auth/token/verify/", MyTokenVerifyView.as_view(), name='token_verify'),
    path("api/auth/", include("dj_rest_auth.urls")),
    path("api/auth/", include("dj_rest_auth.registration.urls")),
    path('api/app/',include('app.urls'))
]
