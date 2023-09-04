fx_version "cerulean"
game "gta5"
lua54 "yes"

author "Zerio"
description "???"

shared_scripts {
  "build/shared.lua"
}

client_scripts {
  "build/client.lua"
}

server_scripts {
  "build/server.lua",
}

files {
  "build/ui/index.html",
  "build/ui/assets/*.js",
  "build/ui/assets/*.css"
}

ui_page "build/ui/index.html"
-- ui_page "http://localhost:5173" -- Use with dev-server
