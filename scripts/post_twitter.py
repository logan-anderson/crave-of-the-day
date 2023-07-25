import tweepy
import os
from dotenv import load_dotenv

load_dotenv()

consumer_key=os.environ['TWITTER_API_KEY']
consumer_secret=os.environ['TWITTER_API_KEY_S']
access_token=os.environ['TWITTER_ACESS_TOKEN']
access_token_secret=os.environ['TWITTER_ACESS_TOKEN_S']

client = tweepy.Client(
    consumer_key=os.environ['TWITTER_API_KEY'],
    consumer_secret=os.environ['TWITTER_API_KEY_S'],
    access_token=os.environ['TWITTER_ACESS_TOKEN'],
    access_token_secret=os.environ['TWITTER_ACESS_TOKEN_S']
)

# authorization of consumer key and consumer secret
auth = tweepy.OAuthHandler(consumer_key=consumer_key, consumer_secret=consumer_secret)
 
# set access to user's access key and access secret
auth.set_access_token(key=access_token, secret=access_token_secret)
 
# calling the api
api = tweepy.API(auth)
upload = api.media_upload("public/img/mango-chili fruit roll-ups.png")
print(upload)


client.create_tweet(text="""🍿🍬 Snack of the Day!: Pineapple Coconut Macaroons 😋🎉
                    
Craving a delightful treat? 🤩 
                    
👉 https://snack-of-the-day.vercel.app/snack/2023-8-1
""",
                    media_ids=[upload.media_id])



