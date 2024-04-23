from discord.ext import commands
import discord
from easy_pil import *
import asyncio

# print("myCommands.py")
async def check_bot_permissions(ctx):
  print("Checking bot permissions...")
  # Check permissions in the channel where the command was invoked
  channel = ctx.channel
  bot_permissions = channel.permissions_for(ctx.me)

  # Prepare a formatted message with permissions
  permissions_message = '\n'.join(
      [f'{permission}: {value}' for permission, value in bot_permissions])

  # Respond with the permissions message
  await ctx.send(f'Bot permissions in {channel.name}:\n{permissions_message}')

async def add_join_role(ctx,db,channel:discord.channel,role:discord.role):
    server = db.collection("servers").document(ctx.guild.id).collection("moderation").document("Join_Member_Role") 
    sevrer_data = server.get()
    print("sevrer_data:",sevrer_data.to_dict())
    data = {"status":True,"channel_id":f'{channel.id}','channel_name':f'{channel.name}','role_id':f"{role.id}",'role_name':f"{role.name}"}
    print('DATA:',data)
    sevrer_data.update(data)
    await ctx.send(f'Join role has been set to {role.name}!')

async def clear(ctx, amount: int):
    # Check if the command user has the "Manage Messages" permission
    if ctx.author.guild_permissions.manage_messages:
        try:
            # Purge the specified number of messages (including the command itself)
            deleted_messages = await ctx.channel.purge(limit=amount + 1)
            # Send a confirmation message
            confirmation_message = await ctx.send(f'Successfully deleted {len(deleted_messages) - 1} messages.')
            # Delete the confirmation message after a few seconds
            await asyncio.sleep(3)  # Use asyncio.sleep instead of discord.utils.sleep_until
            await confirmation_message.delete()
        except discord.Forbidden:
            await ctx.send('I do not have the required permissions to manage messages.')
    else:
        await ctx.send('You do not have the "Manage Messages" permission.')
        
# async def clear(interaction, count: int):
#     # Check if the command user has the "Manage Messages" permission
#     if interaction.author.guild_permissions.manage_messages:
#         try:
#             # Purge the specified number of messages (including the command itself)
#             deleted_messages = await interaction.channel.purge(limit=count + 1)
#             # Send a confirmation message
#             confirmation_message = await interaction.send(f'Successfully deleted {len(deleted_messages) - 1} messages.')
#             # Delete the confirmation message after a few seconds
#             await asyncio.sleep(3)  # Use asyncio.sleep instead of discord.utils.sleep_until
#             await confirmation_message.delete()
#         except discord.Forbidden:
#             await interaction.response.send_message('I do not have the required permissions to manage messages.')
#     else:
#         await interaction.response.send_message('You do not have the "Manage Messages" permission.')

async def setleavechannel(ctx,db,leave_channel:discord.TextChannel):
  Guild =ctx.guild
  channel=leave_channel
  if Guild:
      for chann in Guild.channels:
        if chann.id == channel:
          doc_ref = db.collection("servers").document(str(Guild.id)).collection("Welcome_Leave").document("leave")
          data = {
            "channel_id": str(chann.id),
            "channel_name": chann.name,
            "status":True,
            "message":doc_ref.get().to_dict()['message']
          }
          doc_ref.update(data)
        return {"message": f"Leave channel set to {chann.name} ({chann.id})"}
    
async def setwelcomechannel(ctx,db,welcome_channel:discord.TextChannel):
  Guild =ctx.guild
  channel=welcome_channel
  if Guild:
      for chann in Guild.channels:
        if chann.id == channel:
          doc_ref = db.collection("servers").document(str(Guild.id)).collection("Welcome_Leave").document("leave")
          data = {
            "channel_id": str(chann.id),
            "channel_name": chann.name,
            "status":True,
            "message":doc_ref.get().to_dict()['message']
          }
          doc_ref.update(data)
        return {"message": f"Leave channel set to {chann.name} ({chann.id})"}
  else:
    return f"{Guild} is not a valid server id"
