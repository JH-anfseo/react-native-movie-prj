import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import styled from "@emotion/native";

const SectionTitle = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.title};
`;

export default function Movies({ navigation: { navigate } }) {
  const [NowPlaying,setnowPlaying] = useState([])
  const [IsLoading,setisLoading] = useState(true);//로딩중인지 아닌지 확인하기 위한 state.요청이 받아와지면 false 반환
  const BASE_URL = 'https://api.themoviedb.org/3/movie';
  const API_KEY= 'API-KEY'
  //현재 방영중인 영화 정보 가져오기
  const getNoewPlaying = () => { //리스폰스 데이터를 json으로 변환하기. 구조분해할당으로 results가져온다.,
    const {result} = await fetch(`${BASE_URL}/`).then(res => res.json());
    setnowPlaying(result)
    setisLoading(false)//로딩이 끝나면 return값 반환
  }
  useEffect(()=> {
    getNoewPlaying();
  },[]);
  //비동기 함수를 쓰면 데이터를 받는데 시간이 오래걸려 로딩에 대한 예외처리를 해줘야한다.
  if(IsLoading) {
    return <Loader><ActivityIndicator /></Loader>
  }

  return (
    <View>
      {NowPlaying.map(movie => )}
      <SectionTitle>Movies</SectionTitle>
      <TouchableOpacity
        onPress={() =>
          navigate("Stacks", { screen: "one", params: { id: 123 } })
        }
        //navigate에서 서로 같은 스크린으로 이동시 sereenName을 쓰면 좋지만 다른 파일에 있으면...
        //<Stack.Screen name="Statcks" components={Statcks}>여기의 네임과 컴포넌트를 가져온다
        //navigate("Stacks", { screen: "one")
        //Params는 객체형태로
      >
        <Text>Go To One Screen</Text>
      </TouchableOpacity>
    </View>
    )}

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ListTitle = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.title};
`;
