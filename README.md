# 📁 Architecture

<pre>
Media Master
  ├─ backend
  │    ├─ <strong>8001: <a href="https://github.com/FMI-MediaMaster/User-Service">user-service</a></strong>
  │    ├─ <strong>8002: <a href="https://github.com/FMI-MediaMaster/Media-Service">media-service</a></strong>
  │    └─ external-services
  │         ├─ <strong>8100: metadata</strong>
  │         │    ├─ <strong>8101: <a href="https://github.com/FMI-MediaMaster/IGDB-Service">The Internet Game Database</a></strong>
  │         │    ├─ <strong>8102: <a href="https://github.com/FMI-MediaMaster/HLTB-Service">HowLongToBeat</a></strong>
  │         │    ├─ <strong>8103: <a href="https://github.com/FMI-MediaMaster/PCGW-Service">PCGamingWiki</a></strong>
  │         │    ├─ <strong>8104: <a href="https://github.com/FMI-MediaMaster/Hardcover-Service">Hardcover</a></strong>
  │         │    ├─ <strong>8105: <a href="https://github.com/FMI-MediaMaster/TMDB-Service">The Movie Database</a></strong>
  │         │    └─ <strong>8106: <a href="https://github.com/FMI-MediaMaster/Anilist-Service">Anilist</a></strong>
  │         └─ <strong>8200: import</strong>
  │              ├─ <strong>8201: <a href="https://github.com/FMI-MediaMaster/Steam-Import-Service">Steam</a></strong>
  │              ├─ <strong>8202: <a href="https://github.com/FMI-MediaMaster/Hardcover-Import-Service">Hardcover</a></strong>
  │              ├─ <strong>8203: <a href="https://github.com/FMI-MediaMaster/Trakt-Import-Service">Trakt</a></strong>
  │              └─ <strong>8204: <a href="https://github.com/FMI-MediaMaster/MAL-Import-Service">MyAnimeList</a></strong>
  └─ frontend
</pre>

## 🛠️ Setup
1. Clone the repository
```sh
git clone --recurse-submodules https://github.com/FMI-MediaMaster/MediaMaster.git
```

2. Add .env for each service
```sh
cd backend/<path-to-service>
cp .env.example .env  # fill the ones between <>
```

3. Start the server
```sh
cd backend
devbox run compose:up
```

4. Stop the server
```sh
cd backend
devbox run compose:down
```
