#DEBUG=False
#ALLOWED_HOSTS=['*']

"""
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': "{{PG_DATABASE_USER}}",
        'USER' : "{{PG_DATABASE_USER}}",
        'PASSWORD' : "{{PG_DATABASE_PASSWORD}}",
        'HOST' : "{{PG_DATABASE_HOST}}",
        'PORT' : "{{PG_DATABASE_PORT}}",
        'CONN_MAX_AGE' : 600,
    }
}
"""

STATIC_ROOT = "{{ BACKEND_APP_STATIC_FOLDER }}"

#SPARKPOST_API_KEY = 'cb9cdde63b19459acd7f19484e3315961ff091ac'
#EMAIL_BACKEND = 'sparkpost.django.email_backend.SparkPostEmailBackend'

MEDIA_ROOT = "{{ BACKEND_APP_MEDIA_FOLDER }}"
