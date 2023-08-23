from django.db import models
from django_jalali.db import models as jmodels



class Information(models.Model):


    title = models.CharField(max_length=200)
    description = models.CharField(max_length=399)
    category =  models.CharField(max_length=25)
    image = models.ImageField(upload_to='info' ,null=True )
    created = jmodels.jDateTimeField(auto_now_add=True)
    updated = jmodels.jDateTimeField(auto_now=True)
