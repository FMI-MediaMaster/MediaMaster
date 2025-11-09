# Architecture

<pre>
Media Master
  ├─ backend
  │    ├─ external-services
  │    │    ├─ metadata
  │    │    │    ├─ <a href="https://github.com/FMI-MediaMaster/TMDB-Service">TMDB</a>  
  │    │    │    ├─ <a href="https://github.com/FMI-MediaMaster/PCGW-Service">PCGW</a>
  │    │    │    ├─ <a href="https://github.com/FMI-MediaMaster/Goodreads-Service">Goodreads</a>
  │    │    │    └─ <a href="https://github.com/FMI-MediaMaster/Anilist-Service">Anilist</a>
  │    │    └─ import
  │    ├─ <a href="https://github.com/FMI-MediaMaster/User-Service">user-service</a>
  │    └─ media-service
  └─ frontend
</pre>

## Setup
1. Clone the repository
```sh
  git clone --recurse-submodules https://github.com/FMI-MediaMaster/MediaMaster.git
```
