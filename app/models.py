from django.db import models
from django_jalali.db import models as jmodels



class Information(models.Model):


    title = models.CharField(max_length=200,blank=True)
    description = models.CharField(max_length=399,blank=True)
    category =  models.CharField(max_length=25,blank=True)
    image = models.ImageField(upload_to='info' ,null=True,blank=True)
    created = jmodels.jDateTimeField(auto_now_add=True)
    updated = jmodels.jDateTimeField(auto_now=True)


class Event(models.Model):
    title = models.CharField(max_length=200,blank=True)
    description = models.CharField(max_length=399,blank=True)
    category =  models.CharField(max_length=25,blank=True)
    image = models.ImageField(upload_to='event' ,null=True,blank=True )
    created = jmodels.jDateTimeField(auto_now_add=True)
    updated = jmodels.jDateTimeField(auto_now=True)

class Gallery(models.Model):
    title = models.CharField(max_length=200,blank=True)
    image = models.ImageField(upload_to='gallery' ,null=True,blank=True )
    created = jmodels.jDateTimeField(auto_now_add=True)
    updated = jmodels.jDateTimeField(auto_now=True)


class Slide(models.Model):
    title = models.CharField(max_length=200,blank=True)
    description = models.CharField(max_length=399,blank=True)
    image = models.ImageField(upload_to='slide' ,null=True,blank=True )
    created = jmodels.jDateTimeField(auto_now_add=True)
    updated = jmodels.jDateTimeField(auto_now=True)




class Notifications(models.Model):
    title = models.CharField(max_length=200,blank=True)
    description = models.CharField(max_length=399,blank=True)
    image = models.ImageField(upload_to='slide' ,null=True,blank=True )
    notif_file = models.FileField(upload_to='notif_file')
    created = jmodels.jDateTimeField(auto_now_add=True)
    updated = jmodels.jDateTimeField(auto_now=True)



class InfoSite(models.Model):
    description = models.CharField(max_length=399,blank=True)
    phone_number = models.CharField(max_length=11,blank=True)
    email = models.EmailField()  
    address = models.CharField(max_length=255, blank=True)


class CalendarManagement(models.Model):
    name1 = models.CharField(max_length=399,blank=True)
    description1 = models.CharField(max_length=399,blank=True)

    name2 = models.CharField(max_length=399,blank=True)
    description2 = models.CharField(max_length=399,blank=True)

    name3 = models.CharField(max_length=399,blank=True)
    description3 = models.CharField(max_length=399,blank=True)

    name4 = models.CharField(max_length=399,blank=True)
    description4 = models.CharField(max_length=399,blank=True)

    name5 = models.CharField(max_length=399,blank=True)
    description5 = models.CharField(max_length=399,blank=True)
