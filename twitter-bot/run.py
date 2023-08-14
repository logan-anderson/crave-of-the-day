import tweepy
import os
import datetime
from json import loads
from dotenv import load_dotenv


load_dotenv()


def ordinal_suffix(i: int):
    j = i % 10
    k = i % 100
    if (j == 1 and k != 11):
        return str(i) + "st"

    if (j == 2 and k != 12):
        return str(i) + "nd"

    if (j == 3 and k != 13):
        return str(i) + "rd"

    return str(i) + "th"


consumer_key = os.environ['TWITTER_API_KEY']
consumer_secret = os.environ['TWITTER_API_KEY_S']
access_token = os.environ['TWITTER_ACESS_TOKEN']
access_token_secret = os.environ['TWITTER_ACESS_TOKEN_S']

client = tweepy.Client(
    consumer_key=os.environ['TWITTER_API_KEY'],
    consumer_secret=os.environ['TWITTER_API_KEY_S'],
    access_token=os.environ['TWITTER_ACESS_TOKEN'],
    access_token_secret=os.environ['TWITTER_ACESS_TOKEN_S']
)

# authorization of consumer key and consumer secret
auth = tweepy.OAuthHandler(consumer_key=consumer_key,
                           consumer_secret=consumer_secret)

# set access to user's access key and access secret
auth.set_access_token(key=access_token, secret=access_token_secret)

# calling the api
api = tweepy.API(auth)

current_date = datetime.datetime.now()
current_month = current_date.month
current_year = current_date.year
current_day = current_date.day
current_month_str = current_date.strftime("%B")
current_day_str = ordinal_suffix(current_day)

snack_json = loads(
    open(f"../content/snacks/{current_year}/{current_month-1}.json", "r").read())
snack = snack_json['snacks'][int(current_day-1)]

tweet_text = f"""🍿🍬 Snack of the Day For {current_month_str} {current_day_str}: {snack['name']}😋🎉
                    
Craving a delightful #treat ? 🤩 
                    
👉 https://craveoftheday.com/snack/{current_year}-{current_month}-{current_day}

#foodie #snackoftheday #recipe #yummy #yum 
"""

print(tweet_text)

img_name = snack['name'].replace(" ", "-").lower()
img_path = f"../public/img/{img_name}.png"

upload = api.media_upload(img_path)
print(upload)


client.create_tweet(text=tweet_text,
                    media_ids=[upload.media_id])
