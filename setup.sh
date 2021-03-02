#!/usr/bin/env bash

project_name="$2"

# Modules
echo -e "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<project version=\"4\">
<component name=\"ProjectModuleManager\">
<modules>
<module fileurl=\"file://\$PROJECT_DIR\$/$project_name.iml\" filepath=\"\$PROJECT_DIR\$/$project_name.iml\" />
</modules>
</component>
</project>" > .idea/modules.xml

echo -e "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<module type=\"JAVA_MODULE\" version=\"4\">
<component name=\"NewModuleRootManager\" inherit-compiler-output=\"true\">
<exclude-output />
<content url=\"file://\$MODULE_DIR\$\">
<sourceFolder url=\"file://\$MODULE_DIR\$/src\" isTestSource=\"false\" />
</content>
<orderEntry type=\"inheritedJdk\" />
<orderEntry type=\"sourceFolder\" forTests=\"false\" />
</component>
</module>" > "$project_name.xml"

rm -f setup.sh
