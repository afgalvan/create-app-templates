mkdir -p ~/.config/create-app
wget https://raw.githubusercontent.com/afgalvan/create-app/web/bin/create_app.sh
chmod +x create_app.sh
mv create_app.sh ~/.config/create-app/
echo "alias create-app=$HOME/.config/create-appcreate_app.sh" >> ~/.bashrc
# echo "alias create-app=$HOME/Documents/Programming/Projects/typescript/create-app/create_app.sh" >> test.sh
