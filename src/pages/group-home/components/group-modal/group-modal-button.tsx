import { useState } from 'react';
import GroupModal from '@pages/group-home/components/group-modal/group-modal';

interface GroupModalButtonProps {
  children: React.ReactNode;
}

const GroupModalButton = ({ children }: GroupModalButtonProps) => {
  const [isOpen, setIsOpen] = useState({
    group: false,
    confirm: false,
  });

  const handleGroupModalClose = () => {
    //confirm 모달이 열려있으면 닫힘 방지
    if (!isOpen.confirm) {
      setIsOpen((prev) => ({
        ...prev,
        group: false,
      }));
    }
  };

  const handleGroupModalOpen = () => {
    setIsOpen((prev) => ({
      ...prev,
      group: true,
    }));
  };

  const handleConfirmModalClose = () => {
    setIsOpen((prev) => ({
      ...prev,
      confirm: false,
    }));
  };

  const handleConfirmModalOpen = () => {
    setIsOpen((prev) => ({
      ...prev,
      confirm: true,
    }));
  };

  return (
    <>
      <button onClick={handleGroupModalOpen}>{children}</button>
      <GroupModal
        isOpen={isOpen}
        onGroupClose={handleGroupModalClose}
        onConfirmClose={handleConfirmModalClose}
        onConfirmOpen={handleConfirmModalOpen}
      />
    </>
  );
};

export default GroupModalButton;
