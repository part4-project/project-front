import { device } from '@styles/breakpoints';
import { ko } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import styled, { useTheme } from 'styled-components';

interface TDateRangeCalendarProps {
  dateRange: [Date | null, Date | null];
  // eslint-disable-next-line no-unused-vars
  setDateRange: (dateRange: [Date | null, Date | null]) => void;
}

const DateRangeCalendar = ({ dateRange, setDateRange }: TDateRangeCalendarProps) => {
  const theme = useTheme();

  const [startDate, endDate] = dateRange;

  const handleClickCalendarRefreshButton = () => {
    setDateRange([null, null]);
  };

  return (
    <S.Container>
      <S.DatepickerWrapper>
        <S.StyledDatePicker
          locale={ko}
          portalId="root-portal"
          placeholderText="일자 선택"
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          dateFormat="yy-MM-dd"
          onChange={(date) => {
            setDateRange(date as [Date | null, Date | null]);
          }}
        />
        <S.CalendarIcon src={theme.calendar} />
        <S.ArrowIcon src={theme.arrowRight} />
      </S.DatepickerWrapper>
      <S.RefreshButton src={theme.refreshIcon} onClick={handleClickCalendarRefreshButton} />
    </S.Container>
  );
};

export default DateRangeCalendar;

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  DatepickerWrapper: styled.div`
    position: relative;
    // 달력 커스텀
  `,

  StyledDatePicker: styled(DatePicker)`
    background-color: var(--white);
    color: ${(props) => props.theme.theme04};
    font-size: 14px;
    border-radius: 10px;
    gap: 21px;
    padding: 10px 55px 10px 10px;
    cursor: pointer;
    @media ${device.tablet} {
      width: 200px;
      font-size: 11px;
    }
  `,

  CalendarIcon: styled.img`
    position: absolute;
    top: calc(50% - 9px);
    right: 30px;
    width: 18px;
    height: 18px;
    pointer-events: none;
  `,

  ArrowIcon: styled.img`
    position: absolute;
    top: calc(50% - 12px);
    right: 6px;
    width: 24px;
    height: 24px;
    pointer-events: none;
  `,

  RefreshButton: styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
  `,
};