# ----------lvl system----------
async def level(ctx,member,db):
    if member is None:
        member = ctx.author
    server = db.collection("servers").document(str(ctx.guild.id))
    lvl = server.collection("Levels")
    user = lvl.document("user_lvl").collection('user')
    doc = user.document(str(ctx.author.id)).get()
    if doc.exists:
        data = {
                "user_name": f"{ctx.author.name}",
                "user_id": f"{ctx.author.id}",
                "server": f"{ctx.guild.name}",
                "server_id": f"{ctx.guild.id}",
                "xp": doc.to_dict()["xp"],
                "level":doc.to_dict()["level"]
                }
        xp = doc.to_dict()["xp"]
        level = doc.to_dict()["level"]
        user = db.collection("user_lvl").document(str(ctx.author.id))
        try:
            xp = xp
            level = level
        except:
            xp = 0
            level = 0
        userdata ={
            "name":f'{member.name}',
            "xp":xp,
            "level":level,
            "next_level_xp":100,
            "percent":xp,
        }
        
        background = Editor(Canvas((900,200), color="#00609a"))

        profile_pic = await load_image_async(str(member.avatar.url))
        profile = Editor(profile_pic).resize((150,150)).circle_image()
        
        poppins = Font.poppins(size=60)
        poppins = Font.poppins(size=60)
        poppins_small = Font.poppins(size=25)
        
        background.paste(profile, (30,30))
        #progress bar
        background.rectangle((200,160),width=650,height=30, color="#474b4e",radius=20)
        if xp != 0:
            background.bar( (200,160),max_width=650,height=30,color="#60d6f2",radius=20,percentage=userdata["percent"])
        
        background.text((200,90),userdata["name"],font=Font.poppins(size=50),color="#FFFFFF")
        if level >= 10:
            background.text((715,22),f'Level:- {userdata["level"]}',font=Font.poppins(size=40),color="#FFFFFF")
        else:
            background.text((720,22),f'Level:- {userdata["level"]}',font=Font.poppins(size=40),color="#FFFFFF")
        background.text((700,130),f'XP:-{userdata["xp"]}/{userdata["next_level_xp"]}',font=poppins_small,color="#FFFFFF")

        file = discord.File(fp=background.image_bytes, filename="levelcard.jpg")
        
        await ctx.send(file=file)
            
    else :
        data = {
                "user_name": f"{ctx.author.name}",
                "user_id": f"{ctx.author.id}",
                "server": f"{ctx.guild.name}",
                "server_id": f"{ctx.guild.id}",
                "xp": 1,
                "level":0
                }
        
        lvl.document("user_lvl").collection('user').document(str(ctx.author.id)).set(data)
        return               

async def rank(ctx, db, firestore):
    server = db.collection("servers").document(str(ctx.guild.id))
    lvl = server.collection("Levels")
    sys = lvl.document("levelsetting").get()
    print("levelsetting:",sys.to_dict())
    if sys.to_dict()["lvlsys"] == False:
        return await ctx.send("Leveling system is disabled in this server")
    user = lvl.document("user_lvl").collection('user')
    user_lvl = user.order_by("level", direction=firestore.Query.DESCENDING).order_by("xp", direction=firestore.Query.DESCENDING).limit(10)
    leaderboard = []
    # Iterate over the documents and append them to the leaderboard list
    for doc in user_lvl.stream():
        user_data = doc.to_dict()
        leaderboard.append({
            "user_name": user_data["user_name"],
            "level": user_data["level"],
            "xp": user_data["xp"]
        })
    y_pos = 20
    rank = 0
    display = ""
    for entry in leaderboard:
        y_pos += 10
        rank += 1
        display += f"**#{rank}** | **Level:** {entry['level']} | **XP:** {entry['xp']} | **User:** {entry['user_name']}\n"
    # Create a more beautiful embed with a white background
    em = discord.Embed(
        title="🏆 Leaderboard 🏆",
        description=display,
        color=discord.Colour.from_rgb(255, 255, 255))
    guild = ctx.bot.get_guild(ctx.guild.id)  
    em.set_thumbnail(url=guild.icon)
    em.set_footer(text="Ranking of the top 10 users")
    await ctx.send(embed=em)

    
    # Iterate over the leaderboard and add the users to the image
   
           
async def enable_lvl(ctx,db):
    lvldb = db.collection("lvlsetting").document(str(ctx.guild.name)).get()
    status=lvldb.to_dict()["lvlsys"]
    if status:
        await ctx.send("Leveling system is already enabled")
    else:
        db.collection("lvlsetting").document(str(ctx.guild.name)).update({"lvlsys":True})
        await ctx.send("Leveling system has been enabled")
        
async def disable_lvl(ctx,db):
    lvldb = db.collection("lvlsetting").document(str(ctx.guild.name)).get()
    status=lvldb.to_dict()["lvlsys"]
    if status == False:
        await ctx.send("Leveling system is already disabled")
    else:
        db.collection("lvlsetting").document(str(ctx.guild.name)).update({"lvlsys":False})
        await ctx.send("Leveling system has been disabled")
        
