import discord
import asyncio

# print("Link_channel.py")
async def del_link_msg(message, db, bot):
    Guild = bot.get_guild(message.guild.id)
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
    if not message.content.startswith("http") and not message.content.startswith("https"):
        if message.channel.id in lsst and not message.author.bot:   
                print("valid link")
                # Delete the message if it has attachments or doesn't contain a valid link
                await message.delete()

                # Send a warning message
                warning_message = f'{message.author.mention}, messages are not allowed here. Please only send valid links.'
                warning = await message.channel.send(warning_message)
                # Schedule the deletion of the warning message after 5 seconds
                await asyncio.sleep(5)
                print("Deleting warning message")
                # Check if the bot is not the author before attempting to delete
                if warning.author == bot.user:
                    await warning.delete()
                    
                
    else:
        print("Message without a valid link")

        # Process commands after the cleanup logic
    # await bot.process_commands(message)