import discord
# print("addRole.py")
async def TO_member(payload,db):
  # Check if the reaction was added in the correct channel
  guild_id = str(payload.member.guild.id)  # Convert guild.id to a string

  print(guild_id)
  print(f'Member: {payload.member}')

  server = db.collection("servers").document(guild_id).collection("moderation").document("Join_Member_Role") 
  sevrer_data = server.get()
  print(sevrer_data.to_dict())
  if sevrer_data.to_dict()["status"]  == False :
    print("Role adding system is off")
    return
  print(sevrer_data.to_dict())
  if sevrer_data.to_dict()["channel_id"] == '':
    print('Channel ID not configured. Returning.')
    return 
  if sevrer_data.to_dict()["role_id"] == '':
    print('Role ID not configured. Returning.')
    return
  rule_channel_id = sevrer_data.to_dict()['channel_id']
  role_id = sevrer_data.to_dict()['role_id']
  print(payload.channel_id)
  print(rule_channel_id)
  if int(payload.channel_id) == int(rule_channel_id):
    # Replace 'YOUR_ROLE_ID' with the actual ID of the role to give
    role_id = int(role_id)
    role = discord.utils.get(payload.member.guild.roles, id=role_id)

    print(f'Role: {role}')
    print(f'Member: {payload.member}')
    print(f'Emoji: {payload.emoji}')
    print(f'Role ID: {role_id}') 
    print(f"player_role_id: {payload.member.roles}")
    if role and str(payload.emoji) == '\U00002705':
      if role not in payload.member.roles:# white_check_mark emoji
        try:
          # Give the role to the user who added the reaction
          await payload.member.add_roles(role)
        except discord.Forbidden:
          print('Bot does not have the required permissions.')
  else:
    print('Reaction added in the wrong channel.')
