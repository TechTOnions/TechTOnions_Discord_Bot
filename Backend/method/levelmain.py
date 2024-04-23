import discord
from discord.ext import commands
import os
import random

async def level_on_message(message,db):
    server = db.collection("servers").document(str(message.guild.id))
    if "$" in message.content or message.author.bot or (not server.get().exists):
        return
    author = message.author
    guild = message.guild
    print("user:",author)
    print("Server_name:",guild)
    lvl = server.collection("Levels")
    user = lvl.document("user_lvl").collection('user').document(str(author.id))
    sys = lvl.document("levelsetting")
    sysdoc = sys.get()
    doc = user.get()
    if not doc.exists:
        data = {
                "user_name": f"{author.name}",
                "user_id": f"{author.id}",
                "xp": 1,
                "level":0
                }
        lvl.document("user_lvl").collection('user').document(str(author.id)).set(data)
        return
    if sysdoc.to_dict()["status"] == False:
        print("Level system is off")
        return
    # data = {
    #             "user_name": f"{author.name}",
    #             "user_id": f"{author.id}",
    #             "server": f"{guild.name}",
    #             "server_id": f"{guild.id}",
    #             "xp": doc.to_dict()["xp"],
    #             "level":doc.to_dict()["level"]
    #             }
    xp = int(doc.to_dict()["xp"])
    level = int(doc.to_dict()["level"])
    try:
        xp = xp
        level = level
    except:
        xp = 0
        level = 0
                
    if level <5:
        print("Level is less than 5")
        xp += random.randint(1,5)
        user.update({"xp":xp})
    else:
        print("Level is more than 5")
        rand= random.randint(1,(level//2))
        print(rand)
        if rand == 1:
            xp += random.randint(1,3)
            print(f"xp is increased to {xp}")
            user.update({"xp":xp})
    print(f"XP: {xp}, Level: {level}")
    # print("Document data:",doc.to_dict())
    # print("Level system:",sysdoc.to_dict())
                    
    if xp >= 100:
        level += 1
        user.update({"level":level})
        user.update({"xp":0})
        msg = f"{author.mention} leveled up to {level}"
        print('msg:',msg)
        dataa = sysdoc.to_dict()["role_set"]
        lvl = list(dataa.keys())
        role_id = list(dataa.values())
        print("role:",role_id)
        print("lvl:",lvl)
        if int(lvl[0]) == level:
            role = guild.get_role(int(role_id[0]))
            try:
                await author.add_roles(role)
                await message.channel.send(f'🏆{author.mention} has just level upto **{level}** and reworded with {role.name}✨')
                return
            except discord.HTTPException:
                await message.channel.send(f'{author.mention} I couldn\'t add the role {role.name} to you.')
        await message.channel.send(f'{msg}')