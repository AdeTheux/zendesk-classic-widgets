#!/usr/bin/env python

"""Fetches the satisfaction score of Zendesk spokes and gathers it in one spot. You will need to call this script with a CRON so that it is launched every day, for example.
As a bonus, I left the code about Ducksboard. It's a cool system to display BI and monitoring stuff regarding your service. Simply replace the API_KEY and END_POINT values."""

__author__      = "Arnaud de Theux"
__web__      = "http://arnaud.detheux.org"
__twitter__      = "@AdeTheux"

from urllib import urlopen
import urllib
import sys
import os

###Below the 3 spokes we have at the moment, simply put your Zendesk account name
#spoke 1
good = 0
bad  = 0
data = urlopen("http://SPOKE1.zendesk.com/satisfaction.json").readlines()[0]
good = data.count('1')
bad  = data.count('0')

#spoke 2
good1 = 0
bad1  = 0
data = urlopen("http://SPOKE2.zendesk.com/satisfaction.json").readlines()[0]
good1 = data.count('1')
bad1  = data.count('0')

#spoke 3
good2 = 0
bad2  = 0
data = urlopen("http://SPOKE3.zendesk.com/satisfaction.json").readlines()[0]
good2 = data.count('1')
bad2  = data.count('0')

###Makes a simple addition
sum_good = good + good1 + good2
sum_bad = bad + bad1 + bad2

###You can now simply call sum_good and sum_bad to display it all over the interwebs.


###This is the code to push the values in bubbles in your Ducksboard account
command = "curl -u API_KEY:ignored -d '{\"value\": %d}' https://push.ducksboard.com/values/END_POINT/" % sum_good
command2 = "curl -u API_KEY:ignored -d '{\"value\": %d}' https://push.ducksboard.com/values/END_POINT/" % sum_bad


print command
os.system(command)
print command2
os.system(command2)