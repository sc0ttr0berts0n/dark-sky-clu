# Dark Sky CLU (Command Line Utility)

## My personal command line utility for accessing the dark sky's weather API.

## To use:

### Register for the Dark Sky API

To use the [dark sky API](https://darksky.net/dev) you will need an API Key. Register for one.

### Set up a `.env` file in the root

To prevent others from accessing your sensitive information such as your location and your api key, I have maked this information within a `.env` file.

Add a `.env` file to the root of your project with the following information in it:

```env
DARK_SKY_API_KEY=abcdefjhijklmnopqrstuvwxyz1234567890
LAT=98.7654321
LON=12.3456789
```

### Update the path of the .env in your file.

This script is written so that it can run from any director, and as such, the absolute path of your `.env` file is needed.

Update the followling line to include the absolute path to the `.env` file you created:

```js
path: '/absolute/path/to/your/.env';
```

### Add an alias to your `.bash_profile`

To make it so the program can execute from any directory, add an alias to your `.bash_profile` with a command to execute the program:

```sh
node '/absolute/path/to/your/darksky.js'
```

That should do it, Thanks! Hope you enjoy.
