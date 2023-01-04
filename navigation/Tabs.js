import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import My from "../screen/My";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    // sceneContainerStyle:스크린 화면에 대한 스타일링을 할 수 있는 속성.
    <Tab.Navigator
      screenOptions={{ tabbarLabelPosition: "beside-icon" }}
      sceneContainerStyle={{ backgroundColor: "green" }}
    >
      <Tab.Screen
        options={{
          title: "영화",
          headerTitleAlign: "left",
          tabbarLabel: "Movie",
          tabBarIcon: ({ color, size }) => {
            //영화 아이콘
            <MaterialIcons name="local-movies" size={size} color={color} />;
          },
          tabBarBadge: "hi",
        }}
        // tabbarLabel : tabs의 밑 title
        //tabbarLabelPosition : 타이틀 위치
        //tabBarIcon : 매개변수라 콜백함수를 써야함.일괄적으로 아이콘이 활성화 됐을때 title과 같은 색이나 사이즈로 적용하고 시픙ㄹ때.
        //tabBarBadge
        //headerTitleAlign : header정렬. ios와 안드로이드 정렬이 달라 넣으면 좋다..
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: "내정보",
          tabbarLabel: "My",
          tabBarIcon: ({ color, size }) => {
            //영화 아이콘
            <Foundation name="local-movies" size={size} color={color} />;
          },
        }}
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
