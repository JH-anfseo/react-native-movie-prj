import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import Tabs from "./navigation/Tabs";
const Stack = createNativeStackNavigator();
//screencomponents는 navigation이라는 props을 가지고 있다.
//그중 navigate라는 메소드도 가지고 있음.나머지는 API Reference의 Navigation prop보기.
const One = ({ navigation: { navigate, setOptions } }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigate("two")}>
        <Text>One</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setOptions({ title: "변경됐다." })}>
        {/* setOptions:객체를 인자로 받음 */}
        <Text>One</Text>
      </TouchableOpacity>
    </View>
  );
};
const Two = ({ route: { params }, navigation: { navigate, reset } }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigate("Two")}>
        <Text>Two</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          reset({
            index: 0, //해당 컴포넌트에서 reset을 누르면 히스토리를 정할 수 있다.
            //인덱스가 route배열의 몇번째인지 리셋이 됐을 때 첫번째로 나오는 화면이 뭔지 가르킨다.
            route: [{ name: "two" }],
          })
        }
      >
        {/* 네비게이션 state를 초기화 시킨다. 설정한 route화면으로 이동뒤로가기도 안되게*/}
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};
const Thr = ({ navigation: { goBack } }) => {
  return (
    <TouchableOpacity onPress={() => goBack()}>
      <Text>Thr</Text>
    </TouchableOpacity>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      {/* initialRouteName : 해당 state로 이동한다. 
        screenOptions { title변경가능 , headerBackTitle : 뒤로가기 버튼 제목을 변경할 수 있다.
          headerTintColor : 헤더 컬러 변경가능 ,headerShown : 헤더를 감출 수 있다.
        Presentation : 페이지이동 애니메이션이 변한다.}
      */}
      <Stack.Navigator initialRouteName="Thr">
        <Stack.Screen name="one" components={One}></Stack.Screen>
        <Stack.Screen name="Two" components={Two}></Stack.Screen>
        <Stack.Screen name="Thr" components={Thr}></Stack.Screen>
        {/* Screen에 옵션주기 : options{presentation : 해당 컴포넌트만 변경된다.} */}
      </Stack.Navigator>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
