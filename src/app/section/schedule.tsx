"use client";

import { useState, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Calendar, Clock, MapPin, User, CheckCircle, ArrowRight } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  description: string;
  location?: string;
  type: 'meeting' | 'call' | 'appointment' | 'reminder';
}

// Event templates for random generation
const eventTemplates = [
  // Meeting templates
  { title: 'Weekly Planning Session', description: 'Team planning session for the upcoming week priorities and task assignments.', type: 'meeting', location: 'Conference Room B' },
  { title: 'Sales Team Meeting', description: 'Monthly sales review and performance analysis.', type: 'meeting', location: 'Main Conference Room' },
  { title: 'Customer Success Review', description: 'Quarterly customer success metrics review and improvement strategies.', type: 'meeting', location: 'Customer Success Office' },
  { title: 'Marketing Campaign Review', description: 'Review of marketing campaign performance and ROI analysis.', type: 'meeting', location: 'Marketing Department' },
  { title: 'Team Standup', description: 'Daily team synchronization and progress updates.', type: 'meeting' },
  { title: 'Year-end Review', description: 'Annual performance review and planning for next year.', type: 'meeting', location: 'Main Office' },
  { title: 'Holiday Party Planning', description: 'Planning meeting for company celebration.', type: 'meeting', location: 'Event Planning Room' },
  { title: 'Code Review', description: 'Weekly code review session for development team.', type: 'meeting', location: 'Development Office' },
  { title: 'Training Session', description: 'Team training on new features and capabilities.', type: 'meeting', location: 'Training Room' },
  
  // Call templates
  { title: 'Vickie AI Demo Call', description: 'Live demonstration of Vickie AI features for potential enterprise client.', type: 'call' },
  { title: 'Product Strategy Call', description: 'Strategic planning call for product roadmap and feature prioritization.', type: 'call' },
  { title: 'Partnership Discussion', description: 'Strategic partnership discussion with potential integration partner.', type: 'call' },
  { title: 'Schedule a Call with Vickie', description: 'Demo call to showcase Vickie AI capabilities and discuss implementation.', type: 'call' },
  { title: 'Follow-up Call', description: 'Follow-up discussion with interested prospects.', type: 'call' },
  { title: 'Client Check-in Call', description: 'Regular check-in call with key enterprise clients.', type: 'call' },
  { title: 'Prospect Call', description: 'Initial discovery call with potential new client.', type: 'call' },
  { title: 'Investor Update Call', description: 'Monthly investor update and progress report call.', type: 'call' },
  
  // Appointment templates
  { title: 'Client Onboarding', description: 'New client onboarding session and system setup walkthrough.', type: 'appointment', location: 'Virtual Meeting' },
  { title: 'Technical Interview', description: 'Technical interview for senior developer position.', type: 'appointment', location: 'Virtual Meeting' },
  { title: 'Security Audit', description: 'Quarterly security audit and compliance review.', type: 'appointment', location: 'IT Security Office' },
  { title: 'Product Demo', description: 'Live demonstration of new features for potential clients.', type: 'appointment', location: 'Virtual Meeting' },
  { title: 'Client Meeting', description: 'Quarterly review meeting to discuss project progress and upcoming milestones.', type: 'appointment', location: 'Conference Room A' },
  { title: 'Client Presentation', description: 'Quarterly business review presentation for major client.', type: 'appointment', location: 'Client Office' },
  { title: 'UX Research Session', description: 'User experience research session with beta testers.', type: 'appointment', location: 'UX Lab' },
  
  // Reminder templates
  { title: 'System Maintenance', description: 'Scheduled system maintenance and updates reminder.', type: 'reminder' },
  { title: 'Backup Verification', description: 'Weekly backup verification and data integrity check.', type: 'reminder' },
  { title: 'License Renewal', description: 'Software license renewal deadline reminder.', type: 'reminder' },
  { title: 'New Year Preparation', description: 'Final preparations and system checks for the new year.', type: 'reminder' },
];

const timeSlots = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', 
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
];

