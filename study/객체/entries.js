// 문제: 최댓값 찾기

// 주어진 객체 data는 각 학생의 이름을 키로 하고, 점수를 밸류로 갖습니다.

// 가장 높은 점수를 가진 학생의 이름을 찾아 반환하세요.
// 가장 높은 점수를 가진 학생의 점수를 반환하세요.
// 객체에서 점수가 특정 값 이상인 학생들을 찾아 이름과 점수를 포함한 배열로 반환하세요.

    const data = {
    "Alice": 85,
    "Bob": 70,
    "Charlie": 92,
    "David": 65,
    "Ella": 78
    };


    function 최고학생찾기(객체) {
        const 최고순정렬 = Object.entries(객체).sort((a, b) => b[1] - a[1]);
        // = Object.values(dataObj).sort((a, b) => b - a);
        return [최고순정렬[0][0],최고순정렬[0][1]];
        //[최고학생,최고점수]
    }
    console.log(최고학생찾기(data))


    function 합격학생들찾기 (합격점수) {
        const 합격학생들 = Object.entries(data).filter(([학생, 점수]) => 점수 >= 합격점수);
        // Object.values(data).filter((점수) => 점수 >= 합격점수);
        return 합격학생들;
    }
    console.log(합격학생들찾기(75));




    // for … in으로 풀수도 있다~!!!!!
    // 근데 이러면 상속된 프로퍼티도 나올수 있고 순서가 뒤죽박죽이 될수도 있다
    // IE8이하면 어떡함??
    // forEach,defineProperty 등등...