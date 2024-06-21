import Modal from '@components/modal/modal';
import { TMeetingRoom, TTopic } from '@constants/mockdata.type';
import MeetingForm from './meeting-form/meeting-form';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data?: TMeetingRoom;
  topicData?: TTopic;
}

const MeetingModal = ({ isOpen, onClose, title, data, topicData }: MeetingModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} headerTitle={title}>
      <MeetingForm data={data} topicData={topicData} onClose={onClose} />
    </Modal>
  );
};

export default MeetingModal;
