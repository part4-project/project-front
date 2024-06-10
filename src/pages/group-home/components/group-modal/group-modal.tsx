import ConfirmModal from '@components/modal/confirm-modal/confirm-modal';
import Modal from '@components/modal/modal';
import ModalButton from '@components/modal/modal-button';
import GroupInvite from '@pages/group-home/components/group-modal/group-invite';
import GroupMemberList from '@pages/group-home/components/group-modal/group-member-list';
import styled from 'styled-components';

interface GroupModalProps {
  isOpen: {
    group: boolean;
    confirm: boolean;
  };
  onGroupClose: () => void;
  onConfirmClose: () => void;
  onConfirmOpen: () => void;
}

const GroupModal = ({ isOpen, onGroupClose, onConfirmClose, onConfirmOpen }: GroupModalProps) => {
  const handleSaveGroupClick = () => {
    onGroupClose();
  };

  return (
    <Modal isOpen={isOpen.group} onClose={onGroupClose} headerTitle="그룹관리">
      <S.ModalWrap>
        <S.ModalContent>
          <GroupInvite />
          <GroupMemberList />
        </S.ModalContent>
        <S.ModalFooter>
          <S.GroupDisbandment onClick={onConfirmOpen}>그룹 해체하기</S.GroupDisbandment>
          <ModalButton type="primary" onClick={handleSaveGroupClick}>
            저장하기
          </ModalButton>
        </S.ModalFooter>
      </S.ModalWrap>
      <ConfirmModal isOpen={isOpen.confirm} onClose={onConfirmClose} />
    </Modal>
  );
};

export default GroupModal;

const S = {
  ModalWrap: styled.div`
    width: 500px;
  `,
  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px 20px;
  `,
  ModalFooter: styled.div`
    margin-top: 8px;
    display: flex;
    align-items: end;
    justify-content: space-between;
  `,

  GroupDisbandment: styled.div`
    color: var(--gray01);
    font-weight: 500;
    text-decoration: underline;
    &:hover {
      cursor: pointer;
      color: #e74133;
    }
  `,
};
