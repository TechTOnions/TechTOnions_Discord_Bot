# welcome_leave.py
import discord

# print("welcomeleave.py")
async def welcome(member,db):
    server = db.collection("servers").document(str(member.guild.id))
    if not server.get().exists:
        print(f"Server {member.guild.name} not found in database.")
        # await member.guild.get_channel(int(member.channel.id)).send(f"Server {member.guild.name} not found in database.")
        return
    channel = server.collection("Welcome_Leave").document("welcome").get()
    print("channel:",channel.to_dict())
    if channel.to_dict()["status"] == False:
        print(f"{member.guild.name} welcome message system is not enable.")
        # await member.guild.get_channel(int(member.channel.id)).send(f"{member.guild.name.mention} welcome message system is not enable.")
        return 
    if channel.to_dict()["channel_id"] == 0:
        print(f"Welcome channel not set for {member.guild.name}. Please set welcome channel.")
        # await member.guild.get_channel(int(member.channel.id)).send(f"Welcome channel not set for {member.guild.name}. Please set welcome channel.") 
        return
    else:
        welcome_channel_id = channel.to_dict()['channel_id']

    if channel.to_dict()["message"] == '':
        message = f"Welcome to the server, {member.mention}! We are glad to have you."
    else:
        message = channel.to_dict()["message"]
    
    
    print("welcome_channel_id:",welcome_channel_id)
    # gud=member.guild(member.guild.id)
    welcome_channel = member.guild.get_channel(int(welcome_channel_id))
    print(welcome_channel)
    welcome_message = discord.Embed(
        title="Welcome to",
        description=message,
        color=discord.Colour.from_rgb(0, 96, 154))
    await welcome_channel.send(embed=welcome_message)

async def join_role(member,bot,db):
    
    join_role_id = db.collection("servers").document(str(member.guild.id)).collection("moderation").document("Join_Member_Role")
    if not join_role_id.get().exists:
        print("Not data found in database for join role")
        return
    join_role_id = int(join_role_id.get().to_dict()['role_id'])
    role = discord.utils.get(member.guild.roles, id=join_role_id)
    if role is None:
        print("Role not found in server")
        return
    await member.add_roles(role)


async def Goodbye(member, db):
    server = db.collection("servers").document(str(member.guild.id))
    if not server.get().exists :
        print(f"Server {member.guild.name} not found in database.")
        return
    channel = server.collection("Welcome_Leave").document("leave").get()
    if channel.to_dict()["status"] == False:
        print(f"{member.guild.name} welcome message system is not enable.")
        return
    if channel.to_dict()["channel_id"] == 0:
        print(f"Welcome channel not set for {member.guild.name}. Please set welcome channel.")
        return
    else:
        leave_channel_id = channel.to_dict()['channel_id']
        
    if channel.to_dict()["message"] == '':
        message = f"Goodbye, {member.name}! We will miss you."
    else:
        message = channel.to_dict()["message"]

    leave_channel = member.guild.get_channel(int(leave_channel_id))
    leave_message = discord.Embed(
        title="Goodbye",
        description=message,
        color=discord.Colour.from_rgb(0, 96, 154))
    await leave_channel.send(embed=leave_message)
