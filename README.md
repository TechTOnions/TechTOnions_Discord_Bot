# TechTOnions_Discord_Bot

# Discord Bot

This is an open-source Discord bot project developed using Python and Discord.py. The bot includes various features and integrations to enhance the functionality and user experience on Discord servers.

## Features

   - Welcome and Leave Messages: Greets new members and bids farewell to leaving members.
   - Customizable Prefix: Allows setting a custom prefix for bot commands on each server.
   - Role Management: Assigns roles to members based on reactions or commands.
   - Leveling System: Tracks and displays user levels based on activity.
   - Moderation: Implements image and link moderation, member count tracking, and more.
   - YouTube Notifications: Notifies about new videos from specified YouTube channels.

## Setup

# Backend
1. Clone the repository
2. Create and activate a virtual environment
   - `python -m venv venv`
   - `source venv/bin/activate` (Linux/MacOS) or `venv\Scripts\activate` (Windows)
3. Install requirements: `pip install -r requirements.txt`
4. Set up Firebase:
   - Go to Firebase Console:`https://console.firebase.google.com/`
   - Click on Add Project.
   - Enter a Project Name and click on Continue.
   - After creating the app, you will be redirected to your project console.
   - Click on the gear icon on the left side of the console and select       Project Settings.
   - Click on Service Accounts and then select python.
   - Click on Generate New Private Key and confirm by clicking on       Generate Key.

4. Add your bot token in `config.py`
5. Run the bot: `python main.py`

# Frontend
1. npm install in /Frontend Folder
2. npm run dev  to run it in localhost

## Commands

- `$setwelcomechannel` - Set the welcome channel
- `$setleavechannel` - Set the leave channel
- `$setprefix` - Set custom prefix
- `$createCAT` - Create a category
- `$clear` - Clear messages
- `$checkpermissions` - Check bot permissions
- `$lvl` - Check your level
- `$rank` - Check your rank
- `$lvlsys enable` - Enable leveling system
- `$lvlsys disable` - Disable leveling system

## Database

The bot uses Firestore for:

- Storing server prefixes
- Level system data
- Welcome/leave channels
- Other data

## Deployment

The bot can be deployed to Heroku or any other hosting platform that supports Python applications.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute to this open source project.

## Credits

- [discord.py](https://discordpy.readthedocs.io/en/stable/)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [My discord bot](https://discord.gg/RKSZrc8AYy)

Let me know if you would like me to expand or modify anything in this open source README draft. I'd be happy to help further polish it for your repository!
