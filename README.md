<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lucky-chap/zed-sharing-node/">
    <img src="public/android-chrome-512x512.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">zed-sharing-node</h3>

  <p align="center">
    API for file sharing app built with the MERN Stack
    <br />
    <br />
    <a href="https://github.com/lucky-chap/zed-sharing-node/issues">Report Bug</a>
    ·
    <a href="https://github.com/lucky-chap/zed-sharing-node/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This is the API for Zed, a file sharing platform I built for the Hashnode and Linode Hackathon.
❤️➕🌑

### Built with

- [NodeJS](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)

<!-- GETTING STARTED -->

## Running the server locally

To get a local copy up and running follow these simple steps.

- Clone this repo (have git installed)
  ```sh
  git clone https://github.com/lucky-chap/zed-sharing-node.git
  ```
- Install dependencies (have nodejs installed)
  ```sh
  cd zed-sharing-node
  yarn install # or npm install
  ```
- Make sure you create a `.env` file and fill it with `.env.example` as reference
- In [config.js](./config/config.js), remove the `dialectOptions` object as you would not be needing
  it in development
- Build, seed and migrate the database all together
  ```sh
  yarn build
  ```
- Now run the server
  ```sh
  yarn start
  ```

## Running the server in production

To get a local copy up and running follow these simple steps.

- Clone this repo (have git installed)
  ```sh
  git clone https://github.com/lucky-chap/zed-sharing-node.git
  ```
- Install dependencies (have nodejs installed)
  ```sh
  cd zed-sharing-node
  yarn install # or npm install
  ```
- Make sure you create a `.env` file and fill it with `.env.example` as reference
- Also remember to add an SSL certificate file to the `root` folder so `sequelize` can read from
  there. This is required to connect to the MySQL database on your server
- Build, seed and migrate the database all together
  ```sh
  yarn build
  ```
- Now run the server
  ```sh
  yarn start
  ```

<!-- CONTRIBUTING -->

## Contributing

You rock! Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull
request. You can also simply open an issue with the tag "enhancement". Don't forget to give the
project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/coolStuff`)
3. Commit your Changes (`git commit -m 'Add some coolStuff'`)
4. Push to the Branch (`git push origin feature/coolStuff`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

<!-- CONTACT -->

## Come say hi 👋

- Twitter: [@hunchodotdev](https://twitter.com/hunchodotdev)
- Discord: [@FatKidOnFiree#1355](https://discordapp.com/users/FatKidOnFiree#1355)
- Reddit: [@huncho_dot_dev](https://www.reddit.com/user/huncho_dot_dev/)
