import { useGroupQuery } from '@hooks/react-query/use-query-group';
import GroupListSkeleton from '@pages/side-bar/components/group-list-skeleton';
import { useGroupStore } from '@stores/group';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GroupItem from './group-item';

const GroupList = () => {
  const navigate = useNavigate();
  const { groupId, setGroupId } = useGroupStore((state) => ({
    groupId: state.groupId,
    setGroupId: state.setGroupId,
  }));
  const { data: groupData, isLoading, isError } = useGroupQuery();

  const handleGroupClick = (groupId: number) => {
    setGroupId(groupId); // store
    navigate('/group-home');
  };

  if (isLoading) return <GroupListSkeleton />;

  if (isError) return 'Error...';

  return (
    <S.GroupListWrap>
      {groupData?.map((group) => (
        <div key={group.groupId} onClick={() => handleGroupClick(group.groupId)}>
          <GroupItem selectGroupId={groupId} {...group} />
        </div>
      ))}
    </S.GroupListWrap>
  );
};

export default GroupList;

const S = {
  GroupListWrap: styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
  `,
};
