/* eslint-disable no-unused-vars */
import styled from 'styled-components';

interface AddMeetingTopicBoxProps {
  topic: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick: (newTopic: string) => void;
}

const MeetingTopicAddBox = ({ topic, onChange, onKeyDown, onClick }: AddMeetingTopicBoxProps) => {
  return (
    <S.AddTopicBox>
      <S.StyledTopicInput
        type="text"
        placeholder="회의 안건을 추가해보세요!"
        value={topic}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <S.TopicAddButton onClick={() => onClick(topic)}>안건 추가하기</S.TopicAddButton>
    </S.AddTopicBox>
  );
};

export default MeetingTopicAddBox;

const S = {
  AddTopicBox: styled.div`
    margin-top: 20px;
    display: flex;
    gap: 10px;
  `,
  StyledTopicInput: styled.input`
    width: 75%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--gray01);
    background-color: ${(props) => props.theme.theme07};
    padding: 10px 15px;

    &::placeholder {
      color: ${(props) => props.theme.text10};
    }
  `,
  TopicAddButton: styled.button`
    width: 25%;
    height: 40px;
    border-radius: 5px;
    background: ${(props) => props.theme.theme02};
    color: ${(props) => props.theme.text06};
    font-size: 14px;
    font-weight: 700;
    padding: 10px;
    &:hover {
      background: ${(props) => props.theme.theme01};
      color: var(--dark08);
    }
  `,
};
