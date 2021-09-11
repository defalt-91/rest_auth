# from dj_rest_auth.serializers import TokenSerializer

from rest_framework_simplejwt.views import TokenVerifyView
from rest_framework_simplejwt.serializers import TokenVerifySerializer
from rest_framework_simplejwt.tokens import UntypedToken
from rest_framework import serializers
from django.conf import settings


# class MyTokenSerilizer(TokenSerializer):
#     def __init__(self, *args, **kwargs):
#         print("from my serilizer")
#         super.__init__(*args, **kwargs)
class MyCookieTokenVerifySerializer(TokenVerifySerializer):
    # refresh = serializers.CharField(required=False, help_text='WIll override cookie.')
    token = serializers.CharField(required=False, help_text='WIll override cookie.')

    def extract_refresh_token(self):
        request = self.context['request']
        if 'refresh' in request.data and request.data['refresh'] != '':
            return request.data['refresh']
        cookie_name = getattr(settings, 'JWT_AUTH_REFRESH_COOKIE', None)
        if cookie_name and cookie_name in request.COOKIES:
            return request.COOKIES.get(cookie_name)
        else:
            from rest_framework_simplejwt.exceptions import InvalidToken
            raise InvalidToken('No valid refresh token found.')

    def validate(self, attrs):

        if attrs and attrs['token']:
            print('attrs[tokenam]', attrs['token'])
            token = UntypedToken(attrs['token'])
        else:
            token = UntypedToken(self.extract_refresh_token())
        # if api_settings.BLACKLIST_AFTER_ROTATION:
        #     jti = token.get(api_settings.JTI_CLAIM)
        #     if BlacklistedToken.objects.filter(token__jti=jti).exists():
        #         raise ValidationError("Token is blacklisted")

        return {}


class MyTokenVerifyView(TokenVerifyView):
    serializer_class = MyCookieTokenVerifySerializer

