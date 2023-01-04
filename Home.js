import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // 한번만 실행
    return () => {
      // 언마운트 시 실행
    };
  }, []); // dependency array가 빈배열이면 컴포넌트 마운트 후 한번만 실행(componentDidmount)
  //앱에서는 화면이 바뀌어도 언마운트가 되지 않는다. 언마운트가 되려면 네비게이션 스텍을 초기화하는 등 렌더링 결과를 전부 초기화하기에 언마운트 된다.

  useFocusEffect(
    useCallBack(() => {
      // 컴포넌트가 현재 화면에 있으면 실행: Focus
      //인자로 useCallBack이라는 것을 받는다.안은 useEffect와 같이 콜백함수와 dependency array가 있다.
      //화면에 보이냐 안보이느냐로 판단.
      return () => {
        // 컴포넌트가 현재 화면에서 벗어나면 실행: Blur
      };
    }, [])
  );

  const navigate = useNavigate();
  const goToAnother = () => {
    navigate("/another");
  };
  return (
    // 홈화면에서는 마운트, 화면을 이동하면 언마운트가 된다.
    <div>
      <Link to="/another">페이지 이동방법1</Link>
      <button onClick={goToAnother}>페이지 이동방법2</button>
    </div>
  );
};
