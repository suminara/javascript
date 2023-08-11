const student = [
            {
                id: 1, product: '연필', stock: 10
            },
            {
                id: 2, product: '지우개', stock: 33
            },
            {
                id: 3, product: '체육복', stock: 2
            },
            {
                id: 4, product: '만연필', stock: 5
            },
            {
                id: 5, product: '책받침', stock: 100
            }
        ];

        let products = [];

        for (let i = 0; i < student.length; i++) {
            products.push(student[i].product);
        }

products.sort(function (a, b) {
            // return a - b
            console.log(a, b);
            if (a < b) {
                return -1;
            } else if (b < a) {
                return 1;
            } else {
                return 0;
            }
        });



        const studentList = [
            {
                id: 1, name: '원범', score: 'great'
            },
            {
                id: 2, name: '김진', score: 'so cute'
            },
            {
                id: 3, name: '혜원', score: 'good good'
            },
            {
                id: 4, name: '재현', score: 'too cool for school'
            }
        ]

        //다음 배열에서 name 의 값들을 forEach 문을 이용해 콘솔에 출력해보세요!

        studentList.forEach(function(item){
            console.log(item.name);
        })

        //다음 배열에서 score 의 값들만 모아 새로운 배열로 반환해봅시다! 이때 score 값에 하트💖를 추가합니다.


        const arr = studentList.map(function(item){
            return item.score + '💖';
        })




        const lotto = [];

while (lotto.length < 6) {
    const randomNumber = parseInt(Math.random() * 45 + 1);
    if (!lotto.includes(randomNumber)) {
        lotto.push(randomNumber);//중복막기
    }
}

console.log(lotto);


for (i=2; i<10 ;i++) {
    for (j=1; j<10 ; j++) {
        console.log(`${i} x ${j} = ${i*j} 입니다`)
    }
}

//for문으로 만들기, while문으로 만들기, 함수로 만들기, 이중 for문으로 만들기