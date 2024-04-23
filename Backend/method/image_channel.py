import discord
import asyncio

# print("image_channel.py")
async def del_msg(message, db, bot):
    database = db.collection("servers").document(str(message.guild.id)).collection("moderation").document("image_Only")
    if database.get().exists:
        print(database.get().to_dict()["channel_id"])
        chann_lst = database.get().to_dict()["channel_id"]
        for key, value in chann_lst.items():
            chann_lst[key] = int(value)
        lsst = list(chann_lst.values())
    else:
        print("database not found")
        return
    if message.channel.id in lsst and not message.author.bot:
    # if message.channel.id in monitored_channel_ids and not message.author.bot:
        if not message.attachments:
            print("Message without attachments")
            # Delete the message if it doesn't have attachments (images)
            await message.delete()

            # Send a warning message
            warning_message = f'{message.author.mention}, messages are not allowed here. Please only send your work images.'
            warning = await message.channel.send(warning_message)
            print("warning:",warning)
            # Schedule the deletion of the warning message after 1 second
            await asyncio.sleep(5)
            print("Deleting warning message")
            print("warning.author:",warning.author)
            print(bot.user)
            # Check if the bot is not the author before attempting to delete
            if warning.author == bot.user:
                await warning.delete()

