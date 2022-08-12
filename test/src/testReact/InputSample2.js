import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = e => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;

//... 문법은 spread 문법
//객체의 내용을 모두 "펼쳐서" 기존 객체를 복사해준다

//객체를 업데이트 할땐,기존 객체를 직접 수정X
//새로운 객체를 만들어, 새 객체에 변화 주기

//💡여러가지 Input상태 관리하기
