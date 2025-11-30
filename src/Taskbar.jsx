import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GitHubIcon2 from './assets/tech/Github2.png';
import LinkedinIcon from './assets/tech/LinkedIn.png'

function Taskbar({ buttonText = 'Back to Desktop', onButtonClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState('');
  const [showColon, setShowColon] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December' ];

  const today = {
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  const updateTime = () => {
    const now = new Date();
    const offset = -5; 
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const centralTime = new Date(utc + 3600000 * offset);

    const hours = String(centralTime.getHours()).padStart(2, '0');
    const minutes = String(centralTime.getMinutes()).padStart(2, '0');
    setCurrentTime(`${hours}:${minutes}`);

    setShowColon((prev) => !prev);
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const prevMonth = () => {
    setCalendarMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (calendarMonth === 0) setCalendarYear((prev) => prev - 1);
  };

  const nextMonth = () => {
    setCalendarMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (calendarMonth === 11) setCalendarYear((prev) => prev + 1);
  };

  const prevYear = () => setCalendarYear((prev) => prev - 1);
  const nextYear = () => setCalendarYear((prev) => prev + 1);

  const goToToday = () => {
    setCalendarMonth(today.month);
    setCalendarYear(today.year);
    setSelectedDate(null);
    setShowCalendar(false);
  };

  const getCalendar = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weeks = [];
    let day = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < firstDay) || day > daysInMonth) {
          week.push(null);
        } else {
          week.push(day);
          day++;
        }
      }
      weeks.push(week);
      if (day > daysInMonth) break;
    }
    return { weeks };
  };

  const handleDayClick = (day) => {
    if (day) {
      setSelectedDate({ day, month: calendarMonth, year: calendarYear });
    }
  };

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      navigate('/desktop');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const calendar = document.querySelector('.bg-purple-800');
      if (showCalendar && calendar && !calendar.contains(event.target)) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCalendar]);

  const isDesktopPage = location.pathname === '/desktop';

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full z-50 bg-gray-800 bg-opacity-70 p-2 flex justify-between items-center">
        <div>
          {!isDesktopPage && (
            <button
              className="text-white text-sm bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition-colors"
              onClick={handleClick}
            >
              {buttonText}
            </button>
          )}
        </div>
        <div className='flex space-x-4'>
          <a href='https://github.com/petern12g' target="_blank" rel='noopener noreferer'>
            <img src={GitHubIcon2} alt="GitHub" className="w-12 h-12"/>
          </a>
          <a href='https://linkedin.com/in/peter-nguyen123' target='_blank' rel='noopener noreferer'>
            <img src={LinkedinIcon} alt="LinkedIn" className="w-12 h-12"/>
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <div className="text-white text-sm">
            {currentTime.split(':').map((part, index) => (
              <span key={index}>
                {part}
                {index === 0 && <span className={showColon ? 'opacity-100' : 'opacity-0'}>:</span>}
              </span>
            ))}
          </div>
          <button
            className="text-white text-lg hover:text-green-400 transition-colors"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            📅
          </button>
        </div>
      </div>

      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-purple-800 p-4 rounded-lg text-white">
            <div className="text-4xl font-bold">
              {currentTime.split(':').map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && <span className={showColon ? 'opacity-100' : 'opacity-0'}>:</span>}
                </span>
              ))}
            </div>
            <div className="text-lg">
              {selectedDate
                ? `Selected: ${selectedDate.day} ${monthNames[selectedDate.month]} ${selectedDate.year}`
                : `Tuesday, ${new Date().getDate()} ${monthNames[new Date().getMonth()]} ${new Date().getFullYear()}`}
            </div>
            <div className="flex justify-between mt-2">
              <span className="cursor-pointer" onClick={prevYear}>{'<<'}</span>
              <span className="cursor-pointer" onClick={prevMonth}>{'<'}</span>
              <span className="text-center">{`${monthNames[calendarMonth]} ${calendarYear}`}</span>
              <span className="cursor-pointer" onClick={nextMonth}>{'>'}</span>
              <span className="cursor-pointer" onClick={nextYear}>{'>>'}</span>
            </div>
            <div className="flex justify-end mt-2">
              <button
                className="text-white bg-blue-600 px-2 py-1 rounded hover:bg-blue-700"
                onClick={goToToday}
              >
                Today
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 mt-2">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                <div key={day} className="text-center font-bold">{day}</div>
              ))}
              {getCalendar(calendarMonth, calendarYear).weeks.flat().map((day, index) => (
                <div
                  key={index}
                  tabIndex={day ? 0 : -1}
                  className={`text-center cursor-pointer p-1 hover:bg-purple-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    day === today.date && calendarMonth === today.month && calendarYear === today.year
                      ? 'text-red-500 font-bold'
                      : selectedDate && day === selectedDate.day && calendarMonth === selectedDate.month && calendarYear === selectedDate.year
                      ? 'bg-blue-500 text-white'
                      : ''
                  }`}
                  onClick={() => handleDayClick(day)}
                >
                  {day || ''}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Taskbar;