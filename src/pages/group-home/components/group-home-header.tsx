import arrowRight from '@assets/icons/arrow-left.svg';
import MeetingModal from '@components/modal/meeting-modal';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GroupModal from './group-modal/group-modal';

const GroupHomeHeader = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/');
  };

  return (
    <S.Container>
      <S.BackButton onClick={handleBackButtonClick} />
      <S.ManageButtons>
        <GroupModal>그룹 관리</GroupModal>
        <MeetingModal>회의 생성</MeetingModal>
      </S.ManageButtons>
    </S.Container>
  );
};

export default GroupHomeHeader;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  BackButton: styled.img.attrs({
    src: arrowRight,
  })`
    width: 20px;
    cursor: pointer;
  `,

  ManageButtons: styled.div`
    display: flex;
    gap: 20px;
  `,
};
