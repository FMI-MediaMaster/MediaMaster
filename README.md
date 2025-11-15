# 📁 Architecture

<pre>
Media Master
  ├─ backend
  │    ├─ external-services
  │    │    ├─ <strong>metadata :8100</strong>
  │    │    │    ├─ <a href="https://github.com/FMI-MediaMaster/TMDB-Service">TMDB</a>  
  │    │    │    ├─ <strong><a href="https://github.com/FMI-MediaMaster/PCGW-Service">PCGW</a>    :8103</strong>
  │    │    │    └─ <strong><a href="https://github.com/FMI-MediaMaster/Anilist-Service">Anilist</a> :8106</strong>
  │    │    └─ import
  │    ├─ <a href="https://github.com/FMI-MediaMaster/User-Service">user-service</a>
  │    └─ media-service
  └─ frontend
</pre>

## 🛠️ Setup
1. Clone the repository
```sh
  git clone --recurse-submodules https://github.com/FMI-MediaMaster/MediaMaster.git
```