// Function to generate random events for a given month/year
const generateRandomEvents = (year: number, month: number): Event[] => {
  const events: Event[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // Generate 15-25 random events for the month
  const numEvents = Math.floor(Math.random() * 11) + 15; // 15-25 events
  
  for (let i = 0; i < numEvents; i++) {
    const randomDay = Math.floor(Math.random() * daysInMonth) + 1;
    const randomTemplate = eventTemplates[Math.floor(Math.random() * eventTemplates.length)];
    const randomTime = timeSlots[Math.floor(Math.random() * timeSlots.length)];
    
    events.push({
      id: `${year}-${month}-${i}`,
      title: randomTemplate.title,
      date: new Date(year, month, randomDay),
      time: randomTime,
      description: randomTemplate.description,
      location: randomTemplate.location,
      type: randomTemplate.type as 'meeting' | 'call' | 'appointment' | 'reminder'
    });
  }
  
  return events;
};

export default function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024); // Default to desktop width
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  
  // Ensure client-side rendering to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
    
    // Set initial window width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      
      // Add resize listener
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  // Generate events for the current displayed month (only on client)
  const currentEvents = useMemo(() => {
    if (!isClient) return [];
    return generateRandomEvents(currentDate.getFullYear(), currentDate.getMonth());
  }, [currentDate, isClient]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date: Date): Event[] => {
    return currentEvents.filter((event: Event) => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const openEventModal = (event: Event, clickEvent?: React.MouseEvent) => {
    if (clickEvent) {
      const rect = (clickEvent.target as HTMLElement).getBoundingClientRect();
      setPopoverPosition({
        x: rect.left + rect.width / 2,
        y: rect.top
      });
    }
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setPopoverPosition({ x: 0, y: 0 });
  };

  const calculatePopoverPosition = () => {
    const popoverWidth = windowWidth < 768 ? 320 : 400;
    const popoverHeight = windowWidth < 768 ? 400 : 500;
    const padding = 20;
    
    let x = popoverPosition.x - popoverWidth / 2;
    let y = popoverPosition.y - popoverHeight - 20; // 20px above the element
    
    // Ensure popover stays within viewport
    if (x < padding) x = padding;
    if (x + popoverWidth > window.innerWidth - padding) {
      x = window.innerWidth - popoverWidth - padding;
    }
    
    // If popover would go above viewport, show it below instead
    if (y < padding) {
      y = popoverPosition.y + 40; // Show below the element
    }
    
    return { x, y };
  };

  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'meeting': return 'bg-blue-500';
      case 'call': return 'bg-green-500';
      case 'appointment': return 'bg-purple-500';
      case 'reminder': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-20 sm:h-28 md:h-32 lg:h-36 xl:h-32 border border-gray-200"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const events = getEventsForDate(date);
      const isToday = new Date().toDateString() === date.toDateString();

      days.push(
        <div key={day} className={`h-20 sm:h-28 md:h-32 lg:h-36 xl:h-32 border border-gray-200 p-1 sm:p-2 md:p-2 lg:p-3 ${isToday ? 'bg-blue-50' : 'bg-white'} hover:bg-gray-50 transition-colors`}>
          <div className={`text-xs sm:text-sm md:text-sm lg:text-base font-semibold mb-1 ${isToday ? 'text-blue-600' : 'text-gray-700'}`}>
            {day}
          </div>
          <div className="space-y-1">
             {events.slice(0, windowWidth < 640 ? 2 : windowWidth < 768 ? 2 : windowWidth < 1024 ? 3 : 3).map((event) => (
               <button
                 key={event.id}
                 type="button"
                 onClick={(e) => openEventModal(event, e)}
                 className={`text-[10px] sm:text-xs md:text-xs lg:text-sm p-0.5 sm:p-1 md:p-1 lg:p-1.5 rounded cursor-pointer hover:opacity-80 transition-opacity text-white ${getEventTypeColor(event.type)} w-full text-left`}
               >
                 <div className="truncate font-medium">{event.title}</div>
                 <div className="truncate opacity-90 hidden sm:block md:block lg:block">{event.time}</div>
               </button>
             ))}
             {events.length > (windowWidth < 640 ? 2 : windowWidth < 768 ? 2 : windowWidth < 1024 ? 3 : 3) && (
               <div className="text-[10px] sm:text-xs md:text-xs lg:text-sm text-gray-500 font-medium">
                 +{events.length - (windowWidth < 640 ? 2 : windowWidth < 768 ? 2 : windowWidth < 1024 ? 3 : 3)} more
               </div>
             )}
           </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto my-5 px-4 sm:px-6 md:px-7 lg:px-7 xl:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-start sm:items-center md:items-center lg:items-center justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-4 md:gap-5 lg:gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[62px] font-bold text-[#19331B] leading-tight md:leading-tight lg:leading-tight xl:leading-[62px]">
          Schedule a Call
        </h1>
        <div className="flex items-center gap-2 sm:gap-4 md:gap-4 lg:gap-5">
           <button
             type="button"
             onClick={() => navigateMonth('prev')}
             className="p-2 md:p-2.5 lg:p-3 rounded-full hover:bg-gray-100 transition-colors"
           >
             <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-600" />
           </button>
           <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-semibold text-gray-800 min-w-[150px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] text-center">
             {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
           </h2>
           <button
             type="button"
             onClick={() => navigateMonth('next')}
             className="p-2 md:p-2.5 lg:p-3 rounded-full hover:bg-gray-100 transition-colors"
           >
             <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-gray-600" />
           </button>
         </div>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-[20px] shadow-lg overflow-hidden">
        {/* Day headers */}
        <div className="grid grid-cols-7 bg-gray-50">
          {dayNames.map((day) => (
            <div key={day} className="p-2 sm:p-4 md:p-4 lg:p-5 text-center font-semibold text-gray-700 text-xs sm:text-sm md:text-sm lg:text-base">
              <span className="hidden sm:inline md:inline lg:inline">{day}</span>
              <span className="sm:hidden md:hidden lg:hidden">{day.slice(0, 1)}</span>
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7">
          {renderCalendarDays()}
        </div>
      </div>

      {/* Modern Event Popover */}
      {isModalOpen && selectedEvent && (
        <>
          {/* Backdrop */}
          <button 
            type="button"
            className="fixed inset-0 bg-black bg-opacity-50 z-40 cursor-default"
            onClick={closeModal}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                closeModal();
              }
            }}
            aria-label="Close modal"
          />
          
          {/* Popover */}
          <div 
            className="fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            style={{
              left: `${calculatePopoverPosition().x}px`,
              top: `${calculatePopoverPosition().y}px`,
              width: windowWidth < 768 ? '320px' : '400px',
              maxHeight: windowWidth < 768 ? '400px' : '500px'
            }}
          >
            {/* Header */}
            <div className={`p-4 md:p-6 lg:p-6 text-white ${getEventTypeColor(selectedEvent.type)}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base font-medium capitalize">{selectedEvent.type}</span>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">{selectedEvent.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 lg:p-6 space-y-4 md:space-y-5 lg:space-y-6">
              {/* Date and Time */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`p-2 md:p-3 rounded-full ${getEventTypeColor(selectedEvent.type)} bg-opacity-10`}>
                  <Clock className={`w-4 h-4 md:w-5 md:h-5 ${getEventTypeColor(selectedEvent.type).replace('bg-', 'text-')}`} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">
                    {selectedEvent.date.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">{selectedEvent.time}</p>
                </div>
              </div>

              {/* Location */}
              {selectedEvent.location && (
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`p-2 md:p-3 rounded-full ${getEventTypeColor(selectedEvent.type)} bg-opacity-10`}>
                    <MapPin className={`w-4 h-4 md:w-5 md:h-5 ${getEventTypeColor(selectedEvent.type).replace('bg-', 'text-')}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm md:text-base">Location</p>
                    <p className="text-gray-600 text-sm md:text-base">{selectedEvent.location}</p>
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className={`p-2 md:p-3 rounded-full ${getEventTypeColor(selectedEvent.type)} bg-opacity-10 mt-1`}>
                  <User className={`w-4 h-4 md:w-5 md:h-5 ${getEventTypeColor(selectedEvent.type).replace('bg-', 'text-')}`} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Description</p>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{selectedEvent.description}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-6 border-t border-gray-100">
                <button
                  type="button"
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3 ${getEventTypeColor(selectedEvent.type)} text-white rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm md:text-base`}
                >
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                  Join Meeting
                </button>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm md:text-base"
                >
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  Reschedule
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
