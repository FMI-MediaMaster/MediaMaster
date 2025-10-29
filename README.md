# Architecture

<pre>
Media Master
  ├─ backend
  │    ├─ external-services
  │    │    ├─ metadata
  │    │    │    └─ <a href="https://github.com/FMI-MediaMaster/TMDB-Service">tmdb</a>
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

