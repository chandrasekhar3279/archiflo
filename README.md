# archiflo

for ios
#npx react-native run-ios

for android
#npx react-native run-android

#react-native-vector-icons
--for different icons

Ios::::
iOS=>projectname=>info.plist

Add below.

<key>UIAppFonts</key>
<array>
  <string>AntDesign.ttf</string>
  <string>Entypo.ttf</string>
  <string>EvilIcons.ttf</string>
  <string>Feather.ttf</string>
  <string>FontAwesome.ttf</string>
  <string>FontAwesome5_Brands.ttf</string>
  <string>FontAwesome5_Regular.ttf</string>
  <string>FontAwesome5_Solid.ttf</string>
  <string>Foundation.ttf</string>
  <string>Ionicons.ttf</string>
  <string>MaterialIcons.ttf</string>
  <string>MaterialCommunityIcons.ttf</string>
  <string>SimpleLineIcons.ttf</string>
  <string>Octicons.ttf</string>
  <string>Zocial.ttf</string>
  <string>Fontisto.ttf</string>
</array>

Android:::

— android => app=> build.gradle on top  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle”;

Line number  dependencies 260 =>      implementation project(':react-native-vector-icons')


—andriod=>app>src=>main=>java=>com=>projectname/mainapplication.java=>
    import com.oblador.vectoricons.VectorIconsPackage;
    
    
#react-native-paper
