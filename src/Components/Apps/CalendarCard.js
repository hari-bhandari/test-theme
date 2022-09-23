import React from "react";
import { Calendar, momentLocalizer,Views } from 'react-big-calendar';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import '../../asset/vendor/fullcalendar/fullcalendar.min.css';
import {events} from "../../Data/AppData";

let allViews = Object.keys(Views).map(k =>{
    if(k !== "WORK_WEEK"){
    return  Views[k]
  }
  return null
    }
   )
const localizer =momentLocalizer(moment)
class CalendarCard extends React.Component {
  render() {
    return (
        <div className="col-lg-8">
                    <div className="card">
                        <div className="body">
                        <FullCalendar
                        defaultView="dayGridMonth"
                        header={{
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                            }}
                            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin,listPlugin ]}
                            events={events}

                     />
                        </div>
                    </div>
        </div>
    );
  }
}
export default CalendarCard
