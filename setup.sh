#!/usr/bin/env bash

project_name="$2"

# Modules
echo -e "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<project version=\"4\">
\t<component name=\"ProjectModuleManager\">
\t\t<modules>
\t\t\t<module fileurl=\"file://\$PROJECT_DIR\$/$project_name.iml\" filepath=\"\$PROJECT_DIR\$/$project_name.iml\" />
\t\t</modules>
\t</component>
</project>" > .idea/modules.xml

echo -e "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<module type=\"JAVA_MODULE\" version=\"4\">
\t<component name=\"NewModuleRootManager\" inherit-compiler-output=\"true\">
\t\t<exclude-output />
\t\t<content url=\"file://\$MODULE_DIR\$\">
\t\t\t<sourceFolder url=\"file://\$MODULE_DIR\$/src\" isTestSource=\"false\" />
\t\t</content>
\t\t<orderEntry type=\"inheritedJdk\" />
\t\t<orderEntry type=\"sourceFolder\" forTests=\"false\" />
\t</component>
</module>" > "$project_name.iml"

rm -f setup.sh