async def reward(ctx,db):
    lvldb = db.collection("lvlsetting").document(str(ctx.guild.name)).get()
    status=lvldb.to_dict()["lvlsys"]
    if status == False:
        return await ctx.send("Leveling system is disabled in this server")
    if not lvldb:
        return await ctx.send("No role levels have been setup yet for this server")
    em = discord.Embed(title="Role Levels",description="Role levels are a way to reward people for getting to certain levels in a certain role")
    for role in lvldb:
        em.add_field(name=f"Level: {role[2]}", value=f"{ctx.guild.get_role(role[1])}",inline=False)
    await ctx.send(embed = em)  
        
async def setrole(ctx,db,role,level):
    lvldb = db.collection("lvlsetting").document(str(ctx.guild.name)).get()
    status=lvldb.to_dict()["lvlsys"]
    if status == False:
        return await ctx.send("Leveling system is disabled plz emable it for this feature.")
    if role.id in lvldb.to_dict()['role_id']  and level in lvldb.to_dict()['lvlreq'] :
        print("Role already exists")
        return await ctx.send("You have already set a role level")
    lvl= db.collection("lvlsetting").document(str(ctx.guild.name))
    role_id = {str(role.id): role.name} 
    lvlreq = {str(level): role.id} 
    lvl.update({"role_id":role_id,"lvlreq":lvlreq})
    await ctx.send("Role has been set")
    print("Role has been set")

#-----------------------------------------------------------------------
async def create_category(ctx,db,category_name):
    
    server_doc = db.collection("servers").document(str(ctx.guild.id)).collection("moderatio")
    imgl_channel_list = server_doc.document("image_Only")
    link_channel_list = server_doc.document("link_Only")
    guild = ctx.guild
    role = await guild.create_role(name=category_name, mentionable=True)
    overwrites = {
        guild.default_role: discord.PermissionOverwrite(read_messages=False),
        guild.me: discord.PermissionOverwrite(read_messages=True),
        role: discord.PermissionOverwrite(read_messages=True)
    }
    
    # Create the category
    category =await guild.create_category(category_name ,overwrites=overwrites)

    # Create the role with the same name as the category
    # Assign the role to the member who executed the command
    await ctx.author.add_roles(role)
    # ctx.guild.get_role(role): discord.PermissionOverwrite(read_messages=True),
    # Create help channels within the newly created category
    link = await guild.create_text_channel(f'{category_name}_link', overwrites=overwrites ,category =category)
    # print("link_id:",link.id,"link_name:",link.name)
    img = await guild.create_text_channel(f'{category_name}_img', overwrites=overwrites,category=category)
    await guild.create_text_channel(f'{category_name}_chat',overwrites=overwrites ,category=category)

    # Append channel name and id to link_channel_list
    link_channel_list.set({"channel_id":{link.name: link.id}},merge=True,)

    # Append channel name and id to imgl_channel_list
    imgl_channel_list.set({"channel_id":{img.name: img.id}},merge=True)
    
    await ctx.send(f'Category "{category_name}" . Role assigned.')


async def setup_member_count(ctx,db):
    server_doc = db.collection("servers").document(str(ctx.guild.id)).collection("moderatio")
    counter_channel_list = server_doc.document("member_count")
    guild = ctx.guild
    
    overwrites = {
        guild.default_role: discord.PermissionOverwrite(read_messages=False),
        guild.me: discord.PermissionOverwrite(read_messages=True),
    }
    category_name = f"📊SERVER STATS"
    # Create the category
    category =await guild.create_category(category_name ,overwrites=overwrites)
    # create memeber count channel
    member_count = await guild.create_voice_channel('😁Total Members', overwrites=overwrites ,category =category)
    Online_member_count = await guild.create_voice_channel('😎Online Members', overwrites=overwrites ,category =category)
    bot_count = await guild.create_voice_channel('🤖Bots', overwrites=overwrites ,category =category)
    data = {
        "status":True,
        f"📊SERVER STATS":{
            "😁Total Members":f'{member_count.id}',
            "😎Online Members":f"{Online_member_count.id}",
            "🤖Bots":f"{bot_count.id}",
        }
    }
    counter_channel_list.set(data,merge=True)
    await ctx.send(f'Your server has been setup with server stats')
        
        
         
        