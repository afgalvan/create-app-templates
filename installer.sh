#!/bin/bash

echo "create-app installer"
mkdir -p ~/.config/create-app
wget https://raw.githubusercontent.com/afgalvan/create-app/web/create_app.sh
chmod +x create_app.sh
if [ -d "$1" ]; then
    echo "yarn" > ~/.config/create-app/default_pm
else
    echo "$1" > ~/.config/create-app/default_pm
fi
if [ -d ~/.config/create-app/create_app.sh ]; then
    rm -f ~/.config/create-app/create_app.sh
fi
mv create_app.sh ~/.config/create-app/
echo "alias create-app=$HOME/.config/create-app/create_app.sh" >> ~/.bashrc
