{
    make init
} && {
    rm -f setup.sh
    exit 0
} || {
    echo -e "e\[31mError. Make sure to have \"make\" installed.e\[0m"
    echot "Install it and try: bash setup.sh"
    exit 1
}
