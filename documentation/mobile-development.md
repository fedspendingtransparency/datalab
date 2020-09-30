## How to view your local environment on a mobile device

**On any device**

Gatsby host switch: “-H 0.0.0.0” is added onto start script

```gatsby develop -H 0.0.0.0```

allows any device connected to the same network as your laptop to view your local environment by visiting the link shown next to "On Your Network" in the terminal

```You can now view datalab-gatsby in the browser.
⠀
  Local:            http://localhost:8000/
  On Your Network:  http://{IPaddress}:8000/```

device browser hot reloads with changes the same way your computer browser does

**On Apple devices (with Apple computer)**

If you have an Apple device and a Mac laptop, you can use Safari dev tools to inspect your device’s browser

Steps for using device dev tools:
1. connect device to computer using USB cable
2. on device, go to Settings > Safari > Advanced and turn on Web Inspector
3. on laptop, open Safari and go to Develop menu
4. hover over your device and select the IP address that comes up
5. Safari will open a new window with the dev tools that you can use to inspect your device’s browser