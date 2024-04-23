# update_member_count.py
from discord.ext import tasks
import scrapetube
import discord
# print("update_member_count.py")


async def updateMemberCount(bot, server_id, member_count_channel_id):
    try:
        guild = bot.get_guild(server_id)
        if not guild:
            print('Guild not found.')
            return
        member_count_channel = guild.get_channel(int(member_count_channel_id['😁Total Memberst']))
        bot_count_channel = guild.get_channel(int(member_count_channel_id['😎Online Members']))
        Online_Members_channel = guild.get_channel(int(member_count_channel_id['🤖Bots']))
        
        if guild and (member_count_channel and bot_count_channel and Online_Members_channel):
            member_count = guild.member_count
            bot_count = len([m for m in guild.members if not m.bot])
            Online_Members = len(list(filter(lambda m: m.status == discord.Status.online, guild.members)))
 
            await member_count_channel.edit(name=f'😁Total Memberst: {member_count}')
            await bot_count_channel.edit(name=f'😎Online Members: {Online_Members}')
            await Online_Members_channel.edit(name=f'🤖Bots: {bot_count}')
            # print(f'Member count updated successfully: {bot_count}')
        else:
            print('Guild or channel not found.')
    except Exception as e:
        print(f'Error updating member count: {e}')

# under development


async def youtube(bot, db, server_id):
    youtube = db.collection("servers").document(str(server_id)).collection(
        "moderation").document("Youtube_Notification")
    # .set({"status":False,"channel_id":'',"channel_name":"","youtube_channels":[]})
    youtube_data = youtube.get().to_dict()
    youtube_channels = youtube_data.get('youtube_channels', [])
    stored_videos = youtube_data.get('videos', {})
    channel_id = youtube_data.get('channel_id')
    discord_channel = bot.get_channel(int(channel_id))

    if discord_channel is None:
        print(f"Could not access channel with ID: {channel_id}.")
    else:
        print(f"Notification channel: {discord_channel.name}")
        updated = False
        for channel in youtube_channels:
            # print(f"Checking channel: {channel}")
            videos = scrapetube.get_channel(channel_username=channel, limit=3)

            for video in videos:
                video_id = video['videoId']
                if channel not in stored_videos:
                    stored_videos[channel] = [video_id]
                    updated = True
                    url = f"https://youtube.com/watch?v={video_id}"
                    await discord_channel.send(f"@everyone \nNew video from **{channel}** \n\n{url}")
                elif video_id not in stored_videos[channel]:
                    stored_videos[channel].append(video_id)
                    updated = True
                    url = f"https://youtube.com/watch?v={video_id}"
                    
                    await discord_channel.send(f"@everyone \nNew video from **{channel}** \n\n{url}")

        # If there are new videos, update the Firestore document
        if updated:
            youtube.set({'videos': stored_videos}, merge=True)
